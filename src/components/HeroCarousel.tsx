
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const heroProducts = [
  {
    id: 1,
    title: "Premium Garden Tools",
    description: "Professional-grade tools for the passionate gardener",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
    cta: "Shop Tools",
  },
  {
    id: 2,
    title: "Organic Seeds Collection",
    description: "Start your garden with our curated organic seed varieties",
    image: "https://images.unsplash.com/photo-1582131503261-fca1d1c0589f",
    cta: "Explore Seeds",
  },
  {
    id: 3,
    title: "Sustainable Planters",
    description: "Beautiful, eco-friendly planters for your green space",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    cta: "View Planters",
  },
];

export const HeroCarousel = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-garden-soft">
      <Carousel className="w-full">
        <CarouselContent>
          {heroProducts.map((product) => (
            <CarouselItem key={product.id}>
              <div className="relative min-h-[90vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover opacity-20"
                  />
                </div>
                <div className="container mx-auto px-4 z-10">
                  <div className="max-w-4xl mx-auto text-center animate-fade-up">
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-white/80 rounded-full backdrop-blur-sm">
                      Featured Product
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
                      {product.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
                      {product.description}
                    </p>
                    <button className="group inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300">
                      {product.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute left-4 right-4 top-1/2 flex justify-between -translate-y-1/2">
          <CarouselPrevious className="relative -left-4 bg-white/80 backdrop-blur-sm hover:bg-white" />
          <CarouselNext className="relative -right-4 bg-white/80 backdrop-blur-sm hover:bg-white" />
        </div>
      </Carousel>
    </div>
  );
};
