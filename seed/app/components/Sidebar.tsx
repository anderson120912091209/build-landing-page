'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from '../i18n/routing';

export function Sidebar() {
  const t = useTranslations('nav');
  const pathname = usePathname();

  const navItems = [
    { key: 'cofounder', href: '#' },
    { key: 'useCases', href: '#' },
    { key: 'product', href: '#' },
    { key: 'agents', href: '#' },
    { key: 'integrations', href: '#' },
    { key: 'results', href: '#' },
    { key: 'blog', href: '#' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 p-6 hidden lg:flex flex-col z-10">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-12 h-12 mb-4 flex items-center justify-center">
          {/* Placeholder for sunflower logo - replace with actual image */}
          <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-green-200 dark:from-yellow-800 dark:to-green-800 rounded-lg flex items-center justify-center">
            <span className="text-2xl">🌻</span>
          </div>
        </div>
        <h2 className="text-xl font-light text-black dark:text-white">{t('cofounder')}</h2>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-2 flex-1">
        {navItems.map((item) => {
          const isActive = pathname?.includes(item.key);
          return (
            <a
              key={item.key}
              href={item.href}
              className={`px-4 py-2 rounded-lg text-sm font-light transition-colors ${
                isActive
                  ? 'bg-gray-100 dark:bg-gray-900 text-black dark:text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-black dark:hover:text-white'
              }`}
            >
              {t(item.key)}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

