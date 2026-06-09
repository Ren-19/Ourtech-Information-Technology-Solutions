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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      aria-label="Hero section"
      onMouseMove={handleMouseMove}
    >
      {/* Cursor-following glowing orbs */}
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-primary-500/6 blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x * 300 + window.innerWidth / 2 - 160,
          y: mousePosition.y * 300 + window.innerHeight / 2 - 160,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 60 }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-primary-500/10 blur-2xl pointer-events-none"
        animate={{
          x: mousePosition.x * 180 + window.innerWidth / 2 - 96,
          y: mousePosition.y * 180 + window.innerHeight / 2 - 96,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 50 }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-primary-500/15 blur-xl pointer-events-none"
        animate={{
          x: mousePosition.x * 100 + window.innerWidth / 2 - 48,
          y: mousePosition.y * 100 + window.innerHeight / 2 - 48,
        }}
        transition={{ type: 'spring', damping: 15, stiffness: 40 }}
        aria-hidden="true"
      />

      {/* Cursor trail particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary-500/30 pointer-events-none"
          animate={{
            x: mousePosition.x * (60 + i * 40) + window.innerWidth / 2,
            y: mousePosition.y * (60 + i * 40) + window.innerHeight / 2,
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ type: 'spring', damping: 12 + i * 5, stiffness: 30 + i * 10 }}
          aria-hidden="true"
        />
      ))}

      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Moving tech grid — golden, stronger */}
        <motion.div
          className="absolute inset-[-50%] w-[200%] h-[200%] bg-[linear-gradient(rgba(255,168,0,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,168,0,0.15)_1px,transparent_1px)] bg-[size:3rem_3rem]"
          animate={{ x: [0, -48], y: [0, -48] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />

        {/* Diagonal scan lines — golden, visible */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,transparent_48%,rgba(255,168,0,0.08)_49%,rgba(255,168,0,0.08)_51%,transparent_52%)] bg-[size:30px_30px]"
          animate={{ x: [0, 30], y: [0, 30] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />

        {/* Horizontal sweeping lines — golden, bright */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[rgba(255,168,0,0.4)] to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[rgba(255,193,7,0.35)] to-transparent"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-3/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[rgba(255,143,0,0.3)] to-transparent"
          animate={{ x: ['-50%', '150%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />

        {/* Vertical sweeping line — golden */}
        <motion.div
          className="absolute top-0 left-1/3 w-[2px] h-full bg-gradient-to-b from-transparent via-[rgba(255,168,0,0.25)] to-transparent"
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />

        {/* Circuit dots — golden, visible */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[rgba(255,168,0,0.5)] rounded-full shadow-[0_0_6px_rgba(255,168,0,0.4)]"
            style={{
              top: `${(i * 7 + 5) % 90}%`,
              left: `${(i * 9 + 3) % 95}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 2.5 + (i % 3),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Pulsing concentric circles — golden radar, visible */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-2 border-[rgba(255,168,0,0.15)]"
          animate={{ scale: [0.8, 1.3], opacity: [0.3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-2 border-[rgba(255,168,0,0.15)]"
          animate={{ scale: [0.8, 1.3], opacity: [0.3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', delay: 1.3 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-[rgba(255,168,0,0.15)]"
          animate={{ scale: [0.8, 1.3], opacity: [0.3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', delay: 2.6 }}
        />
      </div>

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-sm text-primary-700 font-medium">
                DICT D-TAP Accredited Provider
              </span>
            </motion.div>

            {/* Company Name */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 bg-clip-text text-transparent">
                {COMPANY.shortName}
              </span>
              <br />
              <span className="text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light">
                Information Technology Solutions
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-xl font-light">
              {COMPANY.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
        </div>
      </div>

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
    </section>
  );
}

export default Hero;
