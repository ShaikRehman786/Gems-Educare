import RevealOnScroll from './RevealOnScroll';

const SectionHeading = ({ subtitle, title, description, light = false, center = true }) => {
  return (
    <RevealOnScroll>
      <div className={`${center ? 'text-center' : ''} mb-12 md:mb-16`}>
        {subtitle && (
          <span className={`font-bold tracking-[0.2em] text-[10px] uppercase mb-4 inline-block ${light ? 'text-accent' : 'text-accent'}`}>
            {subtitle}
          </span>
        )}
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-primary'}`}>
          {title}
        </h2>
        {description && (
          <p className={`mt-5 max-w-2xl ${center ? 'mx-auto' : ''} text-base md:text-lg leading-relaxed ${light ? 'text-white/60' : 'text-text-secondary'}`}>
            {description}
          </p>
        )}
      </div>
    </RevealOnScroll>
  );
};

export default SectionHeading;
