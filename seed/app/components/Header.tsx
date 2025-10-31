'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Link } from '../i18n/routing';

export function Header() {
  const t = useTranslations('nav');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="flex items-center justify-end gap-4 p-4 md:p-6">
      <a
        href="#"
        className="text-sm font-light text-black dark:text-white hover:opacity-70 transition-opacity"
      >
        {t('pricing')}
      </a>
      <button className="px-4 py-2 text-sm font-light rounded-full border border-black dark:border-white text-black dark:text-white hover:opacity-70 transition-opacity">
        {t('logIn')}
      </button>
      <button className="px-4 py-2 text-sm font-light rounded-full bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-opacity">
        {t('signUp')}
      </button>
      
      {/* Language Switcher */}
      <div className="flex items-center gap-2 border-l border-gray-300 dark:border-gray-700 pl-4 ml-2">
        <Link
          href="/"
          locale="en"
          className={`text-xs px-2 py-1 rounded transition-opacity ${
            locale === 'en'
              ? 'bg-black dark:bg-white text-white dark:text-black font-medium'
              : 'text-black dark:text-white hover:opacity-70'
          }`}
        >
          EN
        </Link>
        <Link
          href="/"
          locale="zh-tw"
          className={`text-xs px-2 py-1 rounded transition-opacity ${
            locale === 'zh-tw'
              ? 'bg-black dark:bg-white text-white dark:text-black font-medium'
              : 'text-black dark:text-white hover:opacity-70'
          }`}
        >
          繁中
        </Link>
      </div>

      {/* Theme Toggle */}
      {mounted && (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full border border-black dark:border-white text-black dark:text-white hover:opacity-70 transition-opacity"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      )}
    </header>
  );
}

