import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects as staticProjects } from '../data/projects';

const ImpactPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const formattedProjects = staticProjects.map((p: any) => ({
      id: p.id,
      title: p.title,
      date: p.eventDate || (p.createdAt ? new Date(p.createdAt).toLocaleDateString('en-GB').replace(/\//g, '-') : 'Recent'),
      location: p.venue || 'RACREC',
      description: p.oneLiner || p.description,
      image: p.image || '/default-image.jpg',
      category: p.avenue,
      details: p.description,
      isSignature: p.isSignature,
      status: p.status,
    }));
    setProjects(formattedProjects);
    setLoading(false);
  }, []);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'club', label: 'Club Service' },
    { id: 'community', label: 'Community Service' },
    { id: 'international', label: 'International Service' },
    { id: 'professional', label: 'Professional Service' },
  ];

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <section className="section-shell editorial-dark section-padding-top">
        <div className="container-custom">
          <p className="section-kicker mb-4">Our Impact</p>
          <h1 className="font-serif text-5xl leading-[0.94] text-white md:text-7xl">
            Projects documented with clarity, not clutter.
          </h1>
        </div>
      </section>

      <section className="section-shell section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="mb-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-brand text-white shadow-soft'
                    : 'border border-border bg-surface text-ink-soft hover:border-gold-300 hover:text-brand'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {loading && <div className="py-12 text-center text-ink-soft">Loading projects...</div>}

          {!loading && (
            <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3" layout>
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={`${activeFilter}-${project.id}`}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                  >
                    <ProjectCard {...project} priority={index < 3} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {!loading && filteredProjects.length === 0 && (
            <motion.div className="py-12 text-center text-lg text-ink-soft" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              No projects found for the selected category.
            </motion.div>
          )}
        </div>
      </section>

      <section className="section-shell section-padding bg-background">
        <div className="container-custom">
          <div className="mb-14 text-center">
            <p className="section-kicker mb-3">Summary</p>
            <h2 className="section-title">A snapshot of collective achievement.</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { number: projects.length, label: 'Total Projects' },
              { number: 5000, label: 'Lives Impacted' },
              { number: 49, label: 'Volunteers' },
              { number: 15, label: 'Years in Service' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="editorial-panel p-7 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="font-serif text-5xl text-brand">{stat.number}+</div>
                <p className="mt-3 text-sm uppercase tracking-[0.22em] text-ink-soft">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;
