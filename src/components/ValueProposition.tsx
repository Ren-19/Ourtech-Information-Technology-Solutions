import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { COMPANY } from '../utils/constants';

const PILLARS = [
  {
    title: 'Reliability',
    description: 'Ensuring reliable solutions for operational excellence.',
    icon: '⚡',
  },
  {
    title: 'Security Focus',
    description: 'Prioritizing security to protect digital infrastructure.',
    icon: '🔐',
  },
  {
    title: 'Future-Readiness',
    description: 'Solutions ready for future technological advancements.',
    icon: '🚀',
  },
];

function ValueProposition() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 md:py-32 bg-dark-900/30" aria-labelledby="value-title">
      <div className="section-container">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="value-title" className="section-title">
              Our <span className="gradient-text">Value Proposition</span>
            </h2>
            <p className="text-xl md:text-2xl text-dark-200 font-light italic mt-4">
              &ldquo;{COMPANY.valueProposition}&rdquo;
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {PILLARS.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4" aria-hidden="true">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-dark-300">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-dark-300 mt-12 max-w-2xl mx-auto"
          >
            {COMPANY.commitment}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default ValueProposition;
