import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ProjectsSection } from '@/components/projects-section';
import { AwardsSection } from '@/components/awards-section';
import { BlogSection } from '@/components/blog-section';
import { ChatbotSection } from '@/components/chatbot-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <AwardsSection />
      <BlogSection />
      <ChatbotSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
