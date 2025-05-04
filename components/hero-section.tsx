import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { Square } from "lucide-react";

interface HeroSectionProps {
  title: string | React.ReactNode;
  subtitle: string;
  imagePath: string;
  buttonText: string;
  buttonLink: string;
}

export default function HeroSection({
  title,
  subtitle,
  imagePath,
  buttonText,
  buttonLink,
}: HeroSectionProps) {
  const isBeton = imagePath.includes("beton");
  const bgImageClass = isBeton
    ? "absolute inset-0 bg-gradient-to-r from-black/80 to-black/70"
    : "absolute inset-0 bg-gradient-to-r from-black/70 to-black/60";
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={imagePath || "/placeholder.svg"}
          alt="Hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          
        />
        <div className={bgImageClass} />
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-24 h-24 border border-cs-orange/20 rotate-45 opacity-60"></div>
        <div className="absolute bottom-1/4 right-[10%] w-32 h-32 border border-cs-orange/10 -rotate-12 opacity-40"></div>
      </div>

      <div className="container-custom relative z-20 text-white">
        <div className="max-w-2xl">
          <div className="flex items-center mb-4">
            <div className="w-8 h-0.5 bg-cs-orange mr-4"></div>
            <Square className="text-cs-orange mr-2" size={8} />
            <div className="text-sm uppercase tracking-wider text-cs-orange">
              Artisan qualifié
            </div>
          </div>

          <h1 className="mb-4 relative">
            {title}
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-cs-orange"></div>
          </h1>

          <p className="text-xl mb-8 text-gray-200 max-w-lg">{subtitle}</p>

          <Link
            href={buttonLink}
            className="btn btn-primary shadow-lg shadow-cs-orange/20 hover:shadow-cs-orange/30 transition-all duration-300"
          >
            {buttonText}
          </Link>
        </div>
      </div>

      {/* Motif géométrique subtil */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cs-dark to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-cs-orange/30 z-10"></div>
    </section>
  );
}
