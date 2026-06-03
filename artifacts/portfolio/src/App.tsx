import './styles/global.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import CV from './components/CV';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <main className="main-content">
          <Hero />
          <Skills />
          <CV />
          <Projects />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
}
