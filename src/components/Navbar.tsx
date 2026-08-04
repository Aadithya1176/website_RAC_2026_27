import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className="fixed top-4 left-0 right-0 z-50 mx-auto w-[95%] max-w-5xl rounded-full border border-white/60 bg-white/80 text-text-dark shadow-lg shadow-brand-950/10 backdrop-blur-xl"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between h-16 px-8">
          {/* Logo */}
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
            <span className="font-bold text-lg md:text-xl hidden sm:block">Rotaract Club of REC</span>
            <span className="font-bold text-lg block sm:hidden">RACREC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="rounded-full px-3 py-2 transition-colors hover:bg-brand-50 hover:text-brand-700">
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 rounded-full px-3 py-2 transition-colors hover:bg-brand-50 hover:text-brand-700"
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
                    className="absolute top-full left-0 mt-2 w-48 rounded-2xl border border-border bg-white/95 py-2 text-text-dark shadow-lg shadow-brand-950/10 backdrop-blur-md"
                    onMouseEnter={() => setAboutDropdown(true)}
                    onMouseLeave={() => setAboutDropdown(false)}
                  >
                    <Link to="/about-us" className="block px-4 py-2 transition-colors hover:bg-brand-50 hover:text-brand-700">
                      About Us
                    </Link>
                    <Link to="/story" className="block px-4 py-2 transition-colors hover:bg-brand-50 hover:text-brand-700">

                      Our Story
                    </Link>
                    <Link to="/team" className="block px-4 py-2 transition-colors hover:bg-brand-50 hover:text-brand-700">
                      Our Team
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/impact" className="rounded-full px-3 py-2 transition-colors hover:bg-brand-50 hover:text-brand-700">
              Our Impact
            </Link>

            <Link to="/gallery" className="rounded-full px-3 py-2 transition-colors hover:bg-brand-50 hover:text-brand-700">
              Gallery
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-full p-2 text-text-dark transition-colors hover:bg-brand-50 hover:text-brand-700 md:hidden"
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
            className="fixed top-20 right-4 max-h-[calc(100vh-6rem)] w-64 overflow-y-auto rounded-2xl border border-white/70 bg-white/95 shadow-2xl shadow-brand-950/15 backdrop-blur-xl md:hidden"
          >
            <div className="p-6 space-y-4">
              <Link
                to="/"
                className="block rounded-lg px-3 py-2 text-text-dark transition-colors hover:bg-brand-50 hover:text-brand-700"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="block rounded-lg px-3 py-2 text-text-dark transition-colors hover:bg-brand-50 hover:text-brand-700"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="/story"
                className="block rounded-lg px-3 py-2 text-text-dark transition-colors hover:bg-brand-50 hover:text-brand-700"
                onClick={toggleMenu}
              >

                Our Story
              </Link>
              <Link
                to="/team"
                className="block rounded-lg px-3 py-2 text-text-dark transition-colors hover:bg-brand-50 hover:text-brand-700"
                onClick={toggleMenu}
              >
                Our Team
              </Link>
              <Link
                to="/impact"
                className="block rounded-lg px-3 py-2 text-text-dark transition-colors hover:bg-brand-50 hover:text-brand-700"
                onClick={toggleMenu}
              >
                Projects & Events
              </Link>
              <Link
                to="/gallery"
                className="block rounded-lg px-3 py-2 text-text-dark transition-colors hover:bg-brand-50 hover:text-brand-700"
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
