import { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPANY } from '../utils/constants';

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - navbarHeight, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-transparent"
      aria-label="Hero section"
      onMouseMove={handleMouseMove}
    >
      {/* Cursor-following glowing orbs */}
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-orange-500/8 blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x * 300,
          y: mousePosition.y * 300,
          left: '50%',
          top: '50%',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 60 }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-orange-500/12 blur-2xl pointer-events-none"
        animate={{
          x: mousePosition.x * 180,
          y: mousePosition.y * 180,
          left: '40%',
          top: '40%',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 50 }}
        aria-hidden="true"
      />

      {/* Animated background lines — removed, using global TechBackground */}

      {/* Content — Two Column Layout (Logo left, Text right) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 pt-10 md:pt-12">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-4">
          
          {/* LEFT SIDE — Logo, moving, 10% smaller */}
          <motion.div
            className="flex-1 flex items-center justify-center w-full md:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative flex items-center justify-center">
              {/* Glow that shifts with mouse */}
              <motion.div
                className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-primary-500/5 blur-3xl"
                animate={{
                  x: mousePosition.x * 40,
                  y: mousePosition.y * 40,
                  scale: [1, 1.1, 1],
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 80 }}
              />

              {/* The Logo — 10% smaller, pulsing scale + mouse tilt */}
              <motion.img
                src="/Ourtech enhanced logo.png"
                alt="OURTECH Information Technology Solutions logo"
                className="relative w-[288px] h-[288px] sm:w-[360px] sm:h-[360px] md:w-[450px] md:h-[450px] lg:w-[540px] lg:h-[540px] xl:w-[630px] xl:h-[630px] object-contain"
                animate={{
                  scale: [1, 1.06, 1],
                  rotateX: mousePosition.y * -8,
                  rotateY: mousePosition.x * 8,
                }}
                transition={{
                  scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
                  rotateX: { type: 'spring', damping: 20, stiffness: 100 },
                  rotateY: { type: 'spring', damping: 20, stiffness: 100 },
                }}
                style={{ perspective: 1000 }}
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE — Text Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-sm text-orange-400 font-medium">
                DICT D-TAP Accredited Provider
              </span>
            </motion.div>

            {/* Company Name */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                {COMPANY.shortName}
              </span>
              <br />
              <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light">
                Information Technology Solutions
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-xl font-light">
              {COMPANY.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToServices}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl transition-colors shadow-lg shadow-orange-500/30"
                data-testid="hero-cta-services"
              >
                Explore Our Solutions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                const el = document.getElementById('contact');
                if (el) {
                  const navbarHeight = 80;
                  const pos = el.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top: pos - navbarHeight, behavior: 'smooth' });
                }
              }}
                className="px-8 py-4 border-2 border-orange-500/30 hover:border-orange-500 text-orange-400 hover:text-orange-300 font-semibold rounded-xl transition-colors backdrop-blur-sm"
                data-testid="hero-cta-contact"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <svg className="w-6 h-6 text-orange-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}

export default Hero;
