import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useLanguage } from './language-context';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: { en: 'Home', zh: '首页' } },
    { id: 'about', label: { en: 'About', zh: '关于' } },
    { id: 'projects', label: { en: 'Projects', zh: '项目' } },
    { id: 'blog', label: { en: 'Blog', zh: '博客' } },
    { id: 'contact', label: { en: 'Contact', zh: '联系' } }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold academic-blue">
            {t("ManYao Li", "李满瑶")}
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="slate-gray hover:text-[var(--academic-blue)] transition-colors duration-200"
              >
                {t(item.label.en, item.label.zh)}
              </button>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="flex items-center space-x-2 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full border-none"
            >
              <span className={`text-sm font-medium ${language === 'en' ? '' : 'text-gray-500'}`}>
                EN
              </span>
              <span className="text-gray-400">|</span>
              <span className={`text-sm font-medium ${language === 'zh' ? '' : 'text-gray-500'}`}>
                中文
              </span>
            </Button>
            
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="slate-gray hover:text-[var(--academic-blue)] transition-colors text-left"
                >
                  {t(item.label.en, item.label.zh)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
