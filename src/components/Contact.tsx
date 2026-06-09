import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { COMPANY } from '../utils/constants';
import {
  validateContactForm,
  sanitizeFormData,
  type ContactFormData,
} from '../utils/validation';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContactForm(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setStatus('submitting');
    setErrors({});

    try {
      const sanitized = sanitizeFormData(formData);

      // Submit to Formspree (replace with actual endpoint)
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitized),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-32" aria-labelledby="contact-title">
      <div className="section-container">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="contact-title" className="section-title">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="section-subtitle">
              Ready to build a secure, connected, and future-ready ICT ecosystem? Let&apos;s talk.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="card p-8">
              {status === 'success' ? (
                <div className="text-center py-8" role="alert" aria-live="polite">
                  <div className="text-4xl mb-4" aria-hidden="true">✅</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-dark-300 mb-6">
                    Thank you for reaching out. We&apos;ll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2 bg-primary-500/10 border border-primary-500/30 text-primary-400 rounded-lg hover:bg-primary-500/20 transition-colors"
                    data-testid="contact-send-another"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-200 mb-2">
                        Name <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        className={`w-full px-4 py-3 rounded-lg bg-dark-800 border ${
                          errors.name ? 'border-red-500' : 'border-dark-600'
                        } text-white placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors`}
                        placeholder="Your full name"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        data-testid="contact-name-input"
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-200 mb-2">
                        Email <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        maxLength={254}
                        className={`w-full px-4 py-3 rounded-lg bg-dark-800 border ${
                          errors.email ? 'border-red-500' : 'border-dark-600'
                        } text-white placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors`}
                        placeholder="your@email.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        data-testid="contact-email-input"
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark-200 mb-2">
                        Message <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        maxLength={2000}
                        className={`w-full px-4 py-3 rounded-lg bg-dark-800 border ${
                          errors.message ? 'border-red-500' : 'border-dark-600'
                        } text-white placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none`}
                        placeholder="Tell us about your project or inquiry..."
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        data-testid="contact-message-input"
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Error Message */}
                    {status === 'error' && (
                      <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20" role="alert">
                        <p className="text-red-400 text-sm">
                          Something went wrong. Please try again or contact us directly.
                        </p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500/50 disabled:cursor-not-allowed text-dark-900 font-semibold rounded-xl transition-colors shadow-lg shadow-primary-500/20"
                      data-testid="contact-submit-button"
                    >
                      {status === 'submitting' ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* Location info */}
              <div className="mt-8 pt-6 border-t border-dark-700/50 text-center">
                <p className="text-dark-400 text-sm">
                  📍 {COMPANY.headquarters} • Extended operations in {COMPANY.operations}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
