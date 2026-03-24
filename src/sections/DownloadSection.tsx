import { useEffect, useRef, useState } from "react";
import {
  Check,
  Download,
  Info,
  QrCode,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useInstallPrompt from "@/hooks/useInstallPrompt";

const DownloadSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const { install, installUrl, canInstall, isInstalled } = useInstallPrompt();
const qrCodeUrl = "/qr.png";

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

  const handleInstall = async () => {
    const outcome = await install();

    if (outcome === "accepted") {
      setStatusMessage(
        "Install prompt opened. Finish the browser steps to add the app.",
      );
      setShowDialog(false);
      return;
    }

    if (outcome === "dismissed") {
      setStatusMessage("Install prompt was closed. You can try again anytime.");
      return;
    }

    setStatusMessage(
      "Opened the app link. On mobile, use Add to Home Screen if the install prompt does not appear.",
    );
  };

  const instructions = [
    { icon: Smartphone, text: "Open this website on your Android phone." },
    { icon: Download, text: "Tap Install App or scan the QR code." },
    {
      icon: Check,
      text: "Accept the browser prompt to add it to your home screen.",
    },
  ];

  const trustBadges = [
    { icon: Shield, label: "Secure" },
    { icon: Zap, label: "Fast" },
    { icon: Check, label: "Installable" },
  ];

  return (
    <section
      ref={sectionRef}
      id="download"
      className="relative z-[70] w-full bg-satta-black py-20 md:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-satta-red/10 blur-[120px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2
              className="mb-4 font-montserrat text-white uppercase leading-[1] tracking-tight font-black"
              style={{ fontSize: "clamp(34px, 4.2vw, 64px)" }}
            >
              Install The <span className="text-satta-red">App</span> Now
            </h2>
            <p className="text-lg text-satta-gold/80 md:text-xl">
              Open the website on mobile, tap install, and keep DhanWarsha on your
              home screen.
            </p>
          </div>

          <div
            className={`mb-10 flex justify-center gap-4 transition-all duration-1000 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 rounded-full border border-satta-gold/20 bg-satta-dark/60 px-4 py-2"
              >
                <badge.icon className="h-4 w-4 text-satta-red" />
                <span className="text-sm text-white">{badge.label}</span>
              </div>
            ))}
          </div>

          <div
            className={`mb-10 transition-all duration-1000 delay-200 ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <button
              onClick={handleInstall}
              className="btn-primary animate-pulse-satta px-12 py-5 text-lg"
            >
              <Download className="mr-2 h-6 w-6" />
              {isInstalled ? "App Installed" : "Install App"}
            </button>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-satta-gold/60">
              <Info className="h-4 w-4" />
              {canInstall
                ? "Your browser supports direct installation from this button."
                : "If no install prompt appears, open the site on mobile and use Add to Home Screen."}
            </p>
            {statusMessage ? (
              <p className="mt-3 text-sm text-white/70">{statusMessage}</p>
            ) : null}
            {!isInstalled ? (
              <button
                onClick={() => setShowDialog(true)}
                className="mt-4 text-sm text-satta-gold underline underline-offset-4"
              >
                Show QR and install options
              </button>
            ) : null}
          </div>

          <div
            className={`mb-12 transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="inline-block rounded-3xl border-4 border-satta-gold/30 bg-white p-6">
              <a href={installUrl} target="_blank" rel="noreferrer">
                <img
                  src={qrCodeUrl}
                  alt="Scan to open the install page"
                  className="h-48 w-48 object-contain"
                />
              </a>
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 font-medium text-white">
              <QrCode className="h-5 w-5 text-satta-red" />
              Scan the QR on your phone and install from the opened page
            </p>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-3">
            {instructions.map((item, i) => (
              <div
                key={item.text}
                className={`flex flex-col items-center rounded-xl border border-satta-gold/20 bg-satta-dark/60 p-4 transition-all duration-500 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100 + 400}ms` }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-satta-red/20">
                  <item.icon className="h-5 w-5 text-satta-red" />
                </div>
                <p className="text-center text-sm text-white">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-md border-satta-gold/20 bg-satta-dark text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-montserrat font-bold">
              <span className="text-satta-red">DhanWarsha</span> Install Options
            </DialogTitle>
            <DialogDescription className="text-satta-gold/60">
              Use the install button on this device or scan the QR with your phone.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <button
              onClick={handleInstall}
              className="btn-primary flex w-full items-center justify-center gap-2"
            >
              <Download className="h-5 w-5" />
              {canInstall ? "Install On This Device" : "Open Install Link"}
            </button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-satta-gold/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-satta-dark px-2 text-satta-gold/60">or</span>
              </div>
            </div>
            <div className="text-center">
              <p className="mb-3 text-sm text-white">Scan the QR on your phone</p>
              <div className="inline-block rounded-xl bg-white p-4">
                <a href={installUrl} target="_blank" rel="noreferrer">
                  <img
                    src={qrCodeUrl}
                    alt="Install QR code"
                    className="h-32 w-32 object-contain"
                  />
                </a>
              </div>
              <p className="mt-3 break-all text-xs text-satta-gold/70">
                {installUrl}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DownloadSection;
