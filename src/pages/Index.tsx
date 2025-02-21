
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Newsletter } from "@/components/Newsletter";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <FeaturedProducts />
      <Newsletter />
    </main>
  );
};

export default Index;
