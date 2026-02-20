import { Phone, MapPin } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';

export default function ContactSection() {
  return (
    <section className="py-20 px-4 bg-black border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            GET IN TOUCH
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-gray-400 text-lg">
            Visit our showroom or reach out to us today
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-sm border border-white/5 hover:border-red-500/50 transition-all duration-300 text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 rounded-full mb-6 group-hover:bg-red-600/20 transition-colors">
              <Phone className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Call Us</h3>
            <a 
              href="tel:9150806151" 
              className="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors"
            >
              915 080 6151
            </a>
            <p className="text-gray-500 text-sm mt-2">Available 9 AM - 8 PM</p>
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-sm border border-white/5 hover:border-red-500/50 transition-all duration-300 text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 rounded-full mb-6 group-hover:bg-red-600/20 transition-colors">
              <SiInstagram className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Follow Us</h3>
            <a 
              href="https://instagram.com/Karthikeyan_bike_sale" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-bold text-red-500 hover:text-red-400 transition-colors break-all"
            >
              @Karthikeyan_bike_sale
            </a>
            <p className="text-gray-500 text-sm mt-2">Latest updates & offers</p>
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-sm border border-white/5 hover:border-red-500/50 transition-all duration-300 text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 rounded-full mb-6 group-hover:bg-red-600/20 transition-colors">
              <MapPin className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Visit Showroom</h3>
            <p className="text-white font-semibold text-lg">
              16-C, American North Street
            </p>
            <p className="text-gray-500 text-sm mt-2">Come see our collection</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-zinc-900 px-8 py-6 rounded-sm border border-white/5">
            <p className="text-gray-400 mb-4">Ready to ride your dream bike?</p>
            <a 
              href="tel:9150806151"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/30"
            >
              <Phone className="h-5 w-5" />
              CALL NOW FOR BEST DEALS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
