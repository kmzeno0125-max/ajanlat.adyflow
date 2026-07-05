import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  'Megtaláljuk azokat az embereket, akiknek pont a te munkádra van szükségük.',
  'Az automatikus rendszerünk azonnal felveszi velük a kapcsolatot, nem felejti el őket, és aktívan tartja az érdeklődést.',
  'Neked már csak a komoly ajánlatkérésekkel és a munkával kell foglalkoznod.',
];

export default function Steps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 sm:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-3xl sm:text-4xl mb-4">
            Egyszerűen működik
          </h2>
          <p className="text-muted font-manrope text-lg">
            Nincs bonyolítás. Három dolog történik.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-[2px]">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink origin-left"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              className="text-center relative"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="font-sora font-bold text-lg">{i + 1}</span>
              </div>
              <p className="text-muted font-inter text-base leading-relaxed max-w-xs mx-auto">
                {step}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#calendar"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-sora font-semibold text-base text-white bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink shadow-lg shadow-accent-purple/25 hover:shadow-xl hover:shadow-accent-purple/35 hover:scale-[1.03] transition-all duration-300"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10" />
            Lefoglalom az ingyenes id\u0151pontom
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
