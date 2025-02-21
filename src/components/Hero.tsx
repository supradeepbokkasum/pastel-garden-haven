
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-garden-soft">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
          alt="Serene garden background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-white/80 rounded-full backdrop-blur-sm">
            Bringing nature to your doorstep
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
            Cultivate Your Perfect Garden
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Premium garden supplies curated for the modern gardener. Transform your space with our thoughtfully selected collection.
          </p>
          <button className="group inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300">
            Explore Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
