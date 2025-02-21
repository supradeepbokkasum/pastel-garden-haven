
import { Leaf, Sun, Flower } from "lucide-react";

const products = [
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Organic Tools",
    description: "Handcrafted gardening tools for the conscious gardener",
    price: "$29",
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Premium Seeds",
    description: "Carefully selected seeds for your garden",
    price: "$12",
  },
  {
    icon: <Flower className="w-6 h-6" />,
    title: "Plant Care",
    description: "Essential nutrients for thriving plants",
    price: "$19",
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">
            Featured Collection
          </span>
          <h2 className="text-3xl md:text-4xl font-light mt-2">
            Essential Garden Supplies
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-garden-gray hover:bg-garden-soft transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 text-gray-600 group-hover:text-gray-800 transition-colors">
                {product.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <span className="text-2xl font-light">{product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
