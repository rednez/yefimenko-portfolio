import { Navbar } from '@/app/components/layout';
import {
  AboutSection,
  ContactsSection,
  HeroSection,
  ProjectsSection,
} from '@/app/components/ui';

export default function Index() {
  return (
    <div className="font-sans bg-stone-50 text-slate-900 min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        .font-serif { font-family: 'Playfair Display', serif !important; }
        body, .font-sans { font-family: 'DM Sans', sans-serif; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #34d39955; border-radius: 2px; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.35} }
        .animate-float { animation: float 7s ease-in-out infinite; }
        .animate-pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }
      `}</style>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactsSection />
    </div>
  );
}
