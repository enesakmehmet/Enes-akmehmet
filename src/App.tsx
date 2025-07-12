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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    document.body.className = '';
    if (theme === 'dark') document.body.classList.add('theme-dark');
    else if (theme === 'blue') document.body.classList.add('theme-blue');
    else if (theme === 'purple') document.body.classList.add('theme-purple');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Sayfa yüklendiğinde loader'ı kısa süreliğine göster
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

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


  if (loading) {
    return (
      <div className="loader-overlay">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <AnimatedBackground theme={theme} />
      <Navbar theme={theme} onThemeChange={setTheme} />
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
