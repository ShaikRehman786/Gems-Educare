import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MobileBottomBar from './components/MobileBottomBar';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for performance
import Home from './pages/Home';
import University from './pages/University';
import Fees from './pages/Fees';
import Admission from './pages/Admission';
import Kyrgyzstan from './pages/Kyrgyzstan';
import About from './pages/About';
import Contact from './pages/Contact';
import HostelFood from './pages/HostelFood';
import Accreditations from './pages/Accreditations';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/university" element={<University />} />
              <Route path="/fees" element={<Fees />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/kyrgyzstan" element={<Kyrgyzstan />} />
              <Route path="/hostel-food" element={<HostelFood />} />
              <Route path="/accreditations" element={<Accreditations />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
          <MobileBottomBar />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
