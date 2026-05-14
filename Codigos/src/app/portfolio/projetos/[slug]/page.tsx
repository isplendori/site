import type { Metadata } from "next";
import Link from "next/link";

import { getProjectBySlug, getAllProjectSlugs } from "@/app/projetos.data";
import { BrandDivider, FinalCtaSection, MainLayout, ProjectCarousel, ProjectMeta } from "@/components";
import { defaultBrands } from "@/app/page.data";

interface ProjectPageProps {
  params: Promise<{
    slug: string | string[];
  }>;
}

function resolveSlug(slug: string | string[]) {
  return Array.isArray(slug) ? slug.join("/") : slug;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolveSlug(resolvedParams.slug));

  if (!project) {
    return {
      title: "Projeto não encontrado",
    };
  }

  return {
    title: `${project.title} — Splendori`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolveSlug(resolvedParams.slug));

  if (!project) {
    return (
      <MainLayout>
        <div className="flex w-full max-w-304 mx-auto flex-col items-center justify-center px-4 sm:px-0 sm:border-x border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] min-h-screen">
          <h1 className="text-2xl font-bold">Projeto não encontrado</h1>
          <Link href="/portfolio/projetos" className="mt-4 text-sm text-[#8E90A1] hover:text-[#434A57] dark:hover:text-[#FAFAFA]">
            Voltar para projetos
          </Link>
        </div>
      </MainLayout>
    );
  }

  // Collect all project images for the carousel
  const allImages = [
    project.coverImage,
    ...project.content.sections
      .flatMap(section => {
        if (section.type === 'image' && section.image) return [section.image];
        if (section.type === 'gallery' && section.images) return section.images.map(img => img.src);
        return [];
      })
  ].filter((img, index, self) => img && self.indexOf(img) === index);

  return (
    <MainLayout>
      <div className="flex w-full max-w-304 mx-auto flex-col items-center px-4 sm:px-0 sm:border-x border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)]">
        
        {/* 1. Hero Carousel (Capa + Navegação) */}
        <section className="w-full">
          <ProjectCarousel images={allImages} />
        </section>

        {/* 2. Metadata Section (Quando, Responsável, Área) */}
        <section className="w-full px-6 md:px-0">
          <ProjectMeta 
            year={project.year} 
            responsible={project.client} 
            category={project.category} 
          />
        </section>

        {/* 3. Presentation Section (Título + Texto) */}
        <section className="w-full py-20 px-6 md:px-0 reveal-element">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#9E372A] font-bold">Apresentação</span>
              <h2 className="font-instrument-serif font-light text-5xl md:text-6xl leading-[1.1] tracking-[-0.02em] text-[#202026] dark:text-[#F8FAFC]">
                {project.title}
              </h2>
            </div>
            
            <div className="space-y-8">
              <p className="text-base leading-6 text-[#61687D] dark:text-[#B8BACC] font-light">
                {project.description}
              </p>
              
              {/* Additional content from sections */}
              {project.content.sections.map((section, index) => (
                section.type === "text" && (
                  <div key={index} className="space-y-4">
                    {section.title && (
                      <h3 className="font-instrument-serif text-3xl text-[#202026] dark:text-[#F8FAFC]">
                        {section.title}
                      </h3>
                    )}
                    <p className="text-base leading-6 text-[#61687D] dark:text-[#B8BACC]">
                      {section.text}
                    </p>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* 4. Brands Section */}
        <BrandDivider brands={defaultBrands} />

        {/* 5. Standard CTA Section */}
        <FinalCtaSection
          badge="PRONTO PARA COMEÇAR?"
          title={
            <>
              <span className="block">Quer fazer parte</span>
              <span className="block">
                <span className="italic text-[#9E372A]">do nosso time?</span>
              </span>
            </>
          }
          description="Uma conversa. Sem compromisso, sem 40 slides, sem mil propostas, sem enrolação. A gente entende o seu negócio e mostra onde está a oportunidade."
          buttonText="Envie seu currículo e portfólio"
          buttonHref="/carreiras"
          floatingMessages={[]}
        />
      </div>
    </MainLayout>
  );
}
