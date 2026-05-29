import { motion } from 'framer-motion';

const ImageCard = ({ src, alt, caption, className = '', aspectRatio = 'aspect-[4/5]' }) => {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl ${aspectRatio} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      {caption && (
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p className="text-white text-sm font-semibold">{caption}</p>
        </div>
      )}
    </motion.div>
  );
};

export default ImageCard;
