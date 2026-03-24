import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Star, Trophy } from 'lucide-react';

const RealWinsSection = () => {
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

  const stats = [
    { icon: TrendingUp, value: '₹10Cr+', label: 'कुल भुगतान' },
    { icon: Users, value: '50K+', label: 'रोज़ाना यूज़र' },
    { icon: Star, value: '4.7★', label: 'रेटिंग' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden z-30"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/images/satta-bg-2.jpg)',
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
                असली जीत,
                <br />
                <span className="text-satta-red">असली पैसा</span>
              </h2>

              <div>
                <p className="text-satta-gold/80 text-lg md:text-xl mb-4 leading-relaxed">
                  Daily payouts, live leaderboards, and a community that plays hard.
                </p>
                <p className="text-white/60 text-base mb-8">
                  रोज़ाना भुगतान, लाइव लीडरबोर्ड, और लाखों खिलाड़ियों का भरोसा।
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`text-center p-4 rounded-xl bg-satta-dark/80 backdrop-blur-sm border border-satta-gold/20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${i * 100 + 200}ms` }}
                  >
                    <stat.icon className="w-6 h-6 text-satta-red mx-auto mb-2" />
                    <div className="text-xl md:text-2xl font-black text-satta-red font-montserrat">{stat.value}</div>
                    <div className="text-xs text-satta-gold/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Winners Card */}
            <div className={`hidden lg:flex justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="wireframe-card w-full max-w-md p-6 relative">
                {/* Winners Header */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Trophy className="w-6 h-6 text-satta-gold" />
                  <span className="text-satta-gold font-bold text-lg">आज के विजेता</span>
                </div>

                {/* Winners List */}
                <div className="space-y-3">
                  {[
                    { name: 'Rahul M.', amount: '₹2,50,000', city: 'Mumbai' },
                    { name: 'Suresh K.', amount: '₹1,80,000', city: 'Delhi' },
                    { name: 'Amit P.', amount: '₹95,000', city: 'Pune' },
                    { name: 'Vijay S.', amount: '₹75,000', city: 'Nagpur' },
                  ].map((winner, i) => (
                    <div
                      key={winner.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-satta-gold/10"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-satta-red to-satta-gold flex items-center justify-center text-white text-sm font-bold">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm font-bold">{winner.name}</p>
                        <p className="text-satta-gold/60 text-xs">{winner.city}</p>
                      </div>
                      <div className="text-satta-green font-bold text-sm">{winner.amount}</div>
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

export default RealWinsSection;
