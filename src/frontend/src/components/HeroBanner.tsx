import { ChevronDown } from 'lucide-react';

export default function HeroBanner() {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/assets/generated/hero-banner.dim_1920x1080.png)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight">
            KARTHIKEYAN
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-red-500 tracking-tight">
            BIKE SALE
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-6">
            Premium Sport Motorcycles | Unbeatable Prices | Expert Service
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a 
              href="tel:9150806151"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/50"
            >
              CALL NOW
            </a>
            <button 
              onClick={scrollToGallery}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-sm border border-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              VIEW BIKES
            </button>
          </div>
        </div>
        
        <button 
          onClick={scrollToGallery}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to gallery"
        >
          <ChevronDown className="h-8 w-8 text-white/70" />
        </button>
      </div>
    </section>
  );
}
