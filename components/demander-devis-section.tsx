import React from "react";
import { Square } from "lucide-react";
import Link from "next/link";

type DemanderDevisSectionProps = {
  title: string;
  btnText: string;
};

function DemanderDevisSection(props: DemanderDevisSectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cs-orange to-cs-orange-dark"></div>

      {/* Motif géométrique */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="border-r border-t border-white"></div>
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-1 bg-white/30"></div>
          <Square className="text-white mx-4" size={12} />
          <div className="w-12 h-1 bg-white/30"></div>
        </div>

        <h2 className="text-white mb-6 text-3xl md:text-4xl">{props.title}</h2>

        <div className="flex items-center justify-center mt-6">
          <div className="w-12 h-1 bg-white/30"></div>
          <Square className="text-white mx-4" size={12} />
          <div className="w-12 h-1 bg-white/30"></div>
        </div>

        <div className="mt-8">
          <Link
            href="/contact#devis"
            className="btn bg-white p-3 text-cs-orange hover:bg-gray-100 hover:shadow-lg transition-all duration-300 shadow-md"
          >
            {props.btnText}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DemanderDevisSection;
