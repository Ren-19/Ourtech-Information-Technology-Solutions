import { motion } from 'framer-motion';
import { COMPANY } from '../utils/constants';

function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
      aria-label="Hero section"
    >
      {/* Animated OURTECH Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden="true">
        {/* Large animated logo as background */}
        <motion.img
          src="/Ourtech enhanced logo.png"
          alt=""
          className="absolute w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] md:w-[800px] md:h-[800px] lg:w-[900px] lg:h-[900px] object-contain opacity-10"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Pulsing glow behind the logo */}
        <motion.div
          className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-primary-500/5"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Secondary glow ring */}
        <motion.div
          className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-primary-500/10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />

        {/* Moving light streaks */}
        <motion.div
          className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/10 to-transparent"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />

        {/* Floating golden particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary-500/30 rounded-full"
            style={{
              top: `${10 + i * 11}%`,
              left: `${8 + i * 11}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, 20, 0],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: 5 + i * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.6,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* OURTECH Enhanced Logo (foreground) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
            className="flex justify-center mb-8"
          >
            <img
              src="/Ourtech enhanced logo.png"
              alt="OURTECH Information Technology Solutions logo"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain drop-shadow-[0_0_20px_rgba(255,193,7,0.4)]"
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-sm text-primary-700 font-medium">
              DICT D-TAP Accredited Provider
            </span>
          </motion.div>

          {/* Company Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 bg-clip-text text-transparent">{COMPANY.shortName}</span>
            <br />
            <span className="text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
              Information Technology Solutions
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light">
            {COMPANY.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToServices}
              className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-primary-500/30"
              data-testid="hero-cta-services"
            >
              Explore Our Solutions
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 font-semibold rounded-xl transition-colors"
              data-testid="hero-cta-contact"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
