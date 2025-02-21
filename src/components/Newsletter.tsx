
export const Newsletter = () => {
  return (
    <section className="py-24 bg-garden-peach">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Join Our Garden Community
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to receive gardening tips, exclusive offers, and first access to new products.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
