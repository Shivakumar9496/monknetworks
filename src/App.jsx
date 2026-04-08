import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from './pages/Home/homepage';
import SolutionsPage from './pages/Solutions/SolutionsPage';
import DigitalSolutionsPage from './pages/DigitalSolutions/DigitalSolutionsPage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import MainLayout from './components/layout/MainLayout';
import ScrollToTop from './components/utils/ScrollToTop';
import './App.css';

const AppContent = () => {
  const location = useLocation();

  return (
    <MainLayout>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/digital-solutions" element={<DigitalSolutionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
