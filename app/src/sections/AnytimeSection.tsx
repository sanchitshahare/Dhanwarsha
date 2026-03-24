import { useEffect, useRef, useState } from "react";
import { Smartphone, Tablet, Monitor, ChevronRight } from "lucide-react";

const AnytimeSection = () => {
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

  const devices = [
    { icon: Smartphone, label: "Mobile" },
    { icon: Tablet, label: "Tablet" },
    { icon: Monitor, label: "Desktop" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden z-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/images/satta-bg-1.jpg)",
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
                कहीं भी,
                <br />
                <span className="text-satta-red">कभी भी</span>
              </h2>

              <div>
                <p className="text-satta-gold/80 text-lg md:text-xl mb-4 leading-relaxed">
                  Play on mobile, tablet, or desktop. Your game, your
                  rules—wherever you are.
                </p>
                <p className="text-white/60 text-base mb-8">
                  मोबाइल, टैबलेट या कंप्यूटर - कहीं से भी खेलें। आपका गेम, आपके
                  नियम।
                </p>

                {/* Device Icons */}
                <div className="flex gap-4 mb-8">
                  {devices.map((device) => (
                    <div
                      key={device.label}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-satta-dark/60 border border-satta-gold/20 hover:border-satta-red/50 transition-all duration-300"
                    >
                      <device.icon className="w-6 h-6 text-satta-red" />
                      <span className="text-xs text-satta-gold/70">
                        {device.label}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="text-satta-red font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300">
                  सभी डिवाइस देखें
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div
              className={`hidden lg:flex justify-center items-center transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            >
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-72 h-[500px] rounded-[3rem] border-4 border-satta-gold/40 bg-satta-black/70 backdrop-blur-sm p-4 relative">
                  {/* Screen */}
                  <div className="w-full h-full rounded-[2.5rem] bg-satta-dark/80 overflow-hidden">
                    {/* App Header */}
                    <div className="h-14 bg-gradient-to-r from-satta-red/30 to-satta-gold/30 flex items-center px-4">
                      <div className="w-8 h-8 rounded-lg bg-satta-red flex items-center justify-center">
                        <span className="text-white font-bold text-xs">DB</span>
                      </div>
                      <div className="ml-3">
                        <p className="text-white text-sm font-bold">
                          DhanWarsha
                        </p>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="p-4 space-y-3">
                      <div className="p-3 rounded-xl bg-satta-red/10 border border-satta-red/30">
                        <p className="text-satta-gold text-xs">KALYAN RESULT</p>
                        <p className="text-white text-2xl font-black">
                          1-2-3-4-5
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-satta-gold/10 border border-satta-gold/30">
                        <p className="text-satta-gold text-xs">MILAN DAY</p>
                        <p className="text-white text-2xl font-black">
                          6-7-8-9-0
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-satta-gold text-xs">RAJDHANI</p>
                        <p className="text-white text-2xl font-black">
                          5-4-3-2-1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Glow */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-satta-red/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-satta-gold/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnytimeSection;
