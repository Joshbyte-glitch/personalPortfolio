import '../styles/projects.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  const projects = [
    {
      id: 1,
      name: 'KiosKonnekt',
      description: 'An Agentic AI-Powered Interactive Kiosk for Interviewing Student Applicants for Pamantasan ng Lungsod ng Valenzuela.',
      tags: ['React', 'WebSockets', 'Node.js', 'Redis'],
      image: '/kioskonnket.png'
    },
    {
      id: 2,
      name: 'See and Smile Dental Services',
      description: 'See and Smile is a convenient online booking platform for quality dental services. Easily schedule appointments, choose your preferred dentist, and manage your dental care with just a few clicks.',
      tags: ['Go', 'Prometheus', 'React', 'PostgreSQL'],
      image: '/see and smile.png'
    },
    {
      id: 3,
      name: 'Petcare E-Commerce Website',
      description: 'Petcare is a one-stop e-commerce platform dedicated to pet lovers. Shop premium pet food, supplies, accessories, and grooming products with fast delivery and expert pet care recommendations.',
      tags: ['Python', 'FastAPI', 'OpenAI', 'Next.js'],
      image: '/petcare.png'
    },
    {
      id: 4,
      name: 'Sabay Sayaw',
      description: 'An energetic rhythm game where you must master the rhythm by flawlessly matching arrow keys. Test your timing and musical skills against increasingly challenging patterns.',
      tags: ['Rust', 'AWS', 'Terraform', 'CLI'],
      image: '/sabaysayaw.png'
    },
    {
      id: 5,
      name: 'Valenzuela Community Feedback',
      description: 'Valenzuela Community Feedback is a platform that allows residents to share their concerns, suggestions, and experiences with local government services.',  
      tags: ['TypeScript', 'React', 'Node.js', 'Figma API'],
      image: '/valenzuela.png'
    },
    
  ];

  return (
    <section id="projects" className="section" ref={targetRef as React.RefObject<HTMLElement>}>
      <h2 className={`section__title animate-fade-up ${isIntersecting ? 'is-visible' : ''}`}>Selected Projects</h2>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`card animate-fade-up ${isIntersecting ? 'is-visible' : ''}`}
            style={{ animationDelay: `${(index % 3) * 100}ms` }}
            data-testid={`card-project-${project.id}`}
          >
            <div className="card__image-container">
              <img
                src={project.image}
                alt={project.name}
                className="card__image"
                loading="lazy"
              />
            </div>

            <div className="card__content">
              <h3 className="card__title">{project.name}</h3>
              <p className="card__description">{project.description}</p>

              <div className="card__tags">
                {project.tags.map(tag => (
                  <span key={tag} className="card__tag">{tag}</span>
                ))}
              </div>

              <div className="card__actions">
                <a href="#" className="card__btn" aria-label={`View ${project.name} live demo`} data-testid={`link-demo-${project.id}`}>
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
                <a href="#" className="card__btn" aria-label={`View ${project.name} on GitHub`} data-testid={`link-github-${project.id}`}>
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
