import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  
  return (
    <>
      <AnimatedBackground />
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
      <main className="container" style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={
            <>
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
