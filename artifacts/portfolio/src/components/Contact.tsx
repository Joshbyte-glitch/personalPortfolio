import { useState } from 'react';
import '../styles/contact.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="section contact" ref={targetRef as React.RefObject<HTMLElement>}>
      <div className="contact__container">
        <h2 className={`section__title contact__title animate-fade-up ${isIntersecting ? 'is-visible' : ''}`}>
          Let's build something
        </h2>
        <p
          className={`contact__subtitle animate-fade-up ${isIntersecting ? 'is-visible' : ''}`}
          style={{ animationDelay: '100ms' }}
        >
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>

        <form
          className={`contact__form animate-fade-up ${isIntersecting ? 'is-visible' : ''}`}
          style={{ animationDelay: '200ms' }}
          onSubmit={handleSubmit}
          data-testid="contact-form"
        >
          <div className="form__group">
            <label htmlFor="name" className="form__label">Name</label>
            <input type="text" id="name" required className="form__input" placeholder="Juan Dela Cruz" data-testid="input-name" />
          </div>

          <div className="form__group">
            <label htmlFor="email" className="form__label">Email</label>
            <input type="email" id="email" required className="form__input" placeholder="juan@email.com" data-testid="input-email" />
          </div>

          <div className="form__group">
            <label htmlFor="message" className="form__label">Message</label>
            <textarea id="message" required className="form__input form__textarea" placeholder="How can I help you?" rows={5} data-testid="input-message"></textarea>
          </div>

          <button
            type="submit"
            className="form__submit btn btn--primary"
            disabled={status === 'submitting' || status === 'success'}
            data-testid="button-submit"
          >
            {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="form__success" data-testid="text-success">Message sent! I'll get back to you soon.</p>
          )}
        </form>

        <div
          className={`contact__socials animate-fade-up ${isIntersecting ? 'is-visible' : ''}`}
          style={{ animationDelay: '300ms' }}
        >
          <a href="https://github.com/Joshbyte-glitch" className="social__link" target="_blank" rel="noopener noreferrer" data-testid="link-github">
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/josh-brandon-cabonilas-5267b2411/" className="social__link" target="_blank" rel="noopener noreferrer" data-testid="link-linkedin">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="joshbrandoncabonilas@gmail.com" className="social__link" data-testid="link-email">
            <Mail size={20} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
