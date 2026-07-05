import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const PHONE_NUMBER = '+36 30 123 4567';
const PHONE_HREF = 'tel:+36301234567';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-5">
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`
          w-full max-w-3xl rounded-full
          border border-white/[0.08]
          backdrop-blur-xl
          transition-all duration-500 ease-out
          ${scrolled
            ? 'bg-navy-900/75 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.04)] border-white/[0.1]'
            : 'bg-navy-900/50 shadow-[0_4px_24px_rgba(0,0,0,0.2)]'
          }
        `}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3">

          {/* Logo */}
          <span className="font-sora font-bold text-base sm:text-lg tracking-tight shrink-0 text-white">
            AdyFlow
          </span>

          {/* Phone + CTA */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={PHONE_HREF}
              className="hidden xs:flex items-center gap-1.5 group shrink-0"
            >
              <Phone className="w-3.5 h-3.5 shrink-0 text-accent-blue/70 group-hover:text-accent-blue transition-colors duration-200" />
              <span className="whitespace-nowrap text-xs sm:text-sm font-manrope font-medium bg-gradient-to-r from-accent-blue/80 via-accent-purple/80 to-accent-pink/80 bg-clip-text text-transparent group-hover:from-accent-blue group-hover:via-accent-purple group-hover:to-accent-pink transition-all duration-200">
                {PHONE_NUMBER}
              </span>
            </a>

            {/* Mobile phone icon only */}
            <a
              href={PHONE_HREF}
              className="flex xs:hidden items-center justify-center w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.08]"
            >
              <Phone className="w-3.5 h-3.5 text-accent-blue/80" />
            </a>

            <a
              href="#calendar"
              className="btn-gradient shrink-0 px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-manrope font-semibold text-white shadow-lg shadow-accent-purple/25 hover:shadow-accent-purple/40 transition-all duration-300 hover:scale-[1.03]"
            >
              Ingyenes konzultáció
            </a>
          </div>

        </div>
      </motion.header>
    </div>
  );
}
