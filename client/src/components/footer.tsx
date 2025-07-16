import { useLanguage } from './language-context';
import { portfolioData } from '@/data/portfolio-data';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Footer() {
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

  const quickLinks = [
    { id: 'about', label: { en: 'About', zh: '关于' } },
    { id: 'projects', label: { en: 'Research', zh: '研究' } },
    { id: 'blog', label: { en: 'Blog', zh: '博客' } },
    { id: 'contact', label: { en: 'Contact', zh: '联系' } }
  ];

  const socialLinks = [
    {
      icon: Mail,
      href: `mailto:${portfolioData.personal.email}`,
      label: 'Email'
    },
    {
      icon: Linkedin,
      href: portfolioData.personal.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: portfolioData.personal.github,
      label: 'GitHub'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t(portfolioData.personal.name.en, portfolioData.personal.name.zh)}
            </h3>
            <p className="text-gray-400 mb-4">
              {t(
                "AI Researcher & Data Scientist passionate about advancing NLP and machine learning applications.",
                "热衷于推进NLP和机器学习应用的人工智能研究员和数据科学家。"
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("Quick Links", "快速链接")}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t(link.label.en, link.label.zh)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("Connect", "联系方式")}
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            {t(
              "© 2024 ManYao Li. Built with passion for AI research and open science.",
              "© 2024 李曼瑶。怀着对人工智能研究和开放科学的热情而构建。"
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
