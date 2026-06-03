import '../styles/cv.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Download, Printer, ExternalLink } from 'lucide-react';

export default function CV() {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Cabonilas-Resume.pdf';
    link.download = 'Josh-Brandon-Cabonilas-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    const printWindow = window.open('/Cabonilas-Resume.pdf', '_blank');
    if (printWindow) {
      printWindow.addEventListener('load', () => {
        printWindow.print();
      });
    }
  };

  const handleOpenNewTab = () => {
    window.open('/Cabonilas-Resume.pdf', '_blank');
  };

  return (
    <section id="cv" className="section cv" ref={targetRef as React.RefObject<HTMLElement>}>
      <div className="cv__container">
        <h2 className={`section__title cv__title animate-fade-up ${isIntersecting ? 'is-visible' : ''}`}>
          Resume & CV
        </h2>
        <p
          className={`cv__subtitle animate-fade-up ${isIntersecting ? 'is-visible' : ''}`}
          style={{ animationDelay: '100ms' }}
        >
          View my professional background, experience, and qualifications.
        </p>

        <div
          className={`cv__actions animate-fade-up ${isIntersecting ? 'is-visible' : ''}`}
          style={{ animationDelay: '200ms' }}
        >
          <button className="cv__button cv__button--primary" onClick={handleDownload} title="Download resume as PDF">
            <Download size={20} />
            Download CV
          </button>
          <button className="cv__button cv__button--secondary" onClick={handlePrint} title="Print resume">
            <Printer size={20} />
            Print CV
          </button>
          <button className="cv__button cv__button--secondary" onClick={handleOpenNewTab} title="Open resume in new tab">
            <ExternalLink size={20} />
            Open in New Tab
          </button>
        </div>
      </div>
    </section>
  );
}
