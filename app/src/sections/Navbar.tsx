import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "डाउनलोड", href: "#download" },
    { label: "कैसे खेलें", href: "#how-it-works" },
    { label: "फीचर्स", href: "#features" },
    { label: "सपोर्ट", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-satta-black/95 backdrop-blur-lg border-b border-satta-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-52 h-10 rounded-sm  bg-gradient-to-br from-satta-red to-satta-gold flex items-center justify-center">
              <span className="text-white font-bold text-lg font-montserrat">
                DhanWarsha
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-satta-gold/70 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("#download")}
              className="btn-primary flex items-center gap-2 text-sm"
            >
              <Download className="w-4 h-4" />
              APK डाउनलोड
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-satta-black/95 backdrop-blur-lg border-b border-satta-gold/10 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left text-satta-gold/70 hover:text-white transition-colors duration-300 py-2"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("#download")}
            className="btn-primary w-full flex items-center justify-center gap-2 mt-4"
          >
            <Download className="w-4 h-4" />
            APK डाउनलोड करें
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
