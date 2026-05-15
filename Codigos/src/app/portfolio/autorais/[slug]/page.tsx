import type { Metadata } from "next";
import Link from "next/link";

import {
  getAllAutoralSlugs,
  getAutoralBySlug,
} from "@/app/autorais.data";
import PortfolioPresentationPage from "@/app/portfolio/PortfolioPresentationPage";
import { MainLayout } from "@/components";

interface AutoralPageProps {
  params: Promise<{
    slug: string | string[];
  }>;
}

function resolveSlug(slug: string | string[]) {
  return Array.isArray(slug) ? slug.join("/") : slug;
}

function getNextAutoralHref(slug: string) {
  const slugs = getAllAutoralSlugs();
  const currentIndex = slugs.indexOf(slug);
  const nextSlug = slugs[(currentIndex + 1) % slugs.length] ?? slugs[0];

  return `/portfolio/autorais/${nextSlug}`;
}

function getPreviousAutoralHref(slug: string) {
  const slugs = getAllAutoralSlugs();
  const currentIndex = slugs.indexOf(slug);
  const previousSlug =
    slugs[(currentIndex - 1 + slugs.length) % slugs.length] ?? slugs[0];

  return `/portfolio/autorais/${previousSlug}`;
}

export async function generateMetadata({
  params,
}: AutoralPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getAutoralBySlug(resolveSlug(resolvedParams.slug));

  if (!project) {
    return {
      title: "Autoral não encontrado",
    };
  }

  return {
    title: `${project.title} — Splendori`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return getAllAutoralSlugs().map((slug) => ({
    slug,
  }));
}

export default async function AutoralProjectPage({ params }: AutoralPageProps) {
  const resolvedParams = await params;
  const slug = resolveSlug(resolvedParams.slug);
  const project = getAutoralBySlug(slug);

  if (!project) {
    return (
      <MainLayout>
        <div className="mx-auto flex min-h-screen w-full max-w-304 flex-col items-center justify-center border-[rgba(114,123,142,0.1)] px-4 text-center dark:border-[rgba(255,255,255,0.1)] sm:border-x">
          <h1 className="font-instrument-serif text-[36px] font-light text-[#434A57]">
            Autoral não encontrado
          </h1>
          <Link
            href="/portfolio/autorais"
            className="mt-4 font-sans text-[14px] text-[#8E90A1] hover:text-[#434A57]"
          >
            Voltar para autorais
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <PortfolioPresentationPage
      project={project}
      backHref="/portfolio/autorais"
      backLabel="autorais"
      previousHref={getPreviousAutoralHref(slug)}
      nextHref={getNextAutoralHref(slug)}
      collectionLabel="Autorais"
    />
  );
}
