import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { COMPANY, TEAM_COMPOSITION } from '../utils/constants';

function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="relative py-20 md:py-32" aria-labelledby="about-title">
      <div className="section-container">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="about-title" className="section-title">
              About <span className="gradient-text">{COMPANY.shortName}</span>
            </h2>
            <p className="section-subtitle">
              A Filipino-owned ICT services and integration company delivering enterprise-grade
              technology solutions since {COMPANY.established}.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Company Overview */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Company Overview</h3>
              <p className="text-dark-300 leading-relaxed mb-4">
                Headquartered in {COMPANY.headquarters} with extended operations in{' '}
                {COMPANY.operations}, OURTECH has rapidly positioned itself as a trusted partner for
                digital infrastructure, cybersecurity, emergency communication systems, IoT
                technologies, and advanced monitoring solutions.
              </p>
              <p className="text-dark-400 text-sm">{COMPANY.registration}</p>
            </motion.div>

            {/* Team Composition */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Our Team</h3>
              <p className="text-dark-300 leading-relaxed mb-4">
                Our strength lies in combining technical expertise, operational discipline, and
                strategic insight — backed by a diverse team of professionals.
              </p>
              <ul className="space-y-2">
                {TEAM_COMPOSITION.map((role) => (
                  <li key={role} className="flex items-center gap-3 text-dark-200">
                    <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0" aria-hidden="true" />
                    {role}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
