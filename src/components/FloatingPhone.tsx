import { Phone } from 'lucide-react';

const PHONE_HREF = 'tel:+36301234567';

export default function FloatingPhone() {
  return (
    <a
      href={PHONE_HREF}
      aria-label="Hívás"
      className="fixed right-4 bottom-6 sm:right-6 sm:bottom-8 z-40 w-12 h-12 rounded-full bg-navy-800/90 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-lg shadow-black/20 hover:bg-navy-700/90 hover:border-accent-blue/30 hover:shadow-accent-blue/10 transition-all duration-300"
    >
      <Phone className="w-5 h-5 text-accent-blue" />
    </a>
  );
}
