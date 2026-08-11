import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import TeamPage from './pages/TeamPage';
import ImpactPage from './pages/ImpactPage';
import GalleryPage from './pages/GalleryPage';
import PixelTransitionDemo from './pages/PixelTransitionDemo';
import AdminPage from './pages/AdminPage';
import AboutUsPage from './pages/AboutUsPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/pixel-transition" element={<PixelTransitionDemo />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
