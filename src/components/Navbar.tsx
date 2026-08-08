import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 36);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className={`fixed left-0 right-0 top-4 z-50 mx-auto w-[95%] max-w-6xl rounded-full border text-white backdrop-blur-xl transition-colors duration-500 ${
        isScrolled
          ? 'border-gold-300/60 bg-brand-900/92 shadow-editorial'
          : 'border-white/20 bg-transparent'
      }`}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between h-16 px-8">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/REC_Logo_Color_PNG_RGB.png"
              alt="Clg Logo"
              loading="eager"
              className="w-14 h-14 md:w-20 md:h-20 object-contain"
            />
            <img
              src="/club_logo_1_1.png"
              alt="Rotaract club of rec logo"
              loading="eager"
              className="w-12 h-12 md:w-20 md:h-20 object-contain"
            />
            <span className="hidden text-lg font-semibold tracking-wide md:text-xl sm:block">Rotaract Club of REC</span>
            <span className="block text-lg font-semibold sm:hidden">RACREC</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link hover:text-gold-300">
              Home
            </Link>

            <div className="relative">
              <button
                className="nav-link flex items-center space-x-1 hover:text-gold-300"
                onMouseEnter={() => setAboutDropdown(true)}
                onMouseLeave={() => setAboutDropdown(false)}
              >
                <span>About</span>
                <FiChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {aboutDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 top-full mt-3 w-56 rounded-[22px] border border-gold-300/30 bg-brand-900/95 py-3 text-ink-inverse shadow-editorial backdrop-blur-xl"
                    onMouseEnter={() => setAboutDropdown(true)}
                    onMouseLeave={() => setAboutDropdown(false)}
                  >
                    <Link to="/about-us" className="block px-5 py-2 transition-colors hover:text-gold-300">
                      About Us
                    </Link>
                    <Link to="/story" className="block px-5 py-2 transition-colors hover:text-gold-300">
                      Our Story
                    </Link>
                    <Link to="/team" className="block px-5 py-2 transition-colors hover:text-gold-300">
                      Our Team
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/impact" className="nav-link hover:text-gold-300">
              Our Impact
            </Link>

            <Link to="/gallery" className="nav-link hover:text-gold-300">
              Gallery
            </Link>
          </div>

          <button
            className="rounded-full border border-white/20 p-2 text-white transition-colors hover:border-gold-300 hover:text-gold-300 md:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed right-4 top-20 max-h-[calc(100vh-6rem)] w-64 overflow-y-auto rounded-[24px] border border-gold-300/30 bg-brand-900/96 shadow-editorial backdrop-blur-xl md:hidden"
          >
            <div className="p-6 space-y-4">
              <Link
                to="/"
                className="block rounded-lg px-3 py-2 text-ink-inverse transition-colors hover:text-gold-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="block rounded-lg px-3 py-2 text-ink-inverse transition-colors hover:text-gold-300"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="/story"
                className="block rounded-lg px-3 py-2 text-ink-inverse transition-colors hover:text-gold-300"
                onClick={toggleMenu}
              >
                Our Story
              </Link>
              <Link
                to="/team"
                className="block rounded-lg px-3 py-2 text-ink-inverse transition-colors hover:text-gold-300"
                onClick={toggleMenu}
              >
                Our Team
              </Link>
              <Link
                to="/impact"
                className="block rounded-lg px-3 py-2 text-ink-inverse transition-colors hover:text-gold-300"
                onClick={toggleMenu}
              >
                Projects & Events
              </Link>
              <Link
                to="/gallery"
                className="block rounded-lg px-3 py-2 text-ink-inverse transition-colors hover:text-gold-300"
                onClick={toggleMenu}
              >
                Gallery
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 
