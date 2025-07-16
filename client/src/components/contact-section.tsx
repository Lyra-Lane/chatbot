import { useLanguage } from './language-context';
import { portfolioData } from '@/data/portfolio-data';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, MapPin, Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function ContactSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: t("Email", "邮箱"),
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
      bgColor: 'bg-academic-blue'
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/manyao-li-9a4436375",
      href: portfolioData.personal.linkedin,
      bgColor: 'bg-blue-600'
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/Lyra-lane",
      href: portfolioData.personal.github,
      bgColor: 'bg-gray-800'
    },
    {
      icon: MapPin,
      title: t("Location", "位置"),
      value: t(portfolioData.personal.location.en, portfolioData.personal.location.zh),
      href: null,
      bgColor: 'bg-red-500'
    }
  ];

  const collaborationTypes = [
    { en: "Research collaborations", zh: "研究合作" },
    { en: "Internship opportunities", zh: "实习机会" },
    { en: "Academic discussions", zh: "学术讨论" },
    { en: "Project partnerships", zh: "项目合作" }
  ];

  return (
    <section id="contact" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`content-section ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("Let's Connect", "联系我")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t(
                "Interested in collaboration, research opportunities, or just want to chat about AI and data science? I'd love to hear from you.",
                "对合作、研究机会感兴趣，或只是想聊聊人工智能和数据科学？我很乐意听到您的想法。"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="space-y-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`${method.bgColor} text-white p-4 rounded-full`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{method.title}</h3>
                    {method.href ? (
                      <a 
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="academic-blue hover:text-blue-700 transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="text-gray-600">{method.value}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* WeChat */}
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 text-white p-4 rounded-full">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.088 4.203 2.84 5.544l-1.797 2.709 3.722-1.87c.938.281 1.938.418 2.926.418.298 0 .593-.017.886-.05-.187-.632-.291-1.291-.291-1.977 0-3.927 3.296-7.11 7.36-7.11.408 0 .805.034 1.188.1-.695-1.893-2.647-3.306-4.943-3.306zm-2.172 2.859c.632 0 1.144.512 1.144 1.144s-.512 1.144-1.144 1.144-1.144-.512-1.144-1.144.512-1.144 1.144-1.144zm4.344 0c.632 0 1.144.512 1.144 1.144s-.512 1.144-1.144 1.144-1.144-.512-1.144-1.144.512-1.144 1.144-1.144z"/>
                    <path d="M15.72 9.188c-3.451 0-6.25 2.426-6.25 5.414s2.799 5.414 6.25 5.414c.75 0 1.466-.117 2.133-.326l2.883 1.451-1.393-2.098c1.36-1.045 2.227-2.59 2.227-4.441 0-2.988-2.799-5.414-6.25-5.414zm-1.68 2.32c.477 0 .863.387.863.863s-.387.863-.863.863-.863-.387-.863-.863.387-.863.863-.863zm3.359 0c.477 0 .863.387.863.863s-.387.863-.863.863-.863-.387-.863-.863.387-.863.863-.863z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">WeChat</h3>
                  <span className="text-gray-600">{portfolioData.personal.wechat}</span>
                </div>
              </div>
            </div>

            {/* Contact Form/CTA */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("Ready to Collaborate?", "准备合作了吗？")}
              </h3>
              
              <div className="space-y-4 mb-8">
                {collaborationTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 teal-accent" />
                    <span className="text-gray-700">{t(type.en, type.zh)}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="w-full bg-academic-blue text-white py-4 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                onClick={() => window.open(`mailto:${portfolioData.personal.email}`, '_blank')}
              >
                {t("Send me an email", "给我发邮件")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
