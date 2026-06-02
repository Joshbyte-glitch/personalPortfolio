import '../styles/skills.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Cloud } from 'lucide-react';
import {
  SiJavascript, SiTypescript, SiPython, SiRust, SiSupabase,
  SiReact, SiNodedotjs, SiExpress, SiNextdotjs, SiGraphql,
  SiPostgresql, SiDocker, SiKubernetes, SiGit, SiLinux
} from 'react-icons/si';

export default function Skills() {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Python', icon: <SiPython /> },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: <SiReact /> },
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'Docker', icon: <SiDocker /> },
        { name: 'Supabase', icon: <SiSupabase /> },
        { name: 'AWS', icon: <Cloud size={16} /> },
        { name: 'Git', icon: <SiGit /> },
      ]
    }
  ];

  return (
    <section id="skills" className="section" ref={targetRef as React.RefObject<HTMLElement>}>
      <h2 className={`section__title animate-fade-up ${isIntersecting ? 'is-visible' : ''}`}>Skills & Expertise</h2>

      <div className="skills__container">
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className={`skills__category animate-fade-up ${isIntersecting ? 'is-visible' : ''}`}
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <h3 className="skills__category-title">{category.title}</h3>
            <div className="skills__grid">
              {category.skills.map(skill => (
                <div key={skill.name} className="skills__badge">
                  <span className="skills__badge-icon">{skill.icon}</span>
                  <span className="skills__badge-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
