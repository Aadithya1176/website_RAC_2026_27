import { motion } from 'framer-motion';
import { FiLinkedin, FiInstagram } from 'react-icons/fi';

interface TeamMemberCardProps {
  name: string;
  title: string;
  image: string;
  linkedin?: string;
  instagram?: string;
  imageClassName?: string;
}

const initials = (name: string) =>
  name
    .replace(/^Rtr\.\s*/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

const TeamMemberCard = ({ name, title, image, linkedin, instagram, imageClassName = '' }: TeamMemberCardProps) => {
  return (
    <motion.div
      className="card-surface group overflow-hidden"
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-muted">
        {image ? (
          <img
            src={image}
            alt={name}
            className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${imageClassName}`}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-brand-900">
            <span className="font-serif text-5xl text-gold-300">{initials(name)}</span>
          </div>
        )}
        <div className="absolute inset-x-5 top-5 h-px bg-gradient-to-r from-transparent via-gold-300/80 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-brand-950/55 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="flex space-x-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {linkedin && (
              <motion.a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-brand-900 transition-colors duration-300 hover:bg-gold-300 hover:text-brand-950"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
            )}
            {instagram && (
              <motion.a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-brand-900 transition-colors duration-300 hover:bg-gold-300 hover:text-brand-950"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiInstagram className="w-5 h-5" />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-2 p-5">
        <div className="gold-divider w-12" />
        <h3 className="text-xl font-semibold text-text-dark">{name}</h3>
        <p className="text-sm leading-relaxed text-ink-soft">{title}</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard; 
