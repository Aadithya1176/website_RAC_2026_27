import { Link } from 'react-router-dom';
import { FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-brand-950 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/club_logo_1_1.png"
                alt="Rotaract club of rec logo"
                className="w-12 h-12 object-contain"
              />
              <span className="font-bold text-xl">Rotaract REC</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Empowering leaders and serving communities through meaningful initiatives and impactful projects at Rajalakshmi Engineering College.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 transition-colors hover:text-brand-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-slate-300 transition-colors hover:text-brand-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/story" className="text-slate-300 transition-colors hover:text-brand-200">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-slate-300 transition-colors hover:text-brand-200">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-slate-300 transition-colors hover:text-brand-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-300 transition-colors hover:text-brand-200">
                  Gallery
                </Link>
              </li>
              <li>
                <a href="/old_site/index.html" target="_blank" rel="noopener noreferrer" className="text-slate-300 transition-colors hover:text-brand-200">
                  Old Website
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiPhoneCall className="w-5 h-5 text-brand-300" />
                <p className="text-slate-300 text-sm">
                  +91 9176163275
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-brand-300" />
                <a
                  href="mailto:rotaract@rajalakshmi.edu.in"
                  className="text-slate-300 transition-colors hover:text-brand-200"
                >
                  rotaract@rajalakshmi.edu.in
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FiMapPin className="mt-1 w-5 h-5 text-brand-300" />
                <div className="text-slate-300 text-sm">
                  <p>Rajalakshmi Engineering College</p>
                  <p>Chennai, Tamil Nadu</p>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Follow Us */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://chat.whatsapp.com/EzRToM7mFcRBHNdfvJzis4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors duration-300 hover:bg-brand-900"
              >
                <BsWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/rotaractrec/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors duration-300 hover:bg-brand-900"
              >
                <FiInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/rotaract-rec/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors duration-300 hover:bg-brand-900"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
            </div>
            <p className="text-slate-300 text-sm">
              Stay updated with our latest initiatives and events.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-300 text-sm">
              © 2025 Rotaract Club of REC
            </p>
            <p className="mt-2 text-slate-300 text-sm md:mt-0">
              Powered by passion, driven by purpose.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
