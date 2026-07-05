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
    label: 'Vide\u00f3s visszajelz\u00e9s',
    name: 'Szab\u00f3 L\u00e1szl\u00f3',
    company: 'LDSZ & SECCAM',
    role: '\u00dcgyvezet\u0151',
    quote: 'Az AdyFlow csapat hozta a munk\u00e1t, amit \u00edg\u00e9rt. V\u00e9gre nem kell ut\u00e1nakapkodnom az \u00e9rdekl\u0151d\u0151knek.',
    videoUrl: 'https://www.youtube.com/embed/rr5Nldl6VGA',
    videoId: 'rr5Nldl6VGA',
    aspect: '9:16',
  },
  {
    id: 2,
    type: 'video',
    label: 'Vide\u00f3s visszajelz\u00e9s',
    name: 'Kocsis Ferenc',
    company: 'Piccolo italiano',
    role: '\u00dcgyvezet\u0151',
    quote: 'Professzion\u00e1lis csapat, kimagasl\u00f3 eredm\u00e9nyek. Aj\u00e1nlom mindenkinek, aki komolyan gondolja a n\u00f6veked\u00e9st.',
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
    role: 'Gesch\u00e4ftsf\u00fchrer',
    industry: 'Gipser- & Malerarbeiten',
    country: 'Schweiz',
    quoteDe: 'Die Zusammenarbeit mit AdyFlow war eine der besten Entscheidungen f\u00fcr unser Unternehmen. Das Team ist unglaublich professionell, reagiert schnell und liefert zuverl\u00e4ssig Ergebnisse. Seit wir mit ihnen arbeiten, erhalten wir deutlich mehr qualifizierte Anfragen \u2013 und zum Monatsende konnten wir sp\u00fcrbar mehr Projekte erfolgreich abschliessen. Wir k\u00f6nnen AdyFlow jedem Handwerksbetrieb w\u00e4rmstens empfehlen.',
    quoteHu: 'Az AdyFlow-val val\u00f3 egy\u00fcttm\u0171k\u00f6d\u00e9s az egyik legjobb d\u00f6nt\u00e9s\u00fcnk volt. A csapat hihetetlenul profi, gyorsan reag\u00e1l \u00e9s megb\u00edzhat\u00f3an sz\u00e1ll\u00edtja az eredm\u00e9nyeket. Ami\u00f3ta vel\u00fck dolgozunk, \u00e9rezhet\u0151en t\u00f6bb min\u0151s\u00e9gi megkeres\u00e9st kapunk \u2013 \u00e9s a h\u00f3nap v\u00e9g\u00e9re j\u00f3val t\u00f6bb projektet tudtunk sikeresen lez\u00e1rni. Sz\u00edvb\u0151l aj\u00e1nljuk az AdyFlow-t minden szakipari v\u00e1llalkoz\u00e1snak.',
    logo: '/assets/images/image.png',
    rating: 5,
  },
  {
    id: 4,
    type: 'text',
    label: 'Schriftliche Referenz',
    name: 'Hermann Andreas',
    company: 'UPGRADE Zeitarbeit GmbH',
    role: 'Gesch\u00e4ftsf\u00fchrer',
    industry: 'Zeitarbeit & Fachkr\u00e4ftevermittlung',
    country: '\u00d6sterreich',
    quoteDe: 'Die Zusammenarbeit mit AdyFlow war f\u00fcr uns sehr professionell und klar strukturiert. Besonders im Bereich der Fachkr\u00e4fte, Handwerksbetriebe und projektbezogenen Anfragen konnten wir durch die Kampagnen deutlich gezielter sichtbar werden. Das Team arbeitet schnell, zuverl\u00e4ssig und versteht, worauf es in unserer Branche ankommt. Wir k\u00f6nnen AdyFlow definitiv weiterempfehlen.',
    quoteHu: 'Az AdyFlow-val val\u00f3 egy\u00fcttm\u0171k\u00f6d\u00e9s nagyon professzion\u00e1lis \u00e9s \u00e1tl\u00e1that\u00f3 volt sz\u00e1munkra. K\u00fcl\u00f6n\u00f6sen a szakemberek, kivitelez\u0151 c\u00e9gek \u00e9s projektalap\u00fa megkeres\u00e9sek ter\u00fclet\u00e9n siker\u00fclt sokkal c\u00e9lzottabban l\u00e1that\u00f3v\u00e1 v\u00e1lnunk a kamp\u00e1nyok seg\u00edts\u00e9g\u00e9vel. A csapat gyorsan, megb\u00edzhat\u00f3an dolgozik, \u00e9s \u00e9rti, mire van sz\u00fcks\u00e9g a mi ipar\u00e1gunkban. J\u00f3 sz\u00edvvel aj\u00e1nljuk az AdyFlow-t.',
    logo: '/assets/images/image copy.png',
    rating: 5,
  },
  {
    id: 5,
    type: 'text',
    label: '\u00cdR\u00c1SOS VISSZAJELZ\u00c9S',
    name: 'Kari Zolt\u00e1n',
    company: 'Plisz\u00e9Pro',
    role: '\u00dcgyvezet\u0151',
    industry: 'Pliss\u00e9 \u00e9s sz\u00fanyogh\u00e1l\u00f3',
    country: 'Magyarorsz\u00e1g',
    quoteHu: 'Az AdyFlow-val val\u00f3 egy\u00fcttm\u0171k\u00f6d\u00e9s sokkal t\u00f6bbet adott, mint egy egyszer\u0171 hirdet\u00e9skezel\u00e9s. A kamp\u00e1nyoknak k\u00f6sz\u00f6nhet\u0151en t\u00f6bb \u00e9rdekl\u0151d\u0151 \u00e9s t\u00f6bb megrendel\u00e9s \u00e9rkezett, f\u0151leg a pliss\u00e9 \u00e9s sz\u00fanyogh\u00e1l\u00f3 term\u00e9keinkre. Emellett olyan \u00fczleti \u00e9s kommunik\u00e1ci\u00f3s \u00f6tleteket is kaptunk, amelyek seg\u00edtettek \u00e1tl\u00e1that\u00f3bban m\u0171k\u00f6dni \u00e9s tov\u00e1bb b\u0151v\u00edteni a c\u00e9get. Profi, gyors \u00e9s megb\u00edzhat\u00f3 csapat \u2013 j\u00f3 sz\u00edvvel aj\u00e1nlom \u0151ket.',
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
                  alt={`${testimonial.name} vide\u00f3s visszajelz\u00e9s`}
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
                title={`${testimonial.name} visszajelz\u00e9s`}
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
            {testimonial.role && `${testimonial.role} \u2022 `}{testimonial.company}
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
            {lang === 'de' ? 'Ford\u00edt\u00e1s magyarra' : 'Deutsches Original'}
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
            {testimonial.role && `${testimonial.role} \u2022 `}{testimonial.company}
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
              Val\u00f3di visszajelz\u00e9sek
            </span>
          </motion.div>

          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Nem mi mondjuk{' '}
            <span className="gradient-text">magunkr\u00f3l</span>
          </h2>
          <p className="text-muted font-manrope text-lg max-w-xl mx-auto">
            Val\u00f3di tapasztalatok olyan v\u00e1llalkoz\u00f3kt\u00f3l, akik m\u00e1r vel\u00fcnk dolgoznak \u00e9s l\u00e1tj\u00e1k az eredm\u00e9nyeket.
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
            \u00c9n is k\u00e9rek ilyen eredm\u00e9nyeket
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
