import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { API_BASE_URL } from '../config';
import { projects as staticProjects } from '../data/projects';

const GalleryPage = () => {
  const [photos, setPhotos] = useState<any[]>([]);
  const [projectCount] = useState(staticProjects.length);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const defaultPhotos = [
    { src: '/gallery/WhatsApp Image 2025-08-11 at 23.23.53_d9a3a398.jpg', title: 'Gallery' },
    { src: '/gallery/IMG-20250811-WA0090.jpg', title: 'Gallery' },
    { src: '/uploads/20250809_133106.jpg', title: 'Gallery' },
    { src: '/uploads/20251019_115005 (1).jpg', title: 'Gallery' },
    { src: '/uploads/Copy of IMG_1433.JPG', title: 'Gallery' },
    { src: '/uploads/d2.jpeg', title: 'Gallery' },
    { src: '/uploads/IMG_0119.JPG', title: 'Gallery' },
    { src: '/uploads/IMG_3163.JPG', title: 'Gallery' },
    { src: '/uploads/IMG-20250706-WA0149.jpg', title: 'Gallery' },
    { src: '/uploads/IMG-20251104-WA0016 (1).jpg', title: 'Gallery' },
    { src: '/uploads/IMG-20251104-WA0023.jpg', title: 'Gallery' },
    { src: '/uploads/Screenshot 2025-11-30 163046.png', title: 'Gallery' },
    { src: '/uploads/Untitled design (5)-min.png', title: 'Gallery' },
    { src: '/uploads/WhatsApp Image 2025-11-25 at 6.23.19 PM.jpeg', title: 'Gallery' },
  ];

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/gallery`);
        const data = await response.json();
        const galleryPhotos = data.map((img: any) => ({
          src: `${API_BASE_URL}/gallery-uploads/${img.filename}`,
          title: img.title,
        }));

        setPhotos(galleryPhotos);
      } catch (error) {
        console.log('Backend not available, using default gallery');
        setPhotos(defaultPhotos);
      }
    };

    fetchGallery();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="section-shell editorial-dark section-padding-top">
        <div className="container-custom grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="section-kicker mb-4">Gallery</p>
            <h1 className="font-serif text-5xl leading-[0.94] text-white md:text-7xl">
              A visual archive of fellowship, service, and momentum.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-200">
            The gallery now reads like a documented field record, with breathing room, stronger image
            framing, and cleaner contrast around high-photo sections.
          </p>
        </div>
      </section>

      <section className="section-shell section-padding bg-white">
        <div className="container-custom">
          <div className="mb-10 text-center">
            <p className="section-kicker mb-3">Captured Moments</p>
            <h2 className="section-title">Moments that show the club in motion.</h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="gallery-masonry"
          >
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                onClick={() => setSelectedImage(photo.src)}
              >
                <img src={photo.src} alt={photo.title || 'Gallery image'} loading={index < 8 ? 'eager' : 'lazy'} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { value: `${photos.length}+`, label: 'Memorable Moments' },
              { value: `${projectCount}+`, label: 'Events Captured' },
              { value: '150+', label: 'Smiles Shared' },
            ].map((stat) => (
              <div key={stat.label} className="editorial-panel p-7 text-center">
                <div className="font-serif text-5xl text-brand">{stat.value}</div>
                <p className="mt-3 text-sm uppercase tracking-[0.22em] text-ink-soft">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox-backdrop" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close">
            ×
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged view" className="lightbox-image" />
          </div>
        </div>
      )}

      <style>{`
        .gallery-masonry {
          column-count: 1;
          column-gap: 20px;
        }

        @media (min-width: 640px) {
          .gallery-masonry {
            column-count: 2;
          }
        }

        @media (min-width: 1024px) {
          .gallery-masonry {
            column-count: 3;
          }
        }

        .gallery-item {
          break-inside: avoid;
          margin-bottom: 20px;
          overflow: hidden;
          border-radius: 24px;
          border: 1px solid rgba(215, 203, 184, 0.7);
          background: #fffdf9;
          padding: 10px;
          box-shadow: 0 18px 60px rgba(1, 31, 38, 0.08);
          cursor: pointer;
        }

        .gallery-item img {
          width: 100%;
          display: block;
          border-radius: 18px;
          transition: transform 0.5s ease-in-out;
        }

        .gallery-item:hover img {
          transform: scale(1.03);
        }

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
          z-index: 9999;
          padding: 2rem;
          cursor: pointer;
          backdrop-filter: blur(12px);
        }

        .lightbox-close {
          position: fixed;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(255, 253, 249, 0.12);
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
    </div>
  );
};

export default GalleryPage;
