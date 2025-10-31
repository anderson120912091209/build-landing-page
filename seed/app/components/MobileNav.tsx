'use client';

import { useTranslations } from 'next-intl';

export function MobileNav() {
  const t = useTranslations('nav');

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 lg:hidden z-20">
      <div className="flex justify-around items-center h-16">
        <a
          href="#"
          className="flex flex-col items-center justify-center text-xs font-light text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <span>{t('cofounder')}</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center text-xs font-light text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <span>{t('useCases')}</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center text-xs font-light text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <span>{t('product')}</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center text-xs font-light text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <span>{t('blog')}</span>
        </a>
      </div>
    </nav>
  );
}

