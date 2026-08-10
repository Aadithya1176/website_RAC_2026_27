import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUsers, FiAward, FiHeart, FiGlobe, FiArrowRight } from 'react-icons/fi';
import AnimatedCounter from '../components/AnimatedCounter';
import { projects } from '../data/projects';

const FLAGSHIP_PROJECTS = [
  { image: '/gallery/food_donation.png', text: 'Anna Vriksha', tilt: -7 },
  { image: '/gallery/udhiram.png', text: 'UDHIRAM', tilt: 5 },
  { image: '/gallery/victo_ryla.png', text: 'Victo RYLA', tilt: -4 },
];

export default function HomePage() {
  const heroImages = [
    '/gallery/WhatsApp Image 2025-08-11 at 23.23.53_d9a3a398.jpg',
    '/gallery/IMG_3163.JPG',
    '/gallery/IMG-20250811-WA0090.jpg',
  ];

  const [heroIndex, setHeroIndex] = useState(0);
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    setProjectCount(projects.length);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [heroImages.length]);

  const testimonials = [
    {
      name: 'Bhavanishraj',
      role: 'President 2024-25',
      quote:
        'Rotaract strengthened my ability to handle pressure, communicate confidently through public speaking, lead with responsibility and manage teams effectively.',
    },
    {
      name: 'Rethinaath',
      role: 'Vice President 2024-25',
      quote:
        'Rotaract club of REC is the biggest milestone in my life. The work we did opened new windows and set the path for my future.',
    },
    {
      name: 'Shrinidhi',
      role: 'Secretary 2025-2026',
      quote:
        'My Rotaract journey has been one of the most beautiful and transformative chapters of my life. It shaped me into the person I am today, giving me the strength, confidence, courage, and ability to stand up for myself and others. As a Secretary, I learnt that true leadership is not about a position, but about people, responsibility and growing together. Rotaract gave me friendships that turned into family, memories that will stay forever and lessons that I will carry throughout my life.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="section-shell editorial-dark relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt="Hero Background"
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                i === heroIndex ? 'opacity-70' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/92 via-brand-950/55 to-brand-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-brand-950/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,180,76,0.15),transparent_22%)]" />
        </div>

        <div className="container-custom relative z-10 grid items-end gap-14 py-28 lg:grid-cols-[1.35fr_0.65fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl hero-text-shadow"
          >
            <p className="section-kicker mb-6">Rotaract Club of REC</p>
            <h1 className="font-serif text-5xl leading-[0.92] text-white md:text-7xl lg:text-[6.2rem]">
              Driven by service.
              <br />
              Defined by impact.
            </h1>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-slate-200 md:text-xl">
              <p>
                A youth-led movement shaping leaders, building fellowship, and delivering measurable
                community action through the Rotaract Club of Rajalakshmi Engineering College.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/impact" className="btn-primary">
                Explore Our Projects
              </Link>
              <Link to="/team" className="btn-secondary text-white">
                Meet the Team
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="editorial-panel border-white/15 bg-brand-950/45 p-8 text-white backdrop-blur-md"
          >
            <div className="mb-6 flex items-center justify-between">
              <img src="/club_logo_1_1.png" alt="RACREC logo" className="h-20 w-20 object-contain" />
              <span className="section-kicker">Annual Outlook</span>
            </div>
            <div className="gold-divider mb-5" />
            <p className="font-serif text-3xl leading-tight">
              Leadership, fellowship, and service woven into one evolving campus story.
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-200">
              Every initiative is designed to feel human, credible, and lasting, from flagship blood
              donation drives to professional development and community outreach.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-center gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setHeroIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === heroIndex ? 'w-12 bg-gold-300' : 'w-5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="section-shell section-padding bg-background">
        <div className="container-custom">
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-kicker mb-3">Community at a glance</p>
              <h2 className="section-title max-w-3xl">A student movement built on visible, measurable work.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-ink-soft">
              We believe credibility comes from consistency. The numbers below are not decoration,
              but signals of how seriously the club approaches service, leadership, and participation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { icon: FiUsers, number: 50, label: 'Active members' },
              { icon: FiAward, number: projectCount, label: 'Projects completed' },
              { icon: FiHeart, number: 5000, label: 'Lives impacted' },
              { icon: FiGlobe, number: 4, label: 'Avenues of service' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="editorial-panel p-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <item.icon className="mb-6 h-8 w-8 text-brand" />
                <div className="mb-3 flex items-baseline gap-1 font-serif text-5xl text-text-dark">
                  <AnimatedCounter end={item.number} />
                  <span>+</span>
                </div>
                <p className="text-sm uppercase tracking-[0.22em] text-ink-soft">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-padding bg-white">
        <div className="container-custom">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="section-kicker mb-3">Flagship initiatives</p>
              <h2 className="section-title">Projects framed as the public face of our impact.</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-ink-soft">
              The imagery remains untouched and central. We’ve simply given each project a stronger
              editorial frame so the work feels documented with clarity and pride.
            </p>
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-y-14 py-8 sm:flex-nowrap sm:-space-x-10"
            style={{ perspective: '1800px' }}
          >
            {FLAGSHIP_PROJECTS.map((project, index) => (
              <motion.article
                key={project.text}
                className="group relative w-64 flex-shrink-0 cursor-pointer sm:w-72"
                style={{ transformStyle: 'preserve-3d', transformPerspective: 1800, zIndex: index }}
                initial={{ opacity: 0, y: 40, rotate: project.tilt }}
                whileInView={{ opacity: 1, y: 0, rotate: project.tilt }}
                whileHover={{
                  rotate: 0,
                  rotateY: -22,
                  y: -28,
                  scale: 1.06,
                  zIndex: 30,
                }}
                whileTap={{ rotate: 0, rotateY: -22, y: -28, scale: 1.06, zIndex: 30 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: 'spring', stiffness: 240, damping: 22 }}
              >
                <div
                  className="card-surface relative overflow-hidden p-3 shadow-editorial"
                  style={{ transformOrigin: 'left center' }}
                >
                  <div className="relative h-72 overflow-hidden rounded-[20px] border border-gold-300/35 md:h-80">
                    <img src={project.image} alt={project.text} className="h-full w-full object-cover" />
                    {/* page-fold shadow that appears as the card lifts, mimicking a turning page */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <h3 className="font-serif text-xl italic text-text-dark">{project.text}</h3>
                  <FiArrowRight className="h-4 w-4 text-gold-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/impact" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell section-padding editorial-dark">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker mb-3">Member voices</p>
            <h2 className="font-serif text-5xl leading-none text-white md:text-6xl">What this journey feels like from the inside.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-200">
              Beyond metrics and milestones, the club is remembered for the confidence it builds and the
              relationships it leaves behind.
            </p>
          </div>

          <div className="space-y-6">
            <motion.blockquote
              className="editorial-panel border-white/10 bg-white/8 p-8 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-serif text-4xl leading-tight text-teal-300">
                “{testimonials[0].quote}”
              </p>
              <footer className="mt-6 text-sm uppercase tracking-[0.24em] text-gold-300">
                {testimonials[0].name} · {testimonials[0].role}
              </footer>
            </motion.blockquote>

            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.slice(1).map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="rounded-[24px] border border-white/10 bg-white/6 p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <p className="font-serif text-2xl leading-snug text-white">“{testimonial.quote}”</p>
                  <p className="mt-5 text-sm uppercase tracking-[0.22em] text-gold-300">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">{testimonial.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
