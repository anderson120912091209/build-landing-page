import { getTranslations } from 'next-intl/server';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { HeroSection } from '../components/HeroSection';
import { MobileNav } from '../components/MobileNav';

export default async function HomePage() {
  const t = await getTranslations('hero');

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar - Desktop Only */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 min-h-screen">
        {/* Header */}
        <Header />

        {/* Content */}
        <div className="px-4 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12 pb-24 lg:pb-12">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-academic font-bold leading-tight mb-6 text-black dark:text-white">
            {t('headline')}
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl font-light text-gray-700 dark:text-gray-300 mb-6 max-w-2xl leading-relaxed">
            {t('description')}
          </p>

          {/* Watch Video Link */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-base font-light text-black dark:text-white hover:opacity-70 transition-opacity mb-8"
          >
            {t('watchVideo')}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>

          {/* Hero Section */}
          <HeroSection />
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileNav />
    </div>
  );
}

