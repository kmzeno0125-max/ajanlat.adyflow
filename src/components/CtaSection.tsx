import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 sm:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 text-center"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-accent-purple/15 to-accent-pink/10" />
          <div className="absolute inset-0 glass" />

          <div className="relative z-10">
            <h2 className="font-sora font-bold text-2xl sm:text-3xl lg:text-4xl mb-4">
              Kíváncsi vagy, pontosan hogyan dolgozunk?
            </h2>
            <p className="text-muted font-manrope text-lg mb-8 max-w-lg mx-auto">
              Nézd meg a teljes rendszert és az összes szolgáltatásunkat.
            </p>
            <motion.a
              href="https://adyflow.com/"
              target="_blank"
              rel="noopener"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-manrope font-semibold text-lg border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              Részletesebben
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
