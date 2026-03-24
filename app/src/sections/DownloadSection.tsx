import { useEffect, useRef, useState } from "react";
import {
  Download,
  QrCode,
  Check,
  Info,
  Smartphone,
  Shield,
  Zap,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const DownloadSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

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

  const instructions = [
    { icon: Smartphone, text: 'Settings में "Unknown Sources" ऑन करें' },
    { icon: Download, text: "APK फाइल डाउनलोड करें" },
    { icon: Check, text: "APK खोलें और इंस्टॉल करें" },
  ];

  const trustBadges = [
    { icon: Shield, label: "सुरक्षित" },
    { icon: Zap, label: "फास्ट" },
    { icon: Check, label: "वेरिफाइड" },
  ];

  return (
    <section
      ref={sectionRef}
      id="download"
      className="relative w-full py-20 md:py-32 z-[70] bg-satta-black"
    >
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-satta-red/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <div
            className={`mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2
              className="font-montserrat font-black uppercase text-white leading-[1] tracking-tight mb-4"
              style={{ fontSize: "clamp(34px, 4.2vw, 64px)" }}
            >
              अभी <span className="text-satta-red">डाउनलोड</span> करें
            </h2>
            <p className="text-satta-gold/80 text-lg md:text-xl">
              Android के लिए उपलब्ध। सेकंड में APK पाएं।
            </p>
          </div>

          {/* Trust Badges */}
          <div
            className={`flex justify-center gap-4 mb-10 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-satta-dark/60 border border-satta-gold/20"
              >
                <badge.icon className="w-4 h-4 text-satta-red" />
                <span className="text-white text-sm">{badge.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div
            className={`mb-10 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <button
              onClick={() => setShowDialog(true)}
              className="btn-primary text-lg px-12 py-5 animate-pulse-satta"
            >
              <Download className="w-6 h-6 mr-2" />
              APK डाउनलोड करें
            </button>
            <p className="text-satta-gold/60 text-sm mt-4 flex items-center justify-center gap-2">
              <Info className="w-4 h-4" />
              इंस्टॉल करने के लिए "Unknown Sources" ऑन करें
            </p>
          </div>

          {/* QR Code */}
          <div
            className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-block p-6 rounded-3xl bg-white border-4 border-satta-gold/30">
              <img
                src="/images/qr-code.png"
                alt="Scan to Download"
                className="w-48 h-48 object-contain"
              />
            </div>
            <p className="text-white font-medium mt-4 flex items-center justify-center gap-2">
              <QrCode className="w-5 h-5 text-satta-red" />
              QR स्कैन करके इंस्टॉल करें
            </p>
          </div>

          {/* Instructions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {instructions.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col items-center p-4 rounded-xl bg-satta-dark/60 border border-satta-gold/20 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100 + 400}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-satta-red/20 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-satta-red" />
                </div>
                <p className="text-white text-sm text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-satta-dark border-satta-gold/20 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-montserrat font-bold">
              <span className="text-satta-red">DhanWarsha</span> डाउनलोड करें
            </DialogTitle>
            <DialogDescription className="text-satta-gold/60">
              अपनी पसंद का तरीका चुनें
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <button className="w-full btn-primary flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Direct APK Download
            </button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-satta-gold/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-satta-dark px-2 text-satta-gold/60">
                  या
                </span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-white text-sm mb-3">QR कोड स्कैन करें</p>
              <div className="inline-block p-4 rounded-xl bg-white">
                <img
                  src="/images/qr-code.png"
                  alt="QR Code"
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DownloadSection;
