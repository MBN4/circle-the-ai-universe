import type { Metadata } from 'next';
import { DirectoryClient } from '@/components/DirectoryClient';

interface Props {
  searchParams: Promise<{ category?: string; q?: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const category = resolvedParams.category;

  if (category && category !== 'All') {
    return {
      title: `Best ${category} AI Tools (2026 Directory)`,
      description: `Explore top-rated AI tools in ${category}. Compare features, pricing, and live links.`,
      alternates: {
        canonical: `/directory?category=${encodeURIComponent(category)}`,
      },
    };
  }

  return {
    title: "AI Tools Directory | Search & Filter 120+ AI Software",
    description: "Browse 120+ curated Artificial Intelligence tools across Design, Coding, Video, Audio, Data, and Security.",
    alternates: {
      canonical: "/directory",
    },
  };
}

export default async function DirectoryPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  return <DirectoryClient initialCategory={resolvedParams.category || 'All'} />;
}