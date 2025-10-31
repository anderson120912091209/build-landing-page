import Image from 'next/image';

interface HeroSectionProps {
  imageSrc?: string;
  imageAlt?: string;
}

export function HeroSection({ imageSrc, imageAlt = 'Hero image' }: HeroSectionProps) {
  return (
    <div className="w-full relative mt-8 rounded-lg overflow-hidden">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      ) : (
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100 dark:from-blue-900 dark:via-green-900 dark:to-yellow-900 flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Hero image placeholder - Add your PNG here
          </p>
        </div>
      )}
    </div>
  );
}

