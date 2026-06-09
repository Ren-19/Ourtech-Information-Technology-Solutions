import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CERTIFICATION } from '../utils/constants';

function Certifications() {
  const { ref, isVisible } = useScrollAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="certifications"
        className="relative py-20 md:py-32 bg-dark-900/30"
        aria-labelledby="cert-title"
      >
        <div className="section-container">
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 id="cert-title" className="section-title">
                <span className="gradient-text">Accreditations</span> & Certifications
              </h2>
              <p className="section-subtitle">
                Recognized and accredited by the Department of Information and Communications Technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="card glow-border p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Certificate Image */}
                  <div className="flex justify-center">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="group relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg overflow-hidden"
                      aria-label="View full-size DICT D-TAP Certificate"
                      data-testid="cert-image-button"
                    >
                      <img
                        src={CERTIFICATION.imageFile}
                        alt="DICT Certificate of Accreditation - OURTECH Information Technology Solutions as a Trusted Assessment Provider (D-TAP) for Information Security Management System (ISMS)"
                        className="w-full max-w-sm rounded-lg shadow-2xl shadow-primary-500/10 group-hover:shadow-primary-500/20 transition-shadow duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/10 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm bg-dark-900/70 px-3 py-1 rounded-full">
                          Click to enlarge
                        </span>
                      </div>
                    </button>
                  </div>

                  {/* Certificate Details */}
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20">
                      <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
                      <span className="text-sm text-primary-400 font-medium">Accredited</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white">{CERTIFICATION.title}</h3>

                    <p className="text-dark-300">
                      for <span className="text-white font-medium">{CERTIFICATION.scope}</span>
                    </p>

                    <dl className="space-y-3 pt-4 border-t border-dark-700/50">
                      <div>
                        <dt className="text-sm text-dark-400">Issued By</dt>
                        <dd className="text-dark-200">{CERTIFICATION.issuedBy}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-dark-400">Signed By</dt>
                        <dd className="text-dark-200">{CERTIFICATION.signedBy}</dd>
                        <dd className="text-sm text-dark-400">{CERTIFICATION.signerTitle}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-dark-400">Accredited Since</dt>
                        <dd className="text-primary-400 font-medium">{CERTIFICATION.accreditedSince}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-950/90 backdrop-blur-sm p-4"
            onClick={() => setIsModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Full-size DICT D-TAP Certificate"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 text-dark-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-dark-700/50"
                aria-label="Close certificate view"
                data-testid="cert-modal-close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={CERTIFICATION.imageFile}
                alt="Full-size DICT Certificate of Accreditation for OURTECH Information Technology Solutions"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Certifications;
