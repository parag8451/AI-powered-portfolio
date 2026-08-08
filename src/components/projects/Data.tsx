'use client';

// File: data.tsx

import { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, Link, X } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- PROJECT DATABASE ---
// This array holds the detailed information for each project.
const PROJECT_CONTENT = [
    {
    // --- NEW AI-Powered PORTFOLIO PROJECT ---
    title: 'AI-Powered Portfolio',
    description:
      'Static portfolios are boring. Mine talks back.portfolio where an AI avatar answers your questions about me in real time.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Mistral AI API',
      'OpenAI API',
      'Node.js',
      'Vercel',
    ],
    date: 'August 2025', // <-- TODO: Update with your project date
    links: [
      {
        name: 'Live Demo - You Are Here!',
        url: '#',
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/parag8451',
      },
    ],
    images: [
      { src: '/projects/ai-portfolio-chat.png', alt: 'The AI Powered Portfolio chat interface in action' },
      { src: '/projects/ai-portfolio-home.png', alt: 'Homepage of the AI Powered Portfolio' },
    ],
  },
  {
    title: 'Lexa-AI',
    description:
      'Lexa AI is an intelligent full-stack AI assistant platform that integrates multiple AI models to deliver fast and accurate responses. It supports real-time streaming, voice interaction, web search with verified citations, and AI image generation within a unified interface.',
    techStack: [
      // Frontend
      'React 18',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'Three.js',
      // Backend
      'PostgreSQL',
      'Edge Functions',
      'Authentication (Email & Google OAuth)',
      // AI
      'Google Gemini 2.5 / 3.x',
      'OpenAI GPT-5',
      'ElevenLabs Voice AI',
    ],
    date: 'May 2024',
    links: [
      {
        name: 'Live Demo',
        url: 'https://github.com/parag8451/Lexa-AI', // <-- TODO: Replace with your live deployment URL.... will do later
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/parag8451/Lexa-AI', // <-- TODO: Replace with your actual repo URL if different
      },
    ],
    images: [
      {
        src: '/projects/Lexa-Ai-home.png',
        alt: 'Lexa-AI Branding and Architecture',
      },
      {
        src: '/projects/Lexa-Ai-Landing.png',
        alt: 'Lexa-AI Assistant Platform Landing',
      },
      {
        src: '/projects/Lexa-Ai-Assistant.png',
        alt: 'Lexa-AI Multimodal Workspace & Vision OCR',
      },
    ],
  },

];

// --- COMPONENT & INTERFACE DEFINITIONS ---
type ProjectImage = {
  src: string;
  alt: string;
};

// Define interface for project prop
interface ProjectProps {
  title: string;
}

// This component dynamically renders the project details
const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data from the database
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Fullscreen lightbox for project screenshots */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-6xl h-[80vh] overflow-hidden rounded-3xl bg-black/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white shadow-md transition hover:bg-black"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              <X className="h-5 w-5" />
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}

      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-neutral-200/70 bg-neutral-100/60 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/40"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 900px, 100vw"
                  className="object-contain transition-transform duration-200 group-hover:scale-[1.01]"
                />
                <div className="pointer-events-none absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <span className="m-3 rounded-full bg-black/75 px-3 py-1 text-xs font-medium text-white">
                    View full size
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- MAIN DATA EXPORT ---
// This is the data used by your main portfolio page.
export const data = [
  {
    category: 'AI & Next.js',
    title: 'AI-Powered Portfolio',
    src: '/projects/ai-portfolio-preview.png', // <-- TODO: Make sure you have a preview image at this path
    content: (
      // The `title` here MUST match the full title in PROJECT_CONTENT
      <ProjectContent project={{ title: 'AI-Powered Portfolio' }} />
    ),
  },
  {
    category: 'Full-Stack AI',
    title: 'Lexa-AI',
    src: '/projects/Lexa-Ai-home.png', // Use the available homepage screenshot for the preview
    content: (
      <ProjectContent project={{ title: 'Lexa-AI' }} />
    ),
  },

];
