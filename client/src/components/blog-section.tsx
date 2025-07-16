import { useLanguage } from './language-context';
import { portfolioData } from '@/data/portfolio-data';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function BlogSection() {
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

  const getCategoryColor = (type: string) => {
    switch (type) {
      case 'technical':
        return 'bg-blue-100 text-blue-800';
      case 'research':
        return 'bg-green-100 text-green-800';
      case 'reflection':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const categories = [
    { key: 'technical', en: 'Technical Notes', zh: '技术笔记' },
    { key: 'research', en: 'Research Updates', zh: '研究更新' },
    { key: 'reflection', en: 'Academic Reflections', zh: '学术思考' },
    { key: 'competition', en: 'Competition Recaps', zh: '竞赛回顾' }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`content-section ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("Blog & Insights", "博客与见解")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t(
                "Sharing thoughts on AI research, technical discoveries, and academic reflections.",
                "分享关于人工智能研究、技术发现和学术思考的想法。"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.type)}`}>
                      {t(post.category.en, post.category.zh)}
                    </Badge>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {t(post.title.en, post.title.zh)}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {t(post.excerpt.en, post.excerpt.zh)}
                  </p>
                  
                  <button className="academic-blue hover:text-blue-700 font-medium text-sm flex items-center group">
                    {t("Read More", "阅读更多")}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Blog Categories */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {t("Explore by Category", "按类别浏览")}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.key}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${getCategoryColor(category.key)} hover:opacity-80`}
                >
                  {t(category.en, category.zh)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
