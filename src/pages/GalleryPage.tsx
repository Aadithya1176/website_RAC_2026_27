import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { API_BASE_URL } from '../config';
import { projects as staticProjects } from '../data/projects';

const GalleryPage = () => {
  const [photos, setPhotos] = useState<any[]>([]);
  const [projectCount] = useState(staticProjects.length);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Fetch gallery images from backend
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/gallery`);
        const data = await response.json();

        // Map backend gallery to photo format
        const galleryPhotos = data.map((img: any) => ({
          src: `${API_BASE_URL}/gallery-uploads/${img.filename}`,
          title: img.title
        }));

        setPhotos(galleryPhotos);
      } catch (error) {
        console.log('Backend not available, using default gallery');
        setPhotos(defaultPhotos);
      }
    };

    fetchGallery();
  }, []);

  // Default gallery photos (fallback)
  const defaultPhotos = [
    { src: "/gallery/WhatsApp Image 2025-08-11 at 23.23.53_d9a3a398.jpg", title: "Gallery" },
    { src: "/gallery/IMG-20250811-WA0090.jpg", title: "Gallery" },
    { src: "/uploads/20250809_133106.jpg", title: "Gallery" },
    { src: "/uploads/20251019_115005 (1).jpg", title: "Gallery" },
    { src: "/uploads/Copy of IMG_1433.JPG", title: "Gallery" },
    { src: "/uploads/d2.jpeg", title: "Gallery" },
    { src: "/uploads/IMG_0119.JPG", title: "Gallery" },
    { src: "/uploads/IMG_3163.JPG", title: "Gallery" },
    { src: "/uploads/IMG-20250706-WA0149.jpg", title: "Gallery" },
    { src: "/uploads/IMG-20251104-WA0016 (1).jpg", title: "Gallery" },
    { src: "/uploads/IMG-20251104-WA0023.jpg", title: "Gallery" },
    { src: "/uploads/Screenshot 2025-11-30 163046.png", title: "Gallery" },
    { src: "/uploads/Untitled design (5)-min.png", title: "Gallery" },
    { src: "/uploads/WhatsApp Image 2025-11-25 at 6.23.19 PM.jpeg", title: "Gallery" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="section-padding-top pt-40 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A visual journey through our impactful projects, memorable events, and the amazing people who make it all possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-brand-50">
        <div className="container-custom">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-text-dark mb-2">
                Capturing Moments of Impact
              </h2>
              <p className="text-gray-600">
                Explore our collection of memorable moments
              </p>
            </div>
          </motion.div>

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
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedImage(photo.src)}
              >
                <img
                  src={photo.src}
                  alt={photo.title || 'Gallery image'}
                  loading={index < 8 ? "eager" : "lazy"}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Gallery Stats */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="mb-2 text-3xl font-bold text-brand">
                  {photos.length}+
                </div>
                <p className="text-gray-600">Memorable Moments</p>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-brand-700">
                  {projectCount}+
                </div>
                <p className="text-gray-600">Events Captured</p>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-brand">
                  150+
                </div>
                <p className="text-gray-600">Smiles Shared</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Lightbox */}
      {selectedImage && (
        <div
          className="lightbox-backdrop"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="lightbox-image"
            />
          </div>
        </div>
      )}

      <style>{`
        .gallery-masonry {
          column-count: 1;
          column-gap: 16px;
        }

        @media (min-width: 640px) {
          .gallery-masonry {
            column-count: 2;
          }
        }

        @media (min-width: 768px) {
          .gallery-masonry {
            column-count: 3;
          }
        }

        @media (min-width: 1024px) {
          .gallery-masonry {
            column-count: 4;
          }
        }

        .gallery-item {
          break-inside: avoid;
          margin-bottom: 16px;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
        }

        .gallery-item img {
          width: 100%;
          display: block;
          transition: transform 0.3s ease-in-out;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }

        /* Lightbox Styles */
        .lightbox-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 2rem;
          cursor: pointer;
        }

        .lightbox-close {
          position: fixed;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid white;
          color: white;
          font-size: 2rem;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10001;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .lightbox-close:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: rotate(90deg);
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
          border-radius: 8px;
          box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;
