import { Phone } from 'lucide-react';
import type { Bike } from '../data/bikes';

interface BikeCardProps {
  bike: Bike;
}

export default function BikeCard({ bike }: BikeCardProps) {
  return (
    <div className="group relative bg-zinc-900 rounded-sm overflow-hidden border border-white/5 hover:border-red-500/50 transition-all duration-300 transform hover:scale-[1.02]">
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
        <img 
          src={bike.image} 
          alt={bike.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
            {bike.name}
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-red-500">₹{bike.price.toLocaleString('en-IN')}</span>
            <span className="text-sm text-gray-500">onwards</span>
          </div>
        </div>
        
        <div className="space-y-2 pt-4 border-t border-white/10">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-gray-500">Engine</span>
              <p className="text-white font-semibold">{bike.specs.engine}</p>
            </div>
            <div>
              <span className="text-gray-500">Power</span>
              <p className="text-white font-semibold">{bike.specs.power}</p>
            </div>
            <div>
              <span className="text-gray-500">Weight</span>
              <p className="text-white font-semibold">{bike.specs.weight}</p>
            </div>
            <div>
              <span className="text-gray-500">Type</span>
              <p className="text-white font-semibold">{bike.specs.type}</p>
            </div>
          </div>
        </div>
        
        <div className="pt-4">
          <a 
            href="tel:9150806151"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-sm transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            ENQUIRE NOW
          </a>
        </div>
      </div>
    </div>
  );
}
