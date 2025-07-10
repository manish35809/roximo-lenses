export default function HeroSection() {
  return (
    <section className="relative z-10 pt-20 pb-32 min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.webp" 
          alt="Premium Vision Solutions" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <div className="backdrop-blur-xl bg-white/15 rounded-3xl border border-white/30 p-8 sm:p-12 shadow-2xl max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight drop-shadow-lg">
            Premium Vision Solutions
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg">
            Experience the future of optical excellence with our cutting-edge
            lens technology. Crystal clear vision, ultimate protection, and
            unmatched durability.
          </p>
          
          {/* Instagram CTA Button */}
          <div className="flex justify-center mt-12">
            <a 
              href="https://instagram.com/roximolenses" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}