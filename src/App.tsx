import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="min-h-screen pt-24 gpu-accelerate">
    {children}
  </motion.div>
);

const Home = () => (
  <PageWrapper>
    <Hero />
    <TechStack />
  </PageWrapper>
);

const AboutPage = () => (
  <PageWrapper>
    <About />
    <WhyChooseUs />
  </PageWrapper>
);

const ServicesPage = () => (
  <PageWrapper>
    <Services />
  </PageWrapper>
);

const ContactPage = () => (
  <PageWrapper>
    <Contact />
  </PageWrapper>
);

function App() {
  const location = useLocation();

  return (
    <AnimatedBackground>
      <Navbar />
      <main className="relative z-10 w-full min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </AnimatedBackground>
  );
}

export default App;
