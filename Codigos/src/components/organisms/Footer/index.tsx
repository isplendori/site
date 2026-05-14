import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Logo } from "@/components";

export interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("w-full py-9 px-4 md:px-28 bg-white dark:bg-[#0A0A0A] flex flex-col md:flex-row flex-wrap justify-center items-start content-center gap-10 md:gap-0 border-t border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)]", className)}>
      <div className="w-full md:w-104 h-auto md:h-[157.08px] flex flex-col items-start gap-3.5">
        <Logo />

        <p className="w-full md:w-[373.5px] font-sans font-normal text-[14px] leading-4.75 text-[#8E90A1]">
          Casa de design e tecnologia dedicada a construir marcas que geram desejo, autoridade e resultado. Do
          branding ao digital, tudo pensado com propósito.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-2.75 w-full md:w-81.25 h-auto md:h-9">
          <Link
            href="/contato"
            className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 h-9 bg-[#12141B] dark:bg-[#F1F2F4] border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-[200px] hover:bg-[#9E372A] transition-colors group"
          >
            <span className="font-sans font-medium text-[14px] leading-5 text-center text-white dark:text-[#12141B]">
              Entre em contato
            </span>
            <div className="w-2 h-2 [&_path]:transition-colors">
              <ArrowUpRight stroke="#FFFFFF" />
            </div>
          </Link>

          <div className="flex flex-row items-center gap-1 w-28.25 h-8.75">
            {[
              { href: "https://instagram.com", label: "Instagram" },
              { href: "https://behance.net", label: "Behance" },
              { href: "https://dribbble.com", label: "Dribbble" },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                aria-label={s.label}
                className="size-8.75 rounded-full border border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.1)] flex items-center justify-center"
              >
                <span className="sr-only">{s.label}</span>
                <span className="size-4 rounded-full border border-[#434A57]/60" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-164.25 h-auto md:h-39.25 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10.75">
        <div className="w-full md:w-33.5 h-auto md:h-39.25 flex flex-col items-start gap-2.5">
          <div className="w-full h-5.25 flex items-center">
            <span className="font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#434A57]">
              Sitemap
            </span>
          </div>
          <div className="w-full flex flex-col items-start gap-1.5">
            {[
              { href: "/", label: "Início" },
              { href: "/sobre", label: "Sobre nós" },
              { href: "/portfolio", label: "Portfólio" },
              { href: "/planos", label: "Planos" },
              { href: "/diagnostico", label: "Comece agora" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="w-full font-sans font-normal text-[14px] leading-4.75 text-[#202026] dark:text-[#F1F2F4]/50 hover:text-[#9E372A] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:block w-px h-24.75 bg-[rgba(114,123,142,0.1)]" />

        <div className="w-full md:w-36.5 h-auto md:h-39.25 flex flex-col items-start gap-2.5">
          <div className="w-full h-5.25 flex items-center">
            <span className="font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#434A57]">
              Soluções
            </span>
          </div>
          <div className="w-full flex flex-col items-start gap-1.5">
            {[
              { href: "/#marketing", label: "Marketing" },
              { href: "/#design", label: "Design" },
              { href: "/#desenvolvimento", label: "Desenvolvimento" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="w-full font-sans font-normal text-[14px] leading-4.75 text-[#202026] dark:text-[#F1F2F4]/50 hover:text-[#9E372A] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:block w-px h-24.75 bg-[rgba(114,123,142,0.1)]" />

        <div className="w-full md:w-43.5 h-auto md:h-39.25 flex flex-col items-start gap-2.5">
          <div className="w-full h-5.25 flex items-center">
            <span className="font-mono font-semibold text-[12px] leading-5.25 tracking-[0.09em] uppercase text-[#434A57]">
              Políticas
            </span>
          </div>
          <div className="w-full flex flex-col items-start gap-1.5">
            {[
              { href: "/termos", label: "Termos de Uso" },
              { href: "/privacidade", label: "Política de Privacidade" },
              { href: "/cookies", label: "Política de Cookies" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="w-full font-sans font-normal text-[14px] leading-4.75 text-[#202026] dark:text-[#F1F2F4]/50 hover:text-[#9E372A] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
