import { useLanguage } from './language-context';
import { portfolioData } from '@/data/portfolio-data';
import { GraduationCap, Briefcase } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function AboutSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setSkillsAnimated(true), 500);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`content-section ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("About Me", "关于我")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t(
                "Passionate about advancing AI research and applying machine learning to solve real-world problems.",
                "热衷于推进人工智能研究，运用机器学习解决现实世界问题。"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-academic-blue text-white p-3 rounded-lg mr-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t("Education", "教育背景")}
                  </h3>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t(portfolioData.education.university.en, portfolioData.education.university.zh)}
                  </h4>
                  <p className="academic-blue font-medium">
                    {t(portfolioData.education.degree.en, portfolioData.education.degree.zh)}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {portfolioData.education.period} | GPA: {portfolioData.education.gpa}
                  </p>
                  <div className="mt-3">
                    <p className="text-sm text-gray-600 font-medium mb-2">
                      {t("Relevant Coursework:", "相关课程：")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {portfolioData.education.coursework.en.map((course, index) => (
                        <span key={course} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {t(course, portfolioData.education.coursework.zh[index])}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-teal-accent text-white p-3 rounded-lg mr-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t("Experience", "工作经历")}
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                {portfolioData.experience.map((exp, index) => (
                  <div key={index} className={`border-l-2 ${index === 0 ? 'border-[var(--academic-blue)]' : 'border-gray-300'} pl-4`}>
                    <h4 className="font-semibold text-gray-900">
                      {t(exp.title.en, exp.title.zh)}
                    </h4>
                    <p className={`font-medium ${index === 0 ? 'academic-blue' : 'text-gray-700'}`}>
                      {t(exp.company.en, exp.company.zh)}
                    </p>
                    <p className="text-gray-600 text-sm mb-2">
                      {t(exp.period.en, exp.period.zh)}
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {exp.description.en.map((desc, descIndex) => (
                        <li key={descIndex}>
                          • {t(desc, exp.description.zh[descIndex])}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t("Technical Skills", "技术技能")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {portfolioData.skills.slice(0, 3).map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">
                        {skill.zh ? t(skill.name, skill.zh) : skill.name}
                      </span>
                      <span className="text-sm text-gray-600">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`skill-bar h-2 rounded-full ${
                          index % 2 === 0 ? 'bg-academic-blue' : 'bg-teal-accent'
                        }`}
                        style={{
                          width: skillsAnimated ? `${skill.percentage}%` : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                {portfolioData.skills.slice(3).map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">
                        {skill.zh ? t(skill.name, skill.zh) : skill.name}
                      </span>
                      <span className="text-sm text-gray-600">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`skill-bar h-2 rounded-full ${
                          index % 2 === 0 ? 'bg-teal-accent' : 'bg-academic-blue'
                        }`}
                        style={{
                          width: skillsAnimated ? `${skill.percentage}%` : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
