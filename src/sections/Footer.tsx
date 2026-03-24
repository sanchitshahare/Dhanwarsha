import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  Send,
  Mail,
  Shield,
  Clock,
  Lock,
  AlertTriangle,
} from "lucide-react";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91-XXXXXXXXXX",
      href: "https://wa.me/91XXXXXXXXXX",
      color: "bg-green-500/20 text-green-400",
    },
    {
      icon: Send,
      label: "Telegram",
      value: "@dhanwarsha_support",
      href: "https://t.me/dhanwarsha_support",
      color: "bg-blue-500/20 text-blue-400",
    },
    {
      icon: Mail,
      label: "Email",
      value: "support@dhanwarsha.example",
      href: "mailto:support@dhanwarsha.example",
      color: "bg-satta-red/20 text-satta-red",
    },
  ];

  const trustFeatures = [
    { icon: Shield, label: "सुरक्षित पेमेंट" },
    { icon: Clock, label: "24/7 सपोर्ट" },
    { icon: Lock, label: "एन्क्रिप्टेड" },
  ];

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative w-full bg-satta-black border-t border-satta-gold/10 z-[80]"
    >
      {/* Trust Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 border-b border-satta-gold/10">
        <div className="max-w-6xl mx-auto">
          {/* Trust Features */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {trustFeatures.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-4 p-4 rounded-xl bg-satta-dark/60 border border-satta-gold/20"
              >
                <div className="w-12 h-12 rounded-xl bg-satta-red/20 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-satta-red" />
                </div>
                <span className="text-white font-medium">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div
            className={`text-center mb-10 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h3 className="text-white font-bold text-xl mb-2">मदद चाहिए?</h3>
            <p className="text-satta-gold/60 mb-6">हमारी टीम 24/7 उपलब्ध है</p>

            <div className="flex flex-wrap justify-center gap-4">
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-satta-dark/60 border border-satta-gold/20 hover:border-satta-red/50 transition-all duration-300 group"
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${contact.color}`}
                  >
                    <contact.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-satta-gold/60 text-xs">
                      {contact.label}
                    </p>
                    <p className="text-white text-sm font-medium group-hover:text-satta-red transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div
            className={`p-6 rounded-2xl bg-satta-dark/60 border border-satta-red/30 mb-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-satta-red flex-shrink-0 mt-1" />
              <div>
                <p className="text-satta-red font-bold mb-2">
                  अस्वीकरण / Disclaimer
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  यह गेम वित्तीय जोखिम से जुड़ा है। जिम्मेदारी से खेलें। सट्टा
                  गैंबलिंग आपके क्षेत्र में प्रतिबंधित हो सकता है। कृपया खेलने
                  से पहले स्थानीय कानूनों का पालन करें। खिलाड़ी की उम्र 18+ वर्ष
                  होनी चाहिए।
                  <br />
                  <br />
                  This game involves financial risk. Play responsibly. Matka
                  gambling may be restricted in your jurisdiction. Please ensure
                  you comply with local laws before playing. Players must be 18+
                  years of age.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className={`flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-satta-gold/10 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Logo */}
            <div className="flex items-center gap-2">
              {/* <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-satta-red to-satta-gold flex items-center justify-center">
                <span className="text-white font-bold text-sm font-montserrat">
                  DB
                </span>
              </div> */}
              <div>
                {/* <span className="text-white font-bold font-montserrat">
                  BOSS
                </span> */}
                <span className="text-satta-gold text-xs ml-1">DhanWarsha</span>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-satta-gold/60 text-sm text-center">
              © 2026 DhanWarsha. सभी अधिकार सुरक्षित।
            </p>

            {/* Links */}
            <div className="flex gap-6">
              <a
                href="#"
                className="text-satta-gold/60 text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-satta-gold/60 text-sm hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
