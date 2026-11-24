import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCalendar, FiMapPin } from 'react-icons/fi';

interface ProjectCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  details?: string;
  priority?: boolean;
  chairperson?: string;
  focusArea?: string;
  membersAttended?: number;
  beneficiaries?: number;
  manHours?: number;
}

const ProjectCard = ({
  title,
  date,
  location,
  description,
  image,
  details,
  priority = false,
  chairperson,
  focusArea,
  membersAttended,
  beneficiaries,
  manHours,
}: ProjectCardProps) => {
  const stats = [
    { label: 'Members Attended', value: membersAttended },
    { label: 'Beneficiaries', value: beneficiaries },
    { label: 'Man Hours', value: manHours },
  ].filter((s) => s.value !== undefined);
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

          {/* -my-2/py-2 enlarges the tap area without shifting the card layout */}
          <button className="-my-2 py-2 font-semibold text-brand transition-colors hover:text-gold-500">
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Portal to <body> so the overlay isn't trapped by transformed (animated) ancestors */}
      {createPortal(
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-950/75 p-4 backdrop-blur-sm md:p-8"
            onClick={(e) => {
              // React events bubble through portals to the card, which would reopen the modal
              e.stopPropagation();
              setIsModalOpen(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative grid max-h-[calc(100dvh-2rem)] w-full max-w-5xl overflow-hidden rounded-[28px] border border-gold-300/25 bg-surface shadow-editorial md:max-h-[calc(100dvh-4rem)] md:min-h-[440px] md:grid-cols-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Full, uncropped photo; a blurred copy fills the letterbox space behind it */}
              <div className="relative flex items-center justify-center overflow-hidden bg-brand-950">
                <img
                  src={image}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-50 blur-2xl"
                />
                <img
                  src={image}
                  alt={title}
                  className="relative max-h-[38dvh] w-full cursor-zoom-in object-contain md:absolute md:inset-0 md:h-full md:max-h-none"
                  onClick={() => setSelectedImage(image)}
                />
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-surface text-brand-950 shadow-soft transition-colors hover:bg-gold-300"
              >
                <FiX className="h-5 w-5" />
              </button>

              {/* Mobile-only scroll fallback for very short screens; desktop fits without scrolling */}
              <div className="flex min-h-0 flex-col gap-4 overflow-y-auto p-6 md:overflow-hidden md:p-8 md:pr-16">
                <span className="section-kicker">Project Story</span>
                <h2 className="font-serif text-3xl font-semibold leading-none text-text-dark md:text-4xl">{title}</h2>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-soft">
                  <span className="flex items-center gap-2">
                    <FiCalendar className="h-4 w-4 shrink-0 text-gold-500" />
                    {date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiMapPin className="h-4 w-4 shrink-0 text-gold-500" />
                    {location}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-ink-soft">{details || description}</p>

                {(chairperson || focusArea) && (
                  <dl className="space-y-1 text-sm">
                    {chairperson && (
                      <div className="flex flex-wrap gap-x-2">
                        <dt className="font-semibold text-text-dark">Chairperson:</dt>
                        <dd className="text-ink-soft">{chairperson}</dd>
                      </div>
                    )}
                    {focusArea && (
                      <div className="flex flex-wrap gap-x-2">
                        <dt className="font-semibold text-text-dark">Focus Area:</dt>
                        <dd className="text-ink-soft">{focusArea}</dd>
                      </div>
                    )}
                  </dl>
                )}

                {stats.length > 0 && (
                  <div className="grid grid-cols-3 gap-3">
                    {stats.map((s) => (
                      <div key={s.label} className="rounded-2xl border border-border bg-surface-muted px-2 py-3 text-center">
                        <div className="font-serif text-2xl leading-none text-brand">{s.value}</div>
                        <div className="mt-1 text-[0.6rem] uppercase tracking-[0.08em] text-ink-soft sm:text-[0.65rem] sm:tracking-[0.16em]">{s.label}</div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}

      {selectedImage && createPortal(
        <div
          className="lightbox-backdrop"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedImage(null);
          }}
        >
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
        </div>,
        document.body
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
