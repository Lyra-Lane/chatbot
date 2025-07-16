import { useLanguage } from './language-context';
import { portfolioData } from '@/data/portfolio-data';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function ProjectsSection() {
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

  const getStatusColor = (type: string) => {
    switch (type) {
      case 'research':
        return 'bg-red-100 text-red-800';
      case 'modeling':
        return 'bg-green-100 text-green-800';
      case 'competition':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getTechColor = (type: string) => {
    switch (type) {
      case 'research':
        return 'bg-blue-100 text-blue-800';
      case 'modeling':
        return 'bg-green-100 text-green-800';
      case 'competition':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-purple-100 text-purple-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`content-section ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("Research & Projects", "研究与项目")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t(
                "Explore my latest research work and academic projects in AI, NLP, and statistical modeling.",
                "探索我在人工智能、自然语言处理和统计建模方面的最新研究工作和学术项目。"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                  index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                }`}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.type)}`}>
                      {t(project.status.en, project.status.zh)}
                    </Badge>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-[var(--academic-blue)] transition-colors">
                        <Github className="w-5 h-5" />
                      </button>
                      <button className="text-gray-400 hover:text-[var(--academic-blue)] transition-colors">
                        <FileText className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t(project.title.en, project.title.zh)}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {t(project.description.en, project.description.zh)}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} className={`px-3 py-1 rounded-full text-sm ${getTechColor(project.type)}`}>
                        {tech === 'Chinese' ? t('Chinese', '中文') :
                         tech === 'Time Series' ? t('Time Series', '时间序列') :
                         tech === 'Regression' ? t('Regression', '回归分析') :
                         tech === 'Optimization' ? t('Optimization', '优化') :
                         tech === 'Conjoint Analysis' ? t('Conjoint Analysis', '联合分析') :
                         tech === 'Leadership' ? t('Leadership', '领导力') :
                         tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    {t(project.period.en, project.period.zh)}
                  </div>
                </div>
              </div>
            ))}

            {/* Research Publications Section */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {t("In Preparation", "准备中")}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t("Research Publications", "研究发表")}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {t(
                    "Currently preparing manuscript for publication based on Chinese irony detection research. Planning to present findings at academic conferences and submit to peer-reviewed journals.",
                    "目前正在准备基于中文反讽识别研究的稿件。计划在学术会议上展示研究成果并提交给同行评议期刊。"
                  )}
                </p>
                
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t("Upcoming Publications:", "即将发表：")}
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• {t("Chinese Irony Detection using Fine-tuned LLaMA-2", "使用微调LLaMA-2的中文反讽识别")}</li>
                    <li>• {t("Statistical Approaches to Urban Transport Optimization", "城市交通优化的统计方法")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
