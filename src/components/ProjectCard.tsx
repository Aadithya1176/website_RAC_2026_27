import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCalendar, FiMapPin } from 'react-icons/fi';

interface ProjectCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  details?: string;
  gallery?: string[];
  priority?: boolean;
}

const ProjectCard = ({
  title,
  date,
  location,
  description,
  image,
  details,
  gallery,
  priority = false,
}: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <motion.div
        className="card-surface group cursor-pointer overflow-hidden"
        whileHover={{ y: -6 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
          <div className="absolute inset-x-5 top-5 z-10 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
          <img
            src={image}
            alt={title}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'low'}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>

        <div className="space-y-4 p-6">
          <div className="flex items-center justify-between gap-4">
            <span className="section-kicker">Project</span>
            <span className="text-xs uppercase tracking-[0.24em] text-ink-muted">Open story</span>
          </div>

          <h3 className="font-serif text-3xl font-semibold leading-none text-text-dark">{title}</h3>

          <div className="flex items-center text-sm text-ink-soft">
            <FiCalendar className="mr-2 h-4 w-4 text-gold-500" />
            <span>{date}</span>
          </div>

          <div className="flex items-center text-sm text-ink-soft">
            <FiMapPin className="mr-2 h-4 w-4 text-gold-500" />
            <span>{location}</span>
          </div>

          <p className="line-clamp-3 text-sm leading-relaxed text-ink-soft">{description}</p>

          <button className="font-semibold text-brand transition-colors hover:text-gold-500">
            Learn More
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-brand-950/75 p-4 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative my-8 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-gold-300/25 bg-surface shadow-editorial"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img src={image} alt={title} className="h-auto w-full rounded-t-[28px]" />
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-surface text-brand-950 shadow-soft transition-colors hover:bg-gold-300"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-5 p-7">
                <span className="section-kicker">Project Story</span>
                <h2 className="font-serif text-4xl font-semibold leading-none text-text-dark">{title}</h2>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-soft">
                  <FiCalendar className="h-4 w-4 text-gold-500" />
                  <span>{date}</span>
                  <span className="text-gold-500">•</span>
                  <FiMapPin className="h-4 w-4 text-gold-500" />
                  <span>{location}</span>
                </div>

                <p className="leading-relaxed text-ink-soft">{description}</p>

                {details && (
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-semibold text-text-dark">Event Details</h3>
                    <p className="leading-relaxed text-ink-soft">{details}</p>
                  </div>
                )}

                {gallery && gallery.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl font-semibold text-text-dark">Event Gallery</h3>
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                      {gallery.slice(0, 6).map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${title} gallery ${index + 1}`}
                          className="h-24 w-full cursor-pointer rounded-2xl object-cover transition-opacity hover:opacity-80"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(img);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {selectedImage && (
        <div className="lightbox-backdrop" onClick={() => setSelectedImage(null)}>
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged view" className="lightbox-image" />
          </div>
        </div>
      )}

      <style>{`
        .lightbox-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(1, 31, 38, 0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 2rem;
          cursor: pointer;
          backdrop-filter: blur(12px);
        }

        .lightbox-close {
          position: fixed;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(255, 253, 249, 0.16);
          border: 1px solid rgba(233, 180, 76, 0.7);
          color: white;
          font-size: 2rem;
          width: 3rem;
          height: 3rem;
          border-radius: 999px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10001;
          transition: all 0.3s ease;
        }

        .lightbox-close:hover {
          background: rgba(233, 180, 76, 0.22);
        }

        .lightbox-content {
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: default;
        }

        .lightbox-image {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 20px;
          box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  );
};

export default ProjectCard;
