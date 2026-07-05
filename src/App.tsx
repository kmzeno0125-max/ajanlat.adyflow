import Header from './components/Header';
import Hero from './components/Hero';
import Calendar from './components/Calendar';
import CtaSection from './components/CtaSection';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingPhone from './components/FloatingPhone';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 to-navy-800 text-[#F8FAFC] font-inter overflow-x-hidden">
      <Header />
      <Hero />
      <Testimonials />
      <Steps />
      <Calendar />
      <CtaSection />
      <Footer />
      <FloatingPhone />
    </div>
  );
}
