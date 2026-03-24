import './App.css';

// Import sections
import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import AnytimeSection from './sections/AnytimeSection';
import RealWinsSection from './sections/RealWinsSection';
import HowItWorksSection from './sections/HowItWorksSection';
import WhyChooseSection from './sections/WhyChooseSection';
import GameModesSection from './sections/GameModesSection';
import DownloadSection from './sections/DownloadSection';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="relative bg-navy-900 min-h-screen">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main className="relative">
        <HeroSection />
        <AnytimeSection />
        <RealWinsSection />
        <HowItWorksSection />
        <WhyChooseSection />
        <GameModesSection />
        <DownloadSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
