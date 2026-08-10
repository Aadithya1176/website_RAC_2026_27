import { Link } from 'react-router-dom';
import { FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="editorial-dark relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <div className="flex items-center space-x-2">
              <img
                src="/club_logo_1_1.png"
                alt="Rotaract club of rec logo"
                className="h-12 w-12 object-contain"
              />
              <span className="font-serif text-3xl font-semibold">Rotaract REC</span>
            </div>
            <div className="gold-divider" />
            <p className="max-w-xs text-sm leading-relaxed text-slate-200">
              Empowering leaders and serving communities through meaningful initiatives and impactful
              projects at Rajalakshmi Engineering College.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-300 transition-colors hover:text-gold-300">Home</Link></li>
              <li><Link to="/about-us" className="text-slate-300 transition-colors hover:text-gold-300">About Us</Link></li>
              <li><Link to="/story" className="text-slate-300 transition-colors hover:text-gold-300">Our Story</Link></li>
              <li><Link to="/team" className="text-slate-300 transition-colors hover:text-gold-300">Our Team</Link></li>
              <li><Link to="/impact" className="text-slate-300 transition-colors hover:text-gold-300">Projects</Link></li>
              <li><Link to="/gallery" className="text-slate-300 transition-colors hover:text-gold-300">Gallery</Link></li>
              <li>
                <a
                  href="/old_site/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 transition-colors hover:text-gold-300"
                >
                  Old Website
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiPhoneCall className="h-5 w-5 text-gold-300" />
                <p className="text-sm text-slate-300">+91 9043367699</p>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="h-5 w-5 text-gold-300" />
                <a
                  href="mailto:rotaract@rajalakshmi.edu.in"
                  className="text-slate-300 transition-colors hover:text-gold-300"
                >
                  rotaract@rajalakshmi.edu.in
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FiMapPin className="mt-1 h-5 w-5 text-gold-300" />
                <div className="text-sm text-slate-300">
                  <p>Rajalakshmi Engineering College</p>
                  <p>Chennai, Tamil Nadu</p>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://chat.whatsapp.com/EzRToM7mFcRBHNdfvJzis4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors duration-300 hover:border-gold-300 hover:text-gold-300"
              >
                <BsWhatsapp className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/rotaractrec/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors duration-300 hover:border-gold-300 hover:text-gold-300"
              >
                <FiInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/rotaract-rec/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors duration-300 hover:border-gold-300 hover:text-gold-300"
              >
                <FiLinkedin className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm text-slate-300">Stay updated with our latest initiatives and events.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gold-300/20">
        <div className="container-custom py-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-slate-300">© 2026 Rotaract Club of REC</p>
            <p className="mt-2 text-sm text-slate-300 md:mt-0">Powered by passion, driven by purpose.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
