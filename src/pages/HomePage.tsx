import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUsers, FiAward, FiHeart, FiGlobe, FiArrowRight, FiBriefcase } from 'react-icons/fi';
import AnimatedCounter from '../components/AnimatedCounter';
import HeroParticles from '../components/HeroParticles';
import { projects } from '../data/projects';

const FLAGSHIP_PROJECTS = [
  { image: '/gallery/food_donation.png', text: 'Anna Vriksha', tilt: -7 },
  { image: '/gallery/udhiram.png', text: 'UDHIRAM', tilt: 5 },
  { image: '/gallery/victo_ryla.png', text: 'Victo RYLA', tilt: -4 },
];

const VALUE_WORDS = ['Service', 'Fellowship', 'Leadership', 'Growth', 'Community', 'Integrity'];

const AVENUES = [
  {
    icon: FiUsers,
    title: 'Club Service',
    copy: 'Strengthening our own fellowship, leadership pipeline, and internal culture.',
  },
  {
    icon: FiHeart,
    title: 'Community Service',
    copy: "Hands-on local action, from blood drives to clean-ups that meet real need.",
  },
  {
    icon: FiGlobe,
    title: 'International Service',
    copy: 'Connecting with Rotaract clubs worldwide and championing global causes.',
  },
  {
    icon: FiBriefcase,
    title: 'Professional Service',
    copy: 'Building career-ready skills through mentorship, workshops, and real exposure.',
  },
];

const HERO_FACTS = [
  { value: '50+', label: 'Active members driving the mission forward' },
  { value: '13+', label: 'Projects delivered so far this tenure' },
  { value: '5000+', label: 'Lives touched through direct service' },
];

const headlineContainer = (startDelay: number) => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: startDelay } },
});

const wordVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function AnimatedHeadline({ text, startDelay = 0 }: { text: string; startDelay?: number }) {
  return (
    <motion.span
      variants={headlineContainer(startDelay)}
      initial="hidden"
      animate="visible"
      className="inline-block"
    >
      {text.split(' ').map((word, i) => (
        <motion.span key={i} variants={wordVariant} className="mr-[0.28em] inline-block last:mr-0">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function HomePage() {
  const heroImages = [
    '/gallery/WhatsApp Image 2025-08-11 at 23.23.53_d9a3a398.jpg',
    '/gallery/IMG_3163.JPG',
    '/gallery/bg 1.jpg',
  ];

  const [heroIndex, setHeroIndex] = useState(0);
  const [factIndex, setFactIndex] = useState(0);
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % HERO_FACTS.length);
    }, 3200);
    return () => clearInterval(intervalId);
  }, []);

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
        'My Rotaract journey has been one of the most beautiful and transformative chapters of my life. It shaped me into the person I am today, giving me the strength, confidence, courage, and ability to stand up for myself and others.',
    },
  ];

  const statsData = [
    { icon: FiHeart, number: 5000, suffix: '+', label: 'Lives impacted', big: true },
    { icon: FiAward, number: projectCount, suffix: '+', label: 'Projects completed', wide: true },
    { icon: FiUsers, number: 50, suffix: '+', label: 'Active members' },
    { icon: FiGlobe, number: 4, suffix: '', label: 'Avenues of service' },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
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

        <div className="pointer-events-none absolute inset-0 z-[5]">
          <HeroParticles />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="editorial-panel absolute right-4 top-24 z-10 hidden w-72 border-white/15 bg-brand-950/45 p-7 text-white backdrop-blur-md sm:right-6 sm:top-28 md:block lg:right-10 lg:top-32 lg:w-80 lg:p-8"
        >
          <div className="mb-6 flex items-center justify-between">
            <img src="/club_logo_1_1.png" alt="RACREC logo" className="h-14 w-14 object-contain lg:h-16 lg:w-16" />
            <span className="section-kicker">This tenure</span>
          </div>
          <div className="gold-divider mb-5" />

          <AnimatePresence mode="wait">
            <motion.div
              key={factIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.5 }}
              className="min-h-[7.5rem]"
            >
              <p className="font-serif text-6xl leading-none text-gold-300">
                {HERO_FACTS[factIndex].value}
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-200">{HERO_FACTS[factIndex].label}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex gap-2">
            {HERO_FACTS.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === factIndex ? 'w-6 bg-gold-300' : 'w-1.5 bg-white/30'
                }`}
              />
            ))}
          </div>
        </motion.div>

        <div className="container-custom relative z-10 grid items-end gap-14 py-28">
          <div className="max-w-4xl hero-text-shadow">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-gold-300" />
              <p className="section-kicker">Rotaract Club of REC</p>
            </motion.div>

            <h1 className="font-serif text-5xl leading-[0.92] text-white md:text-7xl lg:text-[6.2rem]">
              <AnimatedHeadline text="Driven by service." startDelay={0.15} />
              <br />
              <AnimatedHeadline text="Defined by impact." startDelay={0.4} />
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-slate-200 md:text-xl"
            >
              <p>
                A youth-led movement shaping leaders, building fellowship, and delivering measurable
                community action through the Rotaract Club of Rajalakshmi Engineering College.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link to="/impact" className="btn-primary">
                Explore Our Projects
              </Link>
              <Link to="/team" className="btn-secondary text-white">
                Meet the Team
              </Link>
            </motion.div>
          </div>
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

      <div className="marquee-row overflow-hidden border-y border-gold-300/20 bg-brand-950 py-4">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {[...VALUE_WORDS, ...VALUE_WORDS, ...VALUE_WORDS, ...VALUE_WORDS].map((word, i) => (
            <span
              key={i}
              className="flex items-center gap-10 text-sm font-semibold uppercase tracking-[0.4em] text-gold-300/80"
            >
              {word}
              <span className="text-white/20">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section className="section-shell section-padding bg-background">
        <div className="container-custom">
          <div className="mb-14">
            <p className="section-kicker mb-3">Community at a glance</p>
            <h2 className="font-serif text-5xl font-semibold leading-[0.98] text-text-dark md:text-6xl lg:text-7xl">
              A student movement built on visible, measurable work.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {statsData.map((item, index) => {
              const spanClasses = item.big
                ? 'lg:col-span-2 lg:row-span-2'
                : item.wide
                ? 'sm:col-span-2 lg:col-span-2'
                : '';
              return (
                <motion.div
                  key={item.label}
                  className={`editorial-panel relative overflow-hidden p-7 ${spanClasses} ${
                    item.big ? 'flex flex-col justify-end bg-brand-950 text-white' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <item.icon className={`relative mb-6 h-8 w-8 ${item.big ? 'text-gold-300' : 'text-brand'}`} />
                  <div
                    className={`relative mb-3 flex items-baseline gap-1 font-serif ${
                      item.big ? 'text-6xl text-white' : 'text-5xl text-text-dark'
                    }`}
                  >
                    <AnimatedCounter end={item.number} />
                    <span>{item.suffix}</span>
                  </div>
                  <p
                    className={`relative text-sm uppercase tracking-[0.22em] ${
                      item.big ? 'text-slate-200' : 'text-ink-soft'
                    }`}
                  >
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell section-padding bg-white">
        <div className="container-custom">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="section-kicker mb-3">How we serve</p>
              <h2 className="section-title">Four avenues, one shared purpose.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-ink-soft md:text-xl md:leading-9">
              Every Rotaract initiative sits under one of four avenues of service, a framework that
              keeps our work purposeful, whether it's happening on campus or across the world.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-4">
            {AVENUES.map((avenue, index) => (
              <motion.div
                key={avenue.title}
                className="group relative bg-surface p-8 transition-colors duration-500 hover:bg-brand-950"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <span className="mb-8 block font-serif text-sm text-gold-500 transition-colors duration-500 group-hover:text-gold-300">
                  0{index + 1}
                </span>
                <avenue.icon className="mb-6 h-8 w-8 text-brand transition-colors duration-500 group-hover:text-gold-300" />
                <h3 className="mb-3 font-serif text-2xl text-text-dark transition-colors duration-500 group-hover:text-white">
                  {avenue.title}
                </h3>
                <p className="text-sm leading-6 text-ink-soft transition-colors duration-500 group-hover:text-slate-300">
                  {avenue.copy}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-padding bg-background">
        <div className="container-custom">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="section-kicker mb-3">Flagship initiatives</p>
              <h2 className="section-title">Projects framed as the public face of our impact.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-ink-soft md:text-xl md:leading-9">
              The imagery remains untouched and central. We've simply given each project a stronger
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

      <section className="section-shell section-padding editorial-dark overflow-hidden">
        <div className="container-custom mb-14">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="section-kicker mb-3">Member voices</p>
              <h2 className="font-serif text-5xl leading-none text-white md:text-6xl">
                What this journey feels like from the inside.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-slate-200 md:text-xl md:leading-9">
              Beyond metrics and milestones, the club is remembered for the confidence it builds and the
              relationships it leaves behind.
            </p>
          </div>
        </div>

        <div className="marquee-row overflow-hidden">
          <div className="marquee-track-slow flex w-max gap-6 px-4">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <blockquote
                key={`${testimonial.name}-${index}`}
                className="w-[320px] flex-shrink-0 rounded-[24px] border border-white/10 bg-white/6 p-7 sm:w-[400px]"
              >
                <p className="line-clamp-6 font-serif text-xl leading-snug text-white">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-6">
                  <p className="text-sm uppercase tracking-[0.22em] text-gold-300">{testimonial.name}</p>
                  <p className="mt-1 text-xs text-slate-400">{testimonial.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-padding relative overflow-hidden bg-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(rgba(2,80,99,0.18) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="container-custom relative">
          <motion.div
            className="editorial-panel mx-auto flex max-w-4xl flex-col items-center gap-8 p-10 text-center md:p-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-kicker">Join the movement</p>
            <h2 className="font-serif text-4xl leading-tight text-text-dark md:text-6xl">
              Ready to lead, serve, and grow with us?
            </h2>
            <p className="max-w-xl text-base leading-7 text-ink-soft">
              Whether you're looking to volunteer, partner on a project, or simply learn more about
              what we do, there's a place for you in the Rotaract Club of REC.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/impact" className="btn-primary">
                Explore Our Projects
              </Link>
              <Link
                to="/about-us"
                className="inline-flex items-center justify-center rounded-full border border-brand/30 px-6 py-3 font-semibold text-brand transition-all duration-500 hover:-translate-y-0.5 hover:border-brand hover:bg-brand/5"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
