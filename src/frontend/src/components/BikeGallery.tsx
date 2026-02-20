import { bikes } from '../data/bikes';
import BikeCard from './BikeCard';

export default function BikeGallery() {
  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            PREMIUM COLLECTION
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our handpicked selection of high-performance sport motorcycles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>
      </div>
    </section>
  );
}
