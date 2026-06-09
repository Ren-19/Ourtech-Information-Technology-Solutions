import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { PARTNERSHIP_PILLARS } from '../utils/constants';

function WhyPartner() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="why-partner"
      className="relative py-20 md:py-32 bg-dark-900/30"
      aria-labelledby="partner-title"
    >
      <div className="section-container">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="partner-title" className="section-title">
              Why Partner with <span className="gradient-text">OURTECH</span>
            </h2>
            <p className="section-subtitle">
              Technology is the backbone of operational excellence, resilience, and competitive
              advantage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PARTNERSHIP_PILLARS.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className={`card relative overflow-hidden ${
                  index === PARTNERSHIP_PILLARS.length - 1 && PARTNERSHIP_PILLARS.length % 3 === 2
                    ? 'md:col-span-2 lg:col-span-1'
                    : ''
                }`}
              >
                {/* Number indicator */}
                <div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary-500/10 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="text-primary-400 text-sm font-bold">{index + 1}</span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-3 pr-10">{pillar.title}</h3>
                <p className="text-dark-300 text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyPartner;
