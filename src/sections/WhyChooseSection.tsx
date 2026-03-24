import { useEffect, useRef, useState } from "react";
import {
  Zap,
  Activity,
  HeadphonesIcon,
  Shield,
  Clock,
  TrendingUp,
} from "lucide-react";

const WhyChooseSection = () => {
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
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Zap, label: "तुरंत निकासी", labelEn: "Instant Withdraw" },
    { icon: Activity, label: "लाइव रिजल्ट", labelEn: "Live Results" },
    { icon: HeadphonesIcon, label: "24/7 सपोर्ट", labelEn: "24/7 Support" },
    { icon: Shield, label: "सुरक्षित पेमेंट", labelEn: "Secure Payment" },
    { icon: Clock, label: "फास्ट सेटलमेंट", labelEn: "Fast Settlement" },
    { icon: TrendingUp, label: "बेस्ट ऑड्स", labelEn: "Best Odds" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden z-50"
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
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div
              className={`max-w-xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
            >
              <h2
                className="font-montserrat font-black uppercase text-white leading-[1] tracking-tight mb-6"
                style={{ fontSize: "clamp(34px, 4.2vw, 64px)" }}
              >
                क्यों चुनें
                <br />
                <span className="text-satta-red">DhanWarsha</span>
              </h2>

              <div>
                <p className="text-satta-gold/80 text-lg md:text-xl mb-4 leading-relaxed">
                  Built for speed, security, and real-time action. No delays. No
                  doubts.
                </p>
                <p className="text-white/60 text-base mb-8">
                  स्पीड, सुरक्षा और रियल-टाइम एक्शन के लिए बना। कोई देरी नहीं,
                  कोई शक नहीं।
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {features.map((feature, i) => (
                  <div
                    key={feature.label}
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg bg-satta-dark/80 backdrop-blur-sm border border-satta-gold/20 hover:border-satta-red/50 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: `${i * 50 + 200}ms` }}
                  >
                    <feature.icon className="w-5 h-5 text-satta-red flex-shrink-0" />
                    <span className="text-white text-sm text-center font-medium">
                      {feature.label}
                    </span>
                    <span className="text-satta-gold/50 text-xs">
                      {feature.labelEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Trust Card */}
            <div
              className={`hidden lg:flex justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            >
              <div className="wireframe-card w-full max-w-md p-6 relative">
                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-satta-red to-satta-gold flex items-center justify-center">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">
                      100% भरोसेमंद
                    </p>
                    <p className="text-satta-gold/60 text-sm">
                      Trusted by Lakhs
                    </p>
                  </div>
                </div>

                {/* Trust Points */}
                <div className="space-y-3 mb-6">
                  {[
                    "ISO Certified Platform",
                    "SSL Secure Payments",
                    "Verified by Experts",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                    >
                      <div className="w-6 h-6 rounded-full bg-satta-green/30 flex items-center justify-center">
                        <Zap className="w-3 h-3 text-satta-green" />
                      </div>
                      <span className="text-white text-sm">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Live Status */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-satta-green/20 to-satta-gold/20 border border-satta-gold/30">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-satta-green animate-pulse" />
                    <span className="text-white font-bold">सर्वर ऑनलाइन</span>
                  </div>
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

export default WhyChooseSection;
