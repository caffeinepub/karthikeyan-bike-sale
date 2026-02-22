import { Phone } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import Logo3D from './Logo3D';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo3D />
            <div>
              <h1 className="text-xl font-bold text-white tracking-wider">KARTHIKEYAN</h1>
              <p className="text-xs text-red-500 font-semibold tracking-widest">BIKE SALE</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="tel:9150806151" 
              className="flex items-center gap-2 text-white hover:text-red-500 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">915 080 6151</span>
            </a>
            <a 
              href="https://instagram.com/Karthikeyan_bike_sale" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-red-500 transition-colors"
            >
              <SiInstagram className="h-4 w-4" />
              <span className="text-sm font-medium">@Karthikeyan_bike_sale</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
