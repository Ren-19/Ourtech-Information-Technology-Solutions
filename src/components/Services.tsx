import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SERVICES } from '../utils/constants';

function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="relative py-20 md:py-32" aria-labelledby="services-title">
      <div className="section-container">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="services-title" className="section-title">
              Core Business <span className="gradient-text">Solutions</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive ICT services designed for performance, security, and longevity.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * (index + 1) }}
                className="card group cursor-default"
                data-testid={`service-card-${index}`}
              >
                <div
                  className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-dark-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
