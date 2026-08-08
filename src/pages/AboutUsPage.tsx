import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const AboutUsPage = () => {
  const sections = [
    {
      title: 'Rotaract Club of REC',
      content:
        'The Rotaract Club of Rajalakshmi Engineering College, sponsored by the Rotary Club of Chennai K.K. Nagar, is dedicated to fostering leadership, service, and fellowship among its members. As part of Rotary International and Rotary District 3233, the club engages in community service projects, professional development activities, and international initiatives.',
      image: '/branding/REC AND RACREC.png',
      link: 'https://www.rajalakshmi.org/',
      linkText: 'Rajalakshmi Website',
    },
    {
      title: 'Rotary District 3233',
      content:
        'Rotary District 3233 is a dynamic hub of service, leadership, and fellowship based in Chennai. The district combines experienced Rotarians and an active Rotaract constituency to deliver targeted community programs while fostering innovation, membership growth, and impactful partnerships.',
      image: '/branding/rotary_district_3233.png',
      link: 'https://rid3233.rotaryindia.org/',
      linkText: 'Rotary 3233 Website',
    },
    {
      title: 'Rotaract District 3233',
      content:
        'Rotaract 3233 stands as a network of youth-led clubs committed to fellowship, personal growth, and service above self. With a wide range of talent and strong district participation, it enables collaboration, leadership, and meaningful humanitarian action across the region.',
      image: '/branding/rotaract_district_3233.png',
      link: 'https://www.rotaract3233.com/index.php',
      linkText: 'Rotaract 3233 Website',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="section-shell editorial-dark relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/gallery/IMG_3163.JPG" alt="Hero Background" className="h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/55 to-brand-950/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,180,76,0.15),transparent_22%)]" />
        </div>

        <motion.div
          className="container-custom relative z-10 text-white hero-text-shadow"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-kicker mb-5">About Us</p>
          <h1 className="max-w-5xl font-serif text-5xl leading-[0.92] md:text-7xl">
            An editorial portrait of our club, district, and larger service ecosystem.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200">
            We are a student-led club, but our story lives inside a much larger network of service,
            fellowship, and institutional legacy.
          </p>
        </motion.div>
      </section>

      <section className="section-shell section-padding bg-white">
        <div className="container-custom space-y-24">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className={`grid gap-10 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="editorial-panel p-6">
                <div className={`rounded-[22px] bg-surface-subtle ${section.title === 'Rotaract Club of REC' ? 'p-3' : 'p-8'}`}>
                  <img src={section.image} alt={section.title} className="w-full rounded-[16px] object-contain" />
                </div>
              </div>

              <div>
                <p className="section-kicker mb-3">{index + 1 < 10 ? `0${index + 1}` : index + 1}</p>
                <h2 className="font-serif text-5xl font-semibold text-text-dark">{section.title}</h2>
                <div className="gold-divider my-6" />
                <p className="max-w-2xl text-lg leading-8 text-ink-soft">{section.content}</p>
                <div className="mt-8">
                  <a
                    href={section.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-brand px-7 py-4 font-semibold text-white transition-colors hover:bg-brand-800"
                  >
                    <span>{section.linkText}</span>
                    <FiExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
