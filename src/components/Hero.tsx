import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Aurora background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent-blue/20 blur-[120px] animate-aurora-1" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-accent-purple/15 blur-[100px] animate-aurora-2" />
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] rounded-full bg-accent-pink/10 blur-[140px] animate-aurora-3" />
        <div className="absolute inset-0 noise-overlay pointer-events-none" />
      </div>

      {/* Floating paper plane */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 right-[15%] hidden lg:block opacity-20"
      >
        <svg width="60" height="60" viewBox="0 0 32 32" fill="none">
          <path
            d="M4 24L28 8L16 16L12 28Z"
            stroke="#8B5CF6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 26L4 24"
            stroke="#8B5CF6"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="2 3"
            opacity="0.5"
          />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* Badge + Title + Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-1 lg:order-none w-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-accent-blue/20 mb-4 lg:mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-sm font-manrope font-medium text-muted">
                Kivitelezőknek és gépészeknek
              </span>
            </motion.div>

            <h1 className="font-sora font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-3 lg:mb-5">
              Sok{' '}
              <span className="gradient-text">érdeklődő</span>, nulla{' '}
              <span className="gradient-text">munka?</span>
            </h1>

            {/* Subtitle */}
            <p className="font-manrope font-medium text-lg sm:text-xl text-muted mb-3 lg:mb-6 max-w-lg mx-auto lg:mx-0">
              Mi a komoly, fizető ügyfeleket hozzuk. Kiszámíthatóan, hónapról hónapra.
            </p>

            {/* Guarantee + CTA: desktop only */}
            <div className="hidden lg:block">
              <div className="flex items-center gap-3 mb-8 lg:justify-start group cursor-default">
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:scale-110">
                  <Shield className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300" />
                </div>
                <span className="font-manrope font-semibold text-sm sm:text-base">
                  Ha nincs eredmény, nem fizetsz.
                </span>
              </div>

              <motion.a
                href="#calendar"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block btn-gradient px-8 py-4 rounded-full font-manrope font-semibold text-lg shadow-lg shadow-accent-purple/25 hover:shadow-accent-purple/50 transition-shadow duration-300"
              >
                Foglalj ingyenes időpontot
              </motion.a>
            </div>
          </motion.div>

          {/* Video + Partner badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full order-2 lg:order-none mt-3 lg:mt-0"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-accent-blue via-accent-purple to-accent-pink opacity-60" />
              <div className="absolute inset-[1px] rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/fV12VgBcPa8"
                  title="AdyFlow bemutatkozó videó"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Partner badges */}
            <div className="flex gap-3 mt-4 justify-center lg:justify-start">
              {/* Meta Partner */}
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-navy-800/60 backdrop-blur-md border border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" fill="#3B82F6"/>
                </svg>
                <span className="font-manrope font-semibold text-xs sm:text-sm text-white/90">Meta Partner</span>
              </div>

              {/* Google Partner */}
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-navy-800/60 backdrop-blur-md border border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="font-manrope font-semibold text-xs sm:text-sm text-white/90">Google Partner</span>
              </div>
            </div>
          </motion.div>

          {/* Guarantee + CTA: mobile only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center order-3 lg:hidden w-full mt-6"
          >
            <div className="flex items-center gap-3 mb-6 justify-center group cursor-default">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:scale-110">
                <Shield className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300" />
              </div>
              <span className="font-manrope font-semibold text-sm sm:text-base">
                Ha nincs eredmény, nem fizetsz.
              </span>
            </div>

            <motion.a
              href="#calendar"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block btn-gradient px-8 py-4 rounded-full font-manrope font-semibold text-lg shadow-lg shadow-accent-purple/25 hover:shadow-accent-purple/50 transition-shadow duration-300"
            >
              Foglalj ingyenes időpontot
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
