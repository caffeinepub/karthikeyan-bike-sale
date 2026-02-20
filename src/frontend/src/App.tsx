import HeroBanner from './components/HeroBanner';
import BikeGallery from './components/BikeGallery';
import ContactSection from './components/ContactSection';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroBanner />
        <BikeGallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
