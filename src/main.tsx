import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import { Navbar, Hero, About, Projects, Contact, Footer } from './components/index.ts';
import { ScrollToTop } from './utils/ScrollToTop.ts';

import './utils/i18n/i18n.ts';
import './index.css'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          <Hero />
          <About />
          <Projects />
          <Contact />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
