import { useEffect, useRef, useState } from 'react';
import { Download, Smartphone, Wallet, Banknote } from 'lucide-react';

const HowItWorksSection = () => {
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

  const steps = [
    {
      icon: Download,
      step: '01',
      title: 'ऐप डाउनलोड करें',
      titleEn: 'Download App',
      description: 'APK डाउनलोड करें और सेकंड में इंस्टॉल करें',
    },
    {
      icon: Smartphone,
      step: '02',
      title: 'OTP से लॉगिन करें',
      titleEn: 'Login with OTP',
      description: 'सुरक्षित लॉगिन, कोई पासवर्ड नहीं',
    },
    {
      icon: Wallet,
      step: '03',
      title: 'पैसे जोड़ें और खेलें',
      titleEn: 'Add Money & Play',
      description: 'किसी भी राशि से शुरू करें, तुरंत खेलें',
    },
    {
      icon: Banknote,
      step: '04',
      title: 'तुरंत निकासी',
      titleEn: 'Instant Withdraw',
      description: 'मिनटों में अपनी जीत निकालें',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative w-full py-20 md:py-32 z-40 bg-satta-dark"
    >
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-satta-red/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Headline */}
        <h2
          className={`font-montserrat font-black uppercase text-white text-center leading-[1] tracking-tight mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ fontSize: 'clamp(34px, 4.2vw, 64px)' }}
        >
          कैसे <span className="text-satta-red">शुरू करें</span>
        </h2>
        <p className={`text-center text-satta-gold/70 mb-16 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          सिर्फ 4 आसान स्टेप्स में शुरू करें
        </p>

        {/* Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((item, i) => (
            <div
              key={item.step}
              className={`step-card group hover:bg-satta-dark/80 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              {/* Step Number & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-satta-red/20 flex items-center justify-center group-hover:bg-satta-red/30 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-satta-red" />
                </div>
                <span className="text-4xl font-black text-satta-gold/20 font-montserrat">
                  {item.step}
                </span>
              </div>

              {/* Content Placeholder */}
              <div className="h-24 bg-gradient-to-br from-satta-red/10 to-satta-gold/10 rounded-xl mb-6 flex items-center justify-center border border-satta-gold/20">
                <item.icon className="w-10 h-10 text-satta-gold/40" />
              </div>

              {/* Text */}
              <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-satta-gold/60 text-xs mb-2">{item.titleEn}</p>
              <p className="text-white/60 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
