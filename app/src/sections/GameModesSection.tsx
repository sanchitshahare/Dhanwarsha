import { useEffect, useRef, useState } from 'react';
import { Hash, Dices, Grid3X3, Layers, Target } from 'lucide-react';

const GameModesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const gameModes = [
    { icon: Hash, label: 'सिंगल', labelEn: 'Single', desc: 'एक अंक पर दांव' },
    { icon: Dices, label: 'जोड़ी', labelEn: 'Jodi', desc: 'जोड़ी पर दांव' },
    { icon: Grid3X3, label: 'पanna', labelEn: 'Panna', desc: 'तीन अंकों का खेल' },
    { icon: Layers, label: 'संगम', labelEn: 'Sangam', desc: 'संयुक्त दांव' },
  ];

  const markets = [
    { name: 'KALYAN', open: '3:45 PM', close: '5:45 PM' },
    { name: 'MILAN DAY', open: '2:15 PM', close: '4:15 PM' },
    { name: 'RAJDHANI DAY', open: '2:30 PM', close: '4:30 PM' },
    { name: 'MAIN BAZAR', open: '9:35 PM', close: '12:05 AM' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden z-[60]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/images/satta-bg-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div className="glow-overlay" />

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className={`max-w-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <h2
                className="font-montserrat font-black uppercase text-white leading-[1] tracking-tight mb-6"
                style={{ fontSize: 'clamp(34px, 4.2vw, 64px)' }}
              >
                गेम
                <br />
                <span className="text-satta-red">प्रकार</span>
              </h2>

              <div>
                <p className="text-satta-gold/80 text-lg md:text-xl mb-4 leading-relaxed">
                  Single, Jodi, Panna, Sangam—play your way with clear odds.
                </p>
                <p className="text-white/60 text-base mb-8">
                  सिंगल, जोड़ी, पanna, संगम - अपनी पसंद का खेल खेलें।
                </p>
              </div>

              {/* Game Mode Chips */}
              <div className="flex flex-wrap gap-3 mb-8">
                {gameModes.map((mode, i) => (
                  <div
                    key={mode.label}
                    className={`chip flex flex-col items-center gap-1 cursor-pointer hover:bg-satta-red/10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${i * 50 + 200}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <mode.icon className="w-4 h-4" />
                      <span className="font-bold">{mode.label}</span>
                    </div>
                    <span className="text-xs text-satta-gold/50">{mode.desc}</span>
                  </div>
                ))}
              </div>

              {/* Markets */}
              <div>
                <p className="text-satta-gold font-bold mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  उपलब्ध बाजार
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {markets.map((market) => (
                    <div
                      key={market.name}
                      className="p-2 rounded-lg bg-satta-dark/60 border border-satta-gold/20"
                    >
                      <p className="text-white text-sm font-bold">{market.name}</p>
                      <p className="text-satta-gold/60 text-xs">{market.open} - {market.close}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Game Board */}
            <div className={`hidden lg:flex justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="wireframe-card w-full max-w-md p-6 relative">
                {/* Board Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-satta-gold font-bold">LIVE MARKETS</span>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-satta-green animate-pulse" />
                    <span className="text-satta-green text-xs">LIVE</span>
                  </div>
                </div>

                {/* Market List */}
                <div className="space-y-3">
                  {markets.map((market) => (
                    <div
                      key={market.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-satta-gold/10 hover:border-satta-red/30 transition-colors duration-300"
                    >
                      <div>
                        <p className="text-white font-bold text-sm">{market.name}</p>
                        <p className="text-satta-gold/50 text-xs">{market.open} - {market.close}</p>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-satta-green/20 text-satta-green text-xs font-bold">
                        OPEN
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-satta-red/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameModesSection;
