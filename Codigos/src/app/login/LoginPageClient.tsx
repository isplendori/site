"use client";

import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { ArrowUpRight, MainLayout } from "@/components";
import { cn } from "@/lib/utils";

type UserTrail = "admin" | "employee" | "client";
type LoginState = "idle" | "checking" | "success";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const testPassword = "12345";

const adminAccounts = new Set(["anna@splendori.com.br", "edson@splendori.com.br"]);

const resolveTrail = (email: string): UserTrail => {
  const normalizedEmail = email.trim().toLowerCase();

  if (adminAccounts.has(normalizedEmail)) {
    return "admin";
  }

  if (normalizedEmail.endsWith("@splendori.com.br")) {
    return "employee";
  }

  return "client";
};

const trailCopy: Record<UserTrail, { label: string; description: string }> = {
  admin: {
    label: "Admin",
    description: "Controle geral",
  },
  employee: {
    label: "Funcionário",
    description: "Equipe ou vendedor",
  },
  client: {
    label: "Cliente",
    description: "Projetos autorizados",
  },
};

const LoginPageClient = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [state, setState] = useState<LoginState>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const emailIsValid = emailPattern.test(email.trim());
  const selectedTrail = useMemo(() => resolveTrail(email), [email]);

  const trails = useMemo(
    () =>
      (Object.keys(trailCopy) as UserTrail[]).map((trail) => ({
        trail,
        ...trailCopy[trail],
        active: emailIsValid && trail === selectedTrail,
      })),
    [emailIsValid, selectedTrail]
  );

  useEffect(() => {
    if (state !== "success") return;

    const timeout = window.setTimeout(() => {
      router.push("/dashboard");
    }, 1200);

    return () => window.clearTimeout(timeout);
  }, [router, state]);

  const validate = (submittedEmail: string, submittedPassword: string) => {
    const nextErrors: { email?: string; password?: string } = {};
    const submittedEmailIsValid = emailPattern.test(submittedEmail.trim());
    const submittedPasswordIsValid = submittedPassword === testPassword;

    if (!submittedEmailIsValid) {
      nextErrors.email = "Use um e-mail válido para identificar a trilha.";
    }

    if (!submittedPasswordIsValid) {
      nextErrors.password = "Use a senha de teste 12345 enquanto o backend não está ativo.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const submittedEmail = String(formData.get("email") ?? "");
    const submittedPassword = String(formData.get("password") ?? "");

    if (!validate(submittedEmail, submittedPassword)) {
      setState("idle");
      return;
    }

    const normalizedEmail = submittedEmail.trim().toLowerCase();
    const trail = resolveTrail(normalizedEmail);

    setState("checking");

    window.setTimeout(() => {
      window.localStorage.setItem(
        "splendori:user-session",
        JSON.stringify({
          email: normalizedEmail,
          remember,
          role: trail,
          roleLabel: trailCopy[trail].label,
          scope:
            trail === "admin"
              ? "Controle geral"
              : "Somente projetos autorizados e atribuídos",
          validatedAt: new Date().toISOString(),
        })
      );

      setState("success");
      setMessage(`${trailCopy[trail].label} identificado. Redirecionando para a dashboard.`);
    }, 600);
  };

  return (
    <MainLayout>
      <div className="mx-auto flex w-full max-w-304 flex-col border-[rgba(114,123,142,0.1)] bg-white px-4 dark:border-[rgba(255,255,255,0.1)] dark:bg-[#0A0A0A] sm:border-x sm:px-0">
        <section className="grid min-h-[calc(100vh-80px)] w-full grid-cols-1 border-b border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] lg:grid-cols-[1fr_448px]">
          <div className="relative flex min-h-80 flex-col justify-end overflow-hidden border-b border-[rgba(114,123,142,0.1)] bg-[#F8F3EC] px-6 py-10 dark:border-[rgba(255,255,255,0.1)] dark:bg-[#101116] lg:border-b-0 lg:border-r lg:px-13.5">
            <div className="absolute inset-0 opacity-65 [background-image:linear-gradient(rgba(114,123,142,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(114,123,142,0.09)_1px,transparent_1px)] [background-size:56px_56px]" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,#fff,rgba(255,255,255,0))] dark:bg-[linear-gradient(to_top,#0A0A0A,rgba(10,10,10,0))]" />

            <div className="relative z-10 flex max-w-133 flex-col gap-5">
              <span className="tagline-text reveal-element text-[#8E90A1]">
                ÁREA DE USUÁRIOS
              </span>
              <h1 className="reveal-element delay-[160ms] font-instrument-serif text-[40px] font-light leading-[42px] text-[#434A57] md:text-[56px] md:leading-[58px]">
                Entre no seu espaço Splendori.
              </h1>
              <p className="reveal-element delay-[320ms] max-w-102 font-sans text-[14px] leading-4.75 text-[#8E90A1]">
                Admin, equipe, vendas e clientes acessam a mesma base, cada um com a própria trilha e permissões.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center px-4 py-12 sm:px-8 lg:px-10">
            <form
              onSubmit={handleSubmit}
              className="reveal-element flex w-full max-w-96 flex-col gap-6"
              noValidate
            >
              <div className="flex flex-col gap-2">
                <span className="tagline-text text-[#8E90A1]">
                  LOGIN
                </span>
                <h2 className="font-instrument-serif text-[36px] font-light leading-10.75 text-[#434A57]">
                  Acesse sua conta
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <label className="flex flex-col gap-2">
                  <span className="font-sans text-[13px] font-medium leading-5 text-[#434A57]">
                    E-mail
                  </span>
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setErrors((current) => ({ ...current, email: undefined }));
                    }}
                    placeholder="anna@splendori.com.br"
                    autoComplete="email"
                    className={cn(
                      "h-11 rounded-md border border-[rgba(114,123,142,0.14)] bg-white px-3.5 font-sans text-[14px] leading-5 text-[#434A57] outline-none transition-colors placeholder:text-[#B4B7C3] focus:border-[#9E372A] dark:border-[rgba(255,255,255,0.12)] dark:bg-[#0A0A0A] dark:text-[#F1F2F4]",
                      errors.email && "border-[#9E372A]"
                    )}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <span className="font-sans text-[12px] leading-4 text-[#9E372A]">
                      {errors.email}
                    </span>
                  )}
                </label>

                <label className="flex flex-col gap-2">
                  <span className="font-sans text-[13px] font-medium leading-5 text-[#434A57]">
                    Senha
                  </span>
                  <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setErrors((current) => ({ ...current, password: undefined }));
                    }}
                    placeholder="Senha de teste: 12345"
                    autoComplete="current-password"
                    className={cn(
                      "h-11 rounded-md border border-[rgba(114,123,142,0.14)] bg-white px-3.5 font-sans text-[14px] leading-5 text-[#434A57] outline-none transition-colors placeholder:text-[#B4B7C3] focus:border-[#9E372A] dark:border-[rgba(255,255,255,0.12)] dark:bg-[#0A0A0A] dark:text-[#F1F2F4]",
                      errors.password && "border-[#9E372A]"
                    )}
                    aria-invalid={Boolean(errors.password)}
                  />
                  {errors.password && (
                    <span className="font-sans text-[12px] leading-4 text-[#9E372A]">
                      {errors.password}
                    </span>
                  )}
                </label>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-center gap-2 font-sans text-[13px] leading-5 text-[#8E90A1]">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(event) => setRemember(event.target.checked)}
                    className="h-4 w-4 rounded border-[rgba(114,123,142,0.2)] accent-[#9E372A]"
                  />
                  Manter-se conectado
                </label>

                <Link
                  href="mailto:anna@splendori.com.br?subject=Recuperar%20acesso%20Splendori"
                  className="font-sans text-[13px] leading-5 text-[#8E90A1] transition-colors hover:text-[#9E372A]"
                >
                  Esqueci minha senha
                </Link>
              </div>

              <div className="grid grid-cols-1 overflow-hidden rounded-md border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] sm:grid-cols-3">
                {trails.map((item) => (
                  <div
                    key={item.trail}
                    className={cn(
                      "border-b border-[rgba(114,123,142,0.1)] px-3 py-3 last:border-b-0 dark:border-[rgba(255,255,255,0.1)] sm:border-b-0 sm:border-r sm:last:border-r-0",
                      item.active && "bg-[#9E372A]/6"
                    )}
                  >
                    <span
                      className={cn(
                        "block font-mono text-[10px] font-semibold uppercase leading-4 tracking-[0.08em] text-[#B4B7C3]",
                        item.active && "text-[#9E372A]"
                      )}
                    >
                      {item.label}
                    </span>
                    <span className="block truncate font-sans text-[12px] leading-4 text-[#8E90A1]">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={state === "checking"}
                  className="group flex h-10 items-center justify-center gap-2.5 rounded-md border border-[#12141B] bg-[#12141B] px-4 font-sans text-[14px] font-medium leading-5 text-white transition-colors hover:border-[#9E372A] hover:bg-[#9E372A] disabled:cursor-wait disabled:opacity-70 dark:border-[#F1F2F4] dark:bg-[#F1F2F4] dark:text-[#12141B]"
                >
                  {state === "checking" ? "Validando acesso" : "Entrar"}
                  <span className="h-2 w-2 [&_path]:transition-colors [&_path]:group-hover:stroke-white">
                    <ArrowUpRight stroke="#FFFFFF" />
                  </span>
                </button>

                <Link
                  href="mailto:anna@splendori.com.br?subject=Solicitar%20acesso%20Splendori"
                  className="flex h-10 items-center justify-center rounded-md border border-dashed border-[rgba(114,123,142,0.28)] px-4 font-sans text-[14px] leading-5 text-[#8E90A1] transition-colors hover:border-[#9E372A] hover:text-[#9E372A] dark:border-[rgba(255,255,255,0.2)]"
                >
                  Solicitar acesso
                </Link>
              </div>

              <p aria-live="polite" className="min-h-5 font-sans text-[13px] leading-5 text-[#8E90A1]">
                {message}
              </p>
            </form>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default LoginPageClient;
