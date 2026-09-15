import { lazy, Suspense, useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import '../../../packages/ui/src/styles/global.css';
import '../../../packages/ui/src/styles/portfolio-theme.css';
import '../../../packages/ui/src/styles/portfolio-pages.css';
import './index.css';
import './App.css';
import animePortrait from './assets/amrita-animie.png';

// The module is provided at runtime by Module Federation.
const About = lazy(() => import('about-mfe/About'));
const Experience = lazy(() => import('experience-mfe/Experience'));
const Projects = lazy(() => import('projects-mfe/Projects'));
const Skills = lazy(() => import('skills-mfe/Skills'));
const Contact = lazy(() => import('contact-mfe/Contact'));

type Theme = 'light' | 'dark';

function ThemeIcon({ theme }: { theme: Theme }) {
  if (theme === 'dark') {
    return (
      <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    );
  }

  return (
    <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
}

function ThemePicker({ theme, setTheme }: { theme: Theme; setTheme: (theme: Theme) => void }) {
  return (
    <button
      type="button"
      className="theme-picker"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <ThemeIcon theme={theme} />
    </button>
  );
}

function TypewriterRole() {
  const roles = ['Lead Engineer', 'System Design & GenAI Practitioner', 'Java Full Stack Developer'];
  const [typewriter, setTypewriter] = useState({ roleIndex: 0, length: 0, deleting: false, pause: 0 });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTypewriter((state) => {
        const role = roles[state.roleIndex];

        if (state.pause > 0) {
          return { ...state, pause: state.pause - 1 };
        }

        if (!state.deleting && state.length < role.length) {
          const nextLength = state.length + 1;
          return { ...state, length: nextLength, pause: nextLength === role.length ? 16 : 0 };
        }

        if (state.deleting && state.length > 0) {
          return { ...state, length: state.length - 1 };
        }

        if (!state.deleting) {
          return { ...state, deleting: true };
        }

        return { roleIndex: (state.roleIndex + 1) % roles.length, length: 0, deleting: false, pause: 0 };
      });
    }, 80);

    return () => window.clearInterval(timer);
  }, []);

  return <p className="hero-role" aria-live="polite" aria-label={roles[typewriter.roleIndex]}>{roles[typewriter.roleIndex].slice(0, typewriter.length)}<span className="typewriter-cursor" aria-hidden="true">|</span></p>;
}

function RouteScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const scrollToTarget = () => {
      if (location.hash) {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    const timer = window.setTimeout(scrollToTarget, 100);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return null;
}

function Home() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-name">Amrita Singh</h1>
              <TypewriterRole />
              <p className="hero-description">Lead Engineer and hands-on IC contributor with 18+ years of experience spanning full-stack development, distributed systems design, cloud-native architecture, and GenAI/LLM solutions.</p>
              <p className="hero-description">Deep practitioner of Retrieval-Augmented Generation (RAG), LLM orchestration with LangChain and OpenAI, agentic AI workflows, and Text2SQL frameworks.</p>
              <p className="hero-description">I bring strong system design, architecture, R&D and cross-functional leadership across fintech, banking, telecom, and insurance domains.</p>
              <p className="hero-description">AWS Certified Solutions Architect with a focus on building intelligent, observable and dependable enterprise systems.</p>
              <div className="hero-actions">
                <Link to="#projects" className="btn btn-primary">Explore my work <span aria-hidden="true">↗</span></Link>
                <a href="#contact" className="text-link">Let’s connect <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <div className="hero-aside" aria-label="Professional snapshot">
              <div className="portrait-frame">
                <img src={animePortrait} alt="Anime illustration of Amrita Singh enjoying an adventure" />
                <span className="thought-bubble">Build with<br />purpose.</span>
              </div>
              <div className="social-links">
                <a href="mailto:amrita.scholl@gmail.com" aria-label="Email Amrita">@</a>
                <a href="https://www.linkedin.com/in/amrita-singh" target="_blank" rel="noreferrer" aria-label="Amrita on LinkedIn">in</a>
                <a href="https://github.com/amrita-scholl" target="_blank" rel="noreferrer" aria-label="Amrita on GitHub">⌘</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="intro-strip"><div className="container strip-grid"><p className="section-kicker">A little about me</p><p className="strip-copy">I turn complex product ideas into dependable digital experiences, balancing architectural clarity with the details people feel when they use a product.</p><a href="#about" className="arrow-link">Read more <span aria-hidden="true">↗</span></a></div></section>
      <section id="about" className="spa-section"><About /></section>
      <section id="experience" className="spa-section"><Experience /></section>
      <section id="projects" className="spa-section"><Projects /></section>
      <section id="skills" className="spa-section"><Skills /></section>
      <section id="education" className="spa-section"><ResumeSummary /></section>
      <section id="contact" className="spa-section"><Contact /></section>
    </>
  );
}

function ResumeSummary() {
  return <main className="portfolio-page" id="resume-summary"><div className="container"><div className="page-intro"><p className="eyebrow">Education & certifications</p><h1>Credentials behind the <span>work.</span></h1><p>B.Tech from Uttar Pradesh Technical University (UPTU), 2006.</p></div><div className="page-grid"><section className="info-panel"><h2>Certifications</h2><p>AWS Certified Solutions Architect - Associate</p><p>Azure certification</p><p>Databricks Certified Data Engineer Associate</p><p>Snowflake - 5 hands-on badges</p></section><section className="info-panel"><h2>Core competencies</h2><p>Full-stack development, GenAI / RAG / LLM systems, system design, microservices, event-driven architecture, cloud-native platforms, R&D leadership, IAM and security.</p><a className="btn btn-primary" href="/resume.pdf" download="Amrita-Singh-Resume.pdf">Download resume <span aria-hidden="true">↓</span></a></section></div></div></main>;
}

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = window.localStorage.getItem('amrita-theme-mode');
    return savedTheme === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    window.localStorage.setItem('amrita-theme-mode', theme);
  }, [theme]);

  return (
    <div className="portfolio" data-theme={theme}>

      <RouteScrollManager />

      <header className="navbar">
        <div className="navbar-container">

          <Link
            to="/"
            className="navbar-brand"
          >
            Amrita  <span>Singh</span>
          </Link>

          <nav className="navbar-links">

            <a href="#about">
              About
            </a>

            <a href="#experience">
              Experience
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#skills">
              Skills
            </a>

            <a href="#education">
              Education
            </a>

            <a href="#education">
              Certifications
            </a>

            <a href="/resume.pdf" download="Amrita-Singh-Resume.pdf" className="resume-link">Resume</a>

            <a href="#contact">
              Contact
            </a>

            <ThemePicker theme={theme} setTheme={setTheme} />

          </nav>

        </div>
      </header>



      <main>

        <Suspense
          fallback={
            <div className="container">
              <p>Loading...</p>
            </div>
          }
        >

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />


          </Routes>

        </Suspense>

      </main>



      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column footer-identity">
            <h2>Amrita Singh</h2>
            <p>Lead Engineer and GenAI practitioner creating thoughtful, scalable and high-performance solutions.</p>
          </div>

          <div className="footer-column">
            <h2>Links</h2>
            <div className="footer-nav-links">
              <Link to="/about">About</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/skills">Skills</Link>
            </div>
          </div>

          <div className="footer-column footer-connect">
            <h2>Connect</h2>
            <div className="footer-social-links">
              <a href="https://www.linkedin.com/in/amrita-singh" target="_blank" rel="noreferrer" aria-label="Amrita on LinkedIn">in</a>
              <a href="https://github.com/amrita-scholl" target="_blank" rel="noreferrer" aria-label="Amrita on GitHub">git</a>
              <a href="mailto:amrita.scholl@gmail.com" aria-label="Email Amrita">@</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Amrita Singh. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;