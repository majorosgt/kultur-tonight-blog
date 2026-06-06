import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  lang: "en" | "fr";
}

const STORAGE_KEY = "kt_popup_dismissed";
const EXPIRY_MS = 30 * 24 * 60 * 60 * 1000;

function isDismissed(): boolean {
  try {
    const val = localStorage.getItem(STORAGE_KEY);
    if (!val) return false;
    const ts = Number(val);
    if (isNaN(ts)) return false;
    return Date.now() - ts < EXPIRY_MS;
  } catch {
    return false;
  }
}

function setDismissed() {
  try {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  } catch {}
}

const copy = {
  en: {
    headline: "The best cultural evenings — delivered free, every week.",
    subtext: "Join 1,200 Geneva culture lovers. The finest events, described with the care they deserve.",
    placeholder: "Your email address",
    button: "GET THE WEEKLY GUIDE",
    dismiss: "No thanks",
    fine: "No spam. Just culture. Unsubscribe at any time.",
    success: "You're in. See you Friday.",
  },
  fr: {
    headline: "Les meilleures soirées culturelles — gratuitement, chaque semaine.",
    subtext: "Rejoignez 1 200 amateurs de culture à Genève. Les meilleurs événements, décrits avec soin.",
    placeholder: "Votre adresse e-mail",
    button: "RECEVOIR LE GUIDE",
    dismiss: "Non merci",
    fine: "Pas de spam. Juste de la culture. Désinscription à tout moment.",
    success: "C'est noté. À vendredi.",
  },
};

export function NewsletterPopup({ lang }: Props) {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t = copy[lang];

  useEffect(() => {
    if (isDismissed()) return;

    timerRef.current = setTimeout(() => {
      setVisible(true);
    }, 10000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        if (timerRef.current) clearTimeout(timerRef.current);
        if (!isDismissed()) setVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  function close() {
    setDismissed();
    setVisible(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setDismissed();
    setTimeout(() => {
      setVisible(false);
    }, 2500);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <motion.div
            key="popup-modal"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full max-w-[480px] rounded-sm overflow-hidden"
            style={{ borderTop: "4px solid #E1C570" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/popup/kt-popup-bg.jpg')" }}
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
            />

            <div className="relative z-10 px-8 py-10">
              <button
                onClick={close}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8"
                  >
                    <p className="font-serif text-2xl text-white mb-2">{t.success}</p>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h2
                      className="font-serif text-2xl md:text-3xl text-white leading-snug mb-4"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {t.headline}
                    </h2>
                    <p className="text-white/70 text-sm leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                      {t.subtext}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.placeholder}
                        className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#E1C570] transition-colors"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      />
                      <button
                        type="submit"
                        className="w-full py-3 text-sm font-semibold tracking-widest text-[#0C2340] transition-opacity hover:opacity-90"
                        style={{ backgroundColor: "#E1C570", fontFamily: "Inter, sans-serif" }}
                      >
                        {t.button}
                      </button>
                    </form>

                    <div className="mt-4 flex flex-col items-center gap-2">
                      <button
                        onClick={close}
                        className="text-white/40 text-xs hover:text-white/70 transition-colors underline"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {t.dismiss}
                      </button>
                      <p className="text-white/30 text-xs text-center" style={{ fontFamily: "Inter, sans-serif" }}>
                        {t.fine}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
