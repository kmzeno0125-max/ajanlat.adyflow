import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, Quote, ChevronLeft, ChevronRight, ArrowRight, Star, Languages } from 'lucide-react';

interface VideoTestimonial {
  id: number;
  type: 'video';
  label: string;
  name: string;
  company: string;
  role?: string;
  quote: string;
  videoUrl: string;
  videoId: string;
  aspect: '9:16' | '16:9';
}

interface TextTestimonial {
  id: number;
  type: 'text';
  label: string;
  name: string;
  company: string;
  role?: string;
  industry?: string;
  country?: string;
  quoteDe?: string;
  quoteHu: string;
  logo?: string;
  rating?: number;
  accentColor?: string;
}

type Testimonial = VideoTestimonial | TextTestimonial;

const testimonials: Testimonial[] = [
  {
    id: 1,
    type: 'video',
    label: 'Videós visszajelzés',
    name: 'Szabó László',
    company: 'LDSZ & SECCAM',
    role: 'Ügyvezető',
    quote: 'Az AdyFlow csapat hozta a munkát, amit ígért. Végre nem kell utánakapkodnom az érdeklődőknek.',
    videoUrl: 'https://www.youtube.com/embed/rr5Nldl6VGA',
    videoId: 'rr5Nldl6VGA',
    aspect: '9:16',
  },
  {
    id: 2,
    type: 'video',
    label: 'Videós visszajelzés',
    name: 'Kocsis Ferenc',
    company: 'Piccolo italiano',
    role: 'Ügyvezető',
    quote: 'Professzionális csapat, kimagasló eredmények. Ajánlom mindenkinek, aki komolyan gondolja a növekedést.',
    videoUrl: 'https://www.youtube.com/embed/oP2xr-ivdwQ',
    videoId: 'oP2xr-ivdwQ',
    aspect: '16:9',
  },
  {
    id: 3,
    type: 'text',
    label: 'Schriftliche Referenz',
    name: 'Jakab Elias',
    company: 'Jaka Projekt GmbH',
    role: 'Geschäftsführer',
    industry: 'Gipser- & Malerarbeiten',
    country: 'Schweiz',
    quoteDe: 'Die Zusammenarbeit mit AdyFlow war eine der besten Entscheidungen für unser Unternehmen. Das Team ist unglaublich professionell, reagiert schnell und liefert zuverlässig Ergebnisse. Seit wir mit ihnen arbeiten, erhalten wir deutlich mehr qualifizierte Anfragen – und zum Monatsende konnten wir spürbar mehr Projekte erfolgreich abschliessen. Wir können AdyFlow jedem Handwerksbetrieb wärmstens empfehlen.',
    quoteHu: 'Az AdyFlow-val való együttműködés az egyik legjobb döntésünk volt. A csapat hihetetlenul profi, gyorsan reagál és megbízhatóan szállítja az eredményeket. Amióta velük dolgozunk, érezhetően több minőségi megkeresést kapunk – és a hónap végére jóval több projektet tudtunk sikeresen lezárni. Szívből ajánljuk az AdyFlow-t minden szakipari vállalkozásnak.',
    logo: '/assets/images/image.png',
    rating: 5,
  },
  {
    id: 4,
    type: 'text',
    label: 'Schriftliche Referenz',
    name: 'Hermann Andreas',
    company: 'UPGRADE Zeitarbeit GmbH',
    role: 'Geschäftsführer',
    industry: 'Zeitarbeit & Fachkräftevermittlung',
    country: 'Österreich',
    quoteDe: 'Die Zusammenarbeit mit AdyFlow war für uns sehr professionell und klar strukturiert. Besonders im Bereich der Fachkräfte, Handwerksbetriebe und projektbezogenen Anfragen konnten wir durch die Kampagnen deutlich gezielter sichtbar werden. Das Team arbeitet schnell, zuverlässig und versteht, worauf es in unserer Branche ankommt. Wir können AdyFlow definitiv weiterempfehlen.',
    quoteHu: 'Az AdyFlow-val való együttműködés nagyon professzionális és átlátható volt számunkra. Különösen a szakemberek, kivitelező cégek és projektalapú megkeresések területén sikerült sokkal célzottabban láthatóvá válnunk a kampányok segítségével. A csapat gyorsan, megbízhatóan dolgozik, és érti, mire van szükség a mi iparágunkban. Jó szívvel ajánljuk az AdyFlow-t.',
    logo: '/assets/images/image copy.png',
    rating: 5,
  },
  {
    id: 5,
    type: 'text',
    label: 'ÍRÁSOS VISSZAJELZÉS',
    name: 'Kari Zoltán',
    company: 'PliszéPro',
    role: 'Ügyvezető',
    industry: 'Plissé és szúnyogháló',
    country: 'Magyarország',
    quoteHu: 'Az AdyFlow-val való együttműködés sokkal többet adott, mint egy egyszerű hirdetéskezelés. A kampányoknak köszönhetően több érdeklődő és több megrendelés érkezett, főleg a plissé és szúnyogháló termékeinkre. Emellett olyan üzleti és kommunikációs ötleteket is kaptunk, amelyek segítettek átláthatóbban működni és tovább bővíteni a céget. Profi, gyors és megbízható csapat – jó szívvel ajánlom őket.',
    logo: '/assets/images/image copy copy.png',
    rating: 5,
    accentColor: 'orange',
  },
];

function VideoSlide({ testimonial }: { testimonial: VideoTestimonial }) {
  const [playing, setPlaying] = useState(false);
  const isPortrait = testimonial.aspect === '9:16';

  return (
    <div className="flex flex-col items-center text-center w-full max-w-2xl mx-auto">
      <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-[11px] font-manrope font-bold uppercase tracking-wider text-accent-blue mb-6">
        {testimonial.label}
      </span>

      <div className={`relative group w-full mx-auto mb-8 ${
        isPortrait ? 'max-w-[280px] sm:max-w-[300px]' : 'max-w-[560px] sm:max-w-[620px]'
      }`}>
        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent-blue/20 via-accent-purple/10 to-accent-pink/15 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40">
          <div className={`relative ${isPortrait ? 'aspect-[9/16]' : 'aspect-video'}`}>
            {!playing ? (
              <>
                <img
                  src={`https://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg`}
                  alt={`${testimonial.name} videós visszajelzés`}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/25 hover:bg-black/15 transition-colors duration-300"
                >
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-full bg-accent-blue/20 animate-ping opacity-40" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center shadow-xl shadow-accent-purple/30 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-7 h-7 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </button>
              </>
            ) : (
              <iframe
                src={`${testimonial.videoUrl}?autoplay=1&rel=0`}
                title={`${testimonial.name} visszajelzés`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      </div>

      <Quote className="w-8 h-8 text-accent-purple/30 mb-3" />
      <p className="font-manrope text-base sm:text-lg text-white/80 leading-relaxed italic mb-6 max-w-md">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent-blue/40 to-accent-purple/40 flex items-center justify-center">
          <span className="font-sora font-bold text-sm text-white">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="text-left">
          <p className="font-sora font-semibold text-sm text-white">{testimonial.name}</p>
          <p className="font-manrope text-xs text-muted">
            {testimonial.role && `${testimonial.role} • `}{testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

function TextSlide({ testimonial }: { testimonial: TextTestimonial }) {
  const [lang, setLang] = useState<'de' | 'hu'>(testimonial.quoteDe ? 'de' : 'hu');
  const quote = lang === 'de' && testimonial.quoteDe ? testimonial.quoteDe : testimonial.quoteHu;
  const hasTranslation = !!testimonial.quoteDe;
  const isOrange = testimonial.accentColor === 'orange';

  return (
    <div className="flex flex-col items-center text-center w-full max-w-2xl mx-auto">
      {/* Logo */}
      {testimonial.logo && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/95 p-2 shadow-lg flex items-center justify-center ${isOrange ? 'shadow-orange-500/10' : 'shadow-black/20'}`}>
            <img
              src={testimonial.logo}
              alt={`${testimonial.company} logo`}
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      )}

      {/* Label */}
      <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-manrope font-bold uppercase tracking-wider mb-6 ${
        isOrange
          ? 'bg-orange-500/10 border border-orange-500/20 text-orange-400'
          : 'bg-accent-purple/10 border border-accent-purple/20 text-accent-purple'
      }`}>
        {testimonial.label}
      </span>

      {/* Quote icon */}
      <Quote className={`w-10 h-10 mb-5 ${isOrange ? 'text-orange-400/25' : 'text-accent-purple/25'}`} />

      {/* Quote text with smooth transition */}
      <div className="relative min-h-[120px] sm:min-h-[100px] flex items-center justify-center mb-6 max-w-xl">
        <AnimatePresence mode="wait">
          <motion.p
            key={lang}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="font-manrope text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed italic"
          >
            &ldquo;{quote}&rdquo;
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Translation toggle - only for bilingual testimonials */}
      {hasTranslation && (
        <button
          onClick={() => setLang(lang === 'de' ? 'hu' : 'de')}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/[0.08] hover:border-accent-purple/30 hover:bg-accent-purple/5 transition-all duration-200 mb-6"
        >
          <Languages className="w-4 h-4 text-accent-purple/70 group-hover:text-accent-purple transition-colors" />
          <span className="text-xs font-manrope font-medium text-white/60 group-hover:text-white/80 transition-colors">
            {lang === 'de' ? 'Fordítás magyarra' : 'Deutsches Original'}
          </span>
          <span className="flex gap-0.5 ml-1">
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded transition-all duration-200 ${lang === 'de' ? 'bg-accent-purple/20 text-accent-purple' : 'text-white/30'}`}>DE</span>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded transition-all duration-200 ${lang === 'hu' ? 'bg-accent-purple/20 text-accent-purple' : 'text-white/30'}`}>HU</span>
          </span>
        </button>
      )}

      {/* Rating */}
      {testimonial.rating && (
        <div className="flex gap-1 mb-6">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className={`w-5 h-5 ${isOrange ? 'text-orange-400' : 'text-amber-400'}`} fill="currentColor" />
          ))}
        </div>
      )}

      {/* Person info */}
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
          isOrange
            ? 'bg-gradient-to-br from-orange-500/40 to-amber-500/40'
            : 'bg-gradient-to-br from-accent-purple/40 to-accent-pink/40'
        }`}>
          <span className="font-sora font-bold text-sm text-white">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="text-left">
          <p className="font-sora font-semibold text-base text-white">{testimonial.name}</p>
          <p className="font-manrope text-sm text-muted">
            {testimonial.role && `${testimonial.role} • `}{testimonial.company}
          </p>
          {testimonial.industry && (
            <p className="font-manrope text-xs text-muted/70">
              {testimonial.industry}{testimonial.country && `, ${testimonial.country}`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const handleNext = () => {
    setDirection(1);
    goNext();
  };

  const handlePrev = () => {
    setDirection(-1);
    goPrev();
  };

  const currentTestimonial = testimonials[current];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" ref={sectionRef}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-accent-purple/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent-blue/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-accent-purple/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
            <span className="text-sm font-manrope font-medium text-muted">
              Valódi visszajelzések
            </span>
          </motion.div>

          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Nem mi mondjuk{' '}
            <span className="gradient-text">magunkról</span>
          </h2>
          <p className="text-muted font-manrope text-lg max-w-xl mx-auto">
            Valódi tapasztalatok olyan vállalkozóktól, akik már velünk dolgoznak és látják az eredményeket.
          </p>
        </motion.div>

        {/* Carousel with side arrows */}
        <div className="relative flex items-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:left-2 lg:left-8 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full glass border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="min-h-[620px] sm:min-h-[660px] flex items-center justify-center w-full px-14 sm:px-16 lg:px-24">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full flex items-center justify-center"
              >
                {currentTestimonial.type === 'video' ? (
                  <VideoSlide testimonial={currentTestimonial} />
                ) : (
                  <TextSlide testimonial={currentTestimonial} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 sm:right-2 lg:right-8 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full glass border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-8 bg-gradient-to-r from-accent-blue to-accent-purple'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-14"
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
            Én is kérek ilyen eredményeket
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
