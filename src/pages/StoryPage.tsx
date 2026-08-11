import { motion } from 'framer-motion';
import { BiSolidDonateBlood, BiSolidUser } from 'react-icons/bi';
import { BsAwardFill, BsFillHeartFill, BsFillLightbulbFill, BsGraphUpArrow } from 'react-icons/bs';
import { FiCalendar, FiAward, FiHeart, FiEye, FiVideo } from 'react-icons/fi';

const StoryPage = () => {
  const timeline = [
    {
      year: '2010',
      title: 'Foundation',
      description:
        'The club was founded with a vision to empower young leaders, marking its inception with the initiation of its signature blood donation camp.',
      icon: FiHeart,
    },
    {
      year: '2011',
      title: 'Charter Year',
      description:
        'Chartered in 2011, the club has consistently upheld Rotary’s values through impactful service initiatives.',
      icon: FiCalendar,
    },
    {
      year: '2015',
      title: 'Vision Awareness',
      description:
        'Adhigathur village situated nearby was adopted by the Rotaract. An eye check up camp and eye donation awareness camp were organized.',
      icon: FiEye,
    },
    {
      year: '2019',
      title: 'Recognition',
      description:
        'The club received the Rotary Citation with Platinum Distinction for outstanding community service and service excellence.',
      icon: FiAward,
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Adapted to virtual platforms and continued serving during challenging times.',
      icon: FiVideo,
    },
    {
      year: '2024',
      title: 'Blood Donation',
      description: 'The club has collected over 1500 units of blood marking a major milestone.',
      icon: BiSolidDonateBlood,
    },
    {
      year: '2025',
      title: 'Continued Growth',
      description: 'The club is actively growing and contributing towards the community.',
      icon: BsGraphUpArrow,
    },
    {
      year: '2026',
      title: '2nd Top most Engineering College by MVBB',
      description: 'Recognized by MVBB among the top engineering colleges.',
      icon: FiAward,
    },
    {
      year: '2026',
      title: 'Sardar Surjit Singh Sahney Memorial Award for Highest number of blood donations in the district',
      description: 'Honored for recording the highest number of blood donations in the district.',
      icon: FiAward,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="section-shell editorial-dark relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/gallery/WhatsApp Image 2025-08-11 at 23.23.53_d9a3a398.jpg"
            alt="Story Background"
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/50 to-brand-950/25" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,180,76,0.15),transparent_22%)]" />
        </div>

        <motion.div
          className="relative z-10 container-custom text-center text-white hero-text-shadow"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-kicker mb-5">Our Story</p>
          <h1 className="font-serif text-5xl leading-[0.92] md:text-7xl">A history of service shaped by each passing year.</h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-200">
            From humble beginnings to enduring community leadership, the story of RACREC is a record
            of students choosing purpose, action, and shared responsibility.
          </p>
        </motion.div>
      </section>

      <section className="section-shell section-padding bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <motion.div
            className="editorial-panel p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-kicker mb-3">Mission</p>
            <h2 className="mb-4 font-serif text-4xl font-semibold text-text-dark">Building leaders through meaningful action.</h2>
            <p className="leading-8 text-ink-soft">
              To drive service-oriented action, professional development, and collaborative leadership.
              We empower members to build essential skills, engage in high-impact initiatives, and use
              Rotary’s network to transform ideas into measurable community results.
            </p>
          </motion.div>

          <motion.div
            className="editorial-panel bg-surface-subtle p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-kicker mb-3">Vision</p>
            <h2 className="mb-4 font-serif text-4xl font-semibold text-text-dark">A generation that acts locally and thinks beyond itself.</h2>
            <p className="leading-8 text-ink-soft">
              We envision a movement where youth go beyond checking boxes, create practical solutions,
              and grow personally and professionally while shaping sustainable change in the communities
              they serve.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-shell section-padding editorial-dark">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <p className="section-kicker mb-3">Timeline</p>
            <h2 className="font-serif text-5xl text-white md:text-6xl">Our journey in milestones.</h2>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-5 top-0 h-full w-px bg-gold-300/70 md:left-1/2" />

            <div className="space-y-10">
              {timeline.map((item, index) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  className={`relative grid gap-6 md:grid-cols-2 ${index % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className={`${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-14`}>
                    <div className="rounded-[26px] border border-white/10 bg-white/6 p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <item.icon className="h-5 w-5 text-gold-300" />
                        <span className="font-serif text-4xl text-gold-300">{item.year}</span>
                      </div>
                      <h3 className="mb-2 text-2xl font-semibold text-white">{item.title}</h3>
                      <p className="leading-7 text-slate-200">{item.description}</p>
                    </div>
                  </div>
                  <div />
                  <div className="absolute left-5 top-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-gold-300 bg-brand-950 md:left-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-padding bg-background">
        <div className="container-custom">
          <div className="mb-14 max-w-3xl">
            <p className="section-kicker mb-3">Core values</p>
            <h2 className="section-title">The principles behind every event, project, and partnership.</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Service Above Self',
                description: 'We prioritize the needs of others and the community above personal interests.',
                icon: BsFillHeartFill,
              },
              {
                title: 'Leadership Development',
                description: 'We nurture and develop leadership skills in every member.',
                icon: BsAwardFill,
              },
              {
                title: 'Integrity',
                description: 'We maintain the highest standards of honesty and ethical behavior.',
                icon: BiSolidUser,
              },
              {
                title: 'Innovation',
                description: 'We embrace new ideas and creative solutions to address challenges.',
                icon: BsFillLightbulbFill,
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="editorial-panel p-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-serif text-3xl font-semibold text-text-dark">{value.title}</h3>
                <p className="leading-7 text-ink-soft">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoryPage;
