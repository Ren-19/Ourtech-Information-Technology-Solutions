import { motion } from 'framer-motion';

/**
 * Dynamic technology-themed animated background.
 * Uses GPU-accelerated transforms and opacity for smooth 60fps.
 * Respects prefers-reduced-motion via Framer Motion's built-in support.
 */
function TechBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0a0a]" aria-hidden="true">
      
      {/* Grid Overlay — circuit-board feel */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-[-50%] w-[200%] h-[200%] bg-[linear-gradient(rgba(255,168,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,168,0,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem]"
          animate={{ x: [0, -64], y: [0, -64] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Floating Particles — rising data flow */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-orange-400"
          style={{
            left: `${(i * 5.2 + 2) % 100}%`,
            bottom: `-${(i * 3) % 10}%`,
          }}
          animate={{
            y: [0, -(window.innerHeight + 100)],
            opacity: [0, 0.8, 0.8, 0],
            x: [0, Math.sin(i) * 30],
          }}
          transition={{
            duration: 8 + (i % 5) * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.6,
          }}
        />
      ))}

      {/* Glowing Orbs — breathing light sources */}
      {[
        { x: '15%', y: '20%', size: 200, delay: 0 },
        { x: '75%', y: '60%', size: 250, delay: 2 },
        { x: '45%', y: '80%', size: 180, delay: 4 },
        { x: '85%', y: '15%', size: 150, delay: 1 },
        { x: '25%', y: '55%', size: 220, delay: 3 },
      ].map((orb, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: 'radial-gradient(circle, rgba(255,168,0,0.12) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}

      {/* Circuit Scan Lines — horizontal sweeps */}
      <motion.div
        className="absolute top-[20%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-[50%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"
        animate={{ x: ['100%', '-100%'] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-[75%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500/25 to-transparent"
        animate={{ x: ['-50%', '150%'] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
      />

      {/* Circuit Scan Lines — vertical sweeps */}
      <motion.div
        className="absolute top-0 left-[30%] w-[2px] h-full bg-gradient-to-b from-transparent via-orange-500/30 to-transparent"
        animate={{ y: ['-100%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-0 left-[70%] w-[2px] h-full bg-gradient-to-b from-transparent via-orange-400/25 to-transparent"
        animate={{ y: ['100%', '-100%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Hexagonal Shapes — rotating tech nodes */}
      {[
        { x: '20%', y: '30%', size: 60, speed: 20 },
        { x: '70%', y: '25%', size: 80, speed: 25 },
        { x: '50%', y: '70%', size: 50, speed: 30 },
        { x: '80%', y: '75%', size: 70, speed: 22 },
        { x: '10%', y: '70%', size: 55, speed: 28 },
      ].map((hex, i) => (
        <motion.div
          key={`hex-${i}`}
          className="absolute border border-orange-500/20"
          style={{
            left: hex.x,
            top: hex.y,
            width: hex.size,
            height: hex.size,
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
          animate={{
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            rotate: { duration: hex.speed, repeat: Infinity, ease: 'linear' },
            opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 },
          }}
        />
      ))}

      {/* Data Nodes — pulsing network endpoints */}
      {[
        { x: '12%', y: '15%' },
        { x: '88%', y: '20%' },
        { x: '35%', y: '45%' },
        { x: '65%', y: '35%' },
        { x: '22%', y: '80%' },
        { x: '78%', y: '85%' },
        { x: '50%', y: '55%' },
        { x: '92%', y: '50%' },
      ].map((node, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute"
          style={{ left: node.x, top: node.y }}
        >
          {/* Outer pulse ring */}
          <motion.div
            className="absolute -inset-3 rounded-full border border-orange-500/30"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeOut',
              delay: i * 0.4,
            }}
          />
          {/* Core dot */}
          <motion.div
            className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(255,168,0,0.6)]"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        </motion.div>
      ))}

      {/* Additional ambient glow at center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-orange-500/5 to-transparent blur-3xl" />
    </div>
  );
}

export default TechBackground;
