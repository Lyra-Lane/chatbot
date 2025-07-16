import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useLanguage } from './language-context';
import { portfolioData } from '@/data/portfolio-data';
import profileImage from '@assets/证件照（长发）_1752637704582.jpg';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative animate-fade-in">
              <div className="w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={profileImage}
                  alt="ManYao Li - Professional headshot" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-teal-accent text-white p-3 rounded-full shadow-lg">
                <Check className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 animate-slide-up">
            <div className="mb-6">
              <span className="teal-accent font-medium text-lg">
                {t("Hello, I'm", "你好，我是")}
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
                {t(portfolioData.personal.name.en, portfolioData.personal.name.zh)}
              </h1>
              <h2 className="text-xl lg:text-2xl slate-gray font-medium">
                {t(portfolioData.personal.title.en, portfolioData.personal.title.zh)}
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              {t(portfolioData.personal.summary.en, portfolioData.personal.summary.zh)}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-academic-blue text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                {t("View My Research", "查看我的研究")}
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-[var(--academic-blue)] text-[var(--academic-blue)] px-8 py-3 rounded-lg font-medium hover:bg-[var(--academic-blue)] hover:text-white transition-colors duration-200"
              >
                {t("Get In Touch", "联系我")}
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold academic-blue">3.8</div>
                <div className="text-sm text-gray-600">{t("GPA", "GPA")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold academic-blue">4+</div>
                <div className="text-sm text-gray-600">{t("Awards", "获奖")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold academic-blue">2+</div>
                <div className="text-sm text-gray-600">{t("Research Projects", "研究项目")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
