import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

function CalendarEmbed() {
  useEffect(() => {
    const scriptId = 'leadconnector-form-embed';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-2xl">
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/xdIf2scXSc4534g8GeWa"
        id="xdIf2scXSc4534g8GeWa_1783082255353"
        scrolling="no"
        className="w-full border-none"
        style={{ overflow: 'hidden', minHeight: '650px' }}
      />
    </div>
  );
}

export default function Calendar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="calendar" className="relative py-24 sm:py-32 scroll-mt-24" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-sora font-bold text-3xl sm:text-4xl mb-4">
            Foglalj egy ingyenes konzultációt
          </h2>
          <p className="text-muted font-manrope text-lg max-w-xl mx-auto">
            Nézzük meg együtt, mennyi munkát tudnánk hozni neked. 15 perc, kötöttség nélkül.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Glow behind calendar */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-blue/10 via-accent-purple/5 to-accent-pink/10 blur-xl pointer-events-none" />

          <div className="relative glass-strong rounded-3xl p-4 sm:p-6 min-h-[700px]">
            <CalendarEmbed />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
