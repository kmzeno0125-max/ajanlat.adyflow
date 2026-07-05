import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <img
              src="/image.png"
              alt="AdyFlow"
              className="h-12 sm:h-14 w-auto object-contain"
            />
            <p className="text-muted text-sm">
              AI-vezérelt ügyfélszerző rendszerek
            </p>
          </div>

          <a
            href="mailto:info@adyflow.com"
            className="flex items-center gap-2 text-muted hover:text-white transition-colors duration-200"
          >
            <Mail className="w-4 h-4" />
            <span className="font-inter text-sm">info@adyflow.com</span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <div className="flex items-center gap-6 text-xs text-muted">
            <span>Meta Partner</span>
            <span>Google Partner</span>
          </div>
          <p className="text-xs text-muted">AdyFlow, 2026</p>
        </div>
      </div>
    </footer>
  );
}
