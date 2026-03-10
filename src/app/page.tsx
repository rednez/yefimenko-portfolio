import {
  AboutSection,
  ContactsSection,
  HeroSection,
  ProjectsSection,
} from '@/app/components/ui';

export default function Index() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactsSection />
    </div>
  );
}
