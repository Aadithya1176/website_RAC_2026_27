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

const TeamMemberCard = ({ name, title, image, linkedin, instagram, imageClassName = '' }: TeamMemberCardProps) => {
  return (
    <motion.div
      className="card-surface group overflow-hidden"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${imageClassName}`}
        />

        {/* Social Media Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
          <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {linkedin && (
              <motion.a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors duration-300 hover:bg-brand hover:text-white"
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
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors duration-300 hover:bg-brand hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiInstagram className="w-5 h-5" />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg text-text-dark mb-1">{name}</h3>
        <p className="text-gray-600 text-sm">{title}</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard; 
