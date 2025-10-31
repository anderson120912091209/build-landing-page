'use client';

import Image from 'next/image';

interface HeroSectionProps {
  imageSrc?: string;
  imageAlt?: string;
}

export function HeroSection({ imageSrc, imageAlt }: HeroSectionProps) {
  // Use CSS to show/hide images based on theme - this avoids hydration mismatch
  // The script in layout.tsx ensures dark class is applied before React hydrates
  
  if (imageSrc) {
    // If custom image is provided, use it for both themes
    return (
      <div className="w-full relative mt-8 rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt || 'Hero image'}
          width={1200}
          height={600}
          className="w-full h-auto object-cover transition-opacity duration-300"
          priority
        />
      </div>
    );
  }

  return (
    <div className="w-full relative mt-8 rounded-lg overflow-hidden">
      {/* Light mode image - hidden in dark mode */}
      <Image
        src="/catlight.png"
        alt={imageAlt || 'Cat light mode'}
        width={1200}
        height={600}
        className="w-full h-auto object-cover transition-opacity duration-300 dark:hidden"
        priority
      />
      {/* Dark mode image - hidden in light mode */}
      <Image
        src="/catnight.png"
        alt={imageAlt || 'Cat night mode'}
        width={1200}
        height={600}
        className="w-full h-auto object-cover transition-opacity duration-300 hidden dark:block"
        priority
      />
    </div>
  );
}
