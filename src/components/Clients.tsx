import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CLIENT_SECTORS } from '../utils/constants';

function Clients() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="clients" className="relative py-20 md:py-32" aria-labelledby="clients-title">
      <div className="section-container">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="clients-title" className="section-title">
              Our <span className="gradient-text">Clients</span>
            </h2>
            <p className="section-subtitle">
              We serve a broad portfolio across multiple sectors, earning a reputation for
              precision, reliability, and strong after-service support.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CLIENT_SECTORS.map((sector, index) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * (index + 1) }}
                className="flex items-center gap-4 p-4 rounded-xl bg-dark-800/30 border border-dark-700/30 hover:border-primary-500/20 transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-primary-400 font-bold text-sm">
                    {sector.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">{sector.name}</h3>
                  <p className="text-dark-400 text-xs">{sector.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
