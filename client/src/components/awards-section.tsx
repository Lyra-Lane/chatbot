import { useLanguage } from './language-context';
import { portfolioData } from '@/data/portfolio-data';
import { Badge } from '@/components/ui/badge';
import { useEffect, useRef, useState } from 'react';

export function AwardsSection() {
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

  const getAwardColor = (type: string) => {
    switch (type) {
      case 'funding':
        return 'bg-blue-100 text-blue-800';
      case 'competition':
        return 'bg-yellow-100 text-yellow-800';
      case 'teaching':
        return 'bg-green-100 text-green-800';
      case 'academic':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`content-section ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("Awards & Recognition", "奖项与荣誉")}
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-academic-blue rounded-full"></div>
            
            {/* Awards timeline */}
            <div className="space-y-12">
              {portfolioData.awards.map((award, index) => (
                <div key={index} className="flex items-center">
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {t(award.title.en, award.title.zh)}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {t(award.description.en, award.description.zh)}
                          </p>
                          <Badge className={`px-3 py-1 rounded-full text-sm ${getAwardColor(award.type)}`}>
                            {award.year}
                          </Badge>
                        </div>
                      </div>
                      <div className="relative z-10 w-4 h-4 bg-academic-blue rounded-full border-4 border-white shadow-lg"></div>
                      <div className="w-1/2 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8"></div>
                      <div className="relative z-10 w-4 h-4 bg-academic-blue rounded-full border-4 border-white shadow-lg"></div>
                      <div className="w-1/2 pl-8">
                        <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {t(award.title.en, award.title.zh)}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {t(award.description.en, award.description.zh)}
                          </p>
                          <Badge className={`px-3 py-1 rounded-full text-sm ${getAwardColor(award.type)}`}>
                            {award.year}
                          </Badge>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
