import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'karthikeyan-bike-sale';

  return (
    <footer className="bg-black border-t border-white/10 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {currentYear} Karthikeyan Bike Sale. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>using</span>
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 font-semibold transition-colors"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
