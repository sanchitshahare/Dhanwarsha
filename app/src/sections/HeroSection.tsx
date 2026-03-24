import { useEffect, useRef, useState } from "react";
import { Download, QrCode, Users, Sparkles } from "lucide-react";

const HeroSection = () => {
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
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToDownload = () => {
    const element = document.querySelector("#download");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden z-10"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/images/satta-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="glow-overlay" />

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 pt-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div
              className={`max-w-2xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {/* Hindi Tag */}
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-satta-gold" />
                <span className="text-satta-gold font-bold text-lg tracking-wider">
                  भारत का #1 सट्टा ऐप
                </span>
              </div>

              {/* Headline */}
              <div className="mb-6">
                <h1
                  className="font-montserrat font-black uppercase text-white leading-[0.95] tracking-tight"
                  style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
                >
                  <span className="block">DhanWarsha</span>
                  <span className="block">
                    <span className="text-satta-red">SATTA</span> KING
                  </span>
                </h1>
              </div>

              {/* Subheadline */}
              <p className="text-satta-gold/80 text-lg md:text-xl max-w-md mb-4 leading-relaxed">
                <span className="text-white font-semibold">DhanWarsha</span> -
                Fastest results, instant payment, 100% trusted.
              </p>
              <p className="text-white/60 text-base mb-8">
                कल्याण, मिलन, राजधानी, मेन बाजार - सभी बाजार एक ही जगह
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={scrollToDownload}
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  APK डाउनलोड करें
                </button>
                <button
                  onClick={scrollToDownload}
                  className="btn-outline flex items-center justify-center gap-2"
                >
                  <QrCode className="w-5 h-5" />
                  QR स्कैन करें
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-3 text-satta-gold/70">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-satta-red to-satta-gold border-2 border-satta-black flex items-center justify-center"
                    >
                      <Users className="w-4 h-4 text-white" />
                    </div>
                  ))}
                </div>
                <span className="text-sm">50,000+ खिलाड़ी रोजाना</span>
              </div>
            </div>

            {/* Right Content - Wireframe UI Card */}
            <div
              className={`hidden lg:flex justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            >
              <div className="wireframe-card w-full max-w-md p-6 relative animate-float">
                {/* App Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-52 h-10 rounded-sm bg-gradient-to-br from-satta-red to-satta-gold flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        DhanWarsha
                      </span>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-satta-green/20 text-satta-green text-xs font-bold">
                    LIVE
                  </div>
                </div>

                {/* Live Markets */}
                <div className="space-y-3 mb-6">
                  {[
                    { name: "KALYAN", status: "OPEN", color: "bg-satta-green" },
                    {
                      name: "MILAN DAY",
                      status: "CLOSED",
                      color: "bg-satta-red",
                    },
                    {
                      name: "RAJDHANI",
                      status: "OPEN",
                      color: "bg-satta-green",
                    },
                  ].map((market) => (
                    <div
                      key={market.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-satta-gold/20"
                    >
                      <span className="text-white font-bold text-sm">
                        {market.name}
                      </span>
                      <span
                        className={`px-2 py-1 rounded text-xs font-bold ${market.color} text-white`}
                      >
                        {market.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Result Display */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-satta-red/20 to-satta-gold/20 border border-satta-gold/30 mb-4">
                  <p className="text-satta-gold text-xs mb-2">आज का रिजल्ट</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-black text-white">4</span>
                    <span className="text-4xl font-black text-satta-gold">
                      2
                    </span>
                    <span className="text-4xl font-black text-white">7</span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-satta-red/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-satta-gold/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
