import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{ name: formState.name, email: formState.email, message: formState.message }]);

      if (error) throw error;
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('Supabase error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-32 relative z-10 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-gradient-to-r from-raiden-500/8 via-raiden-600/8 to-raiden-400/8 rounded-full blur-[100px] pointer-events-none z-0 gpu-accelerate"></div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10 backdrop-blur-xl bg-void-900/40 rounded-[2.5rem] p-10 md:p-16 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.4)] overflow-hidden gpu-accelerate"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-raiden-500/5 to-transparent pointer-events-none"></div>

          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-light text-white mb-6 leading-tight">
              Begin the <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-raiden-300 to-raiden-600">Ascension</span>
            </h2>
            <p className="text-slate-400 font-light tracking-wide max-w-2xl mx-auto">
              Ready to architect the unimagined? Correspond with our lead engineering strategists to secure your technological supremacy.
            </p>
          </div>

          {status === 'success' && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 rounded-2xl bg-green-500/10 border border-green-500/30 text-center text-green-400 font-medium tracking-wide text-sm">
              ✓ Inquiry transmitted successfully. Our team will be in touch shortly.
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-center text-red-400 font-medium tracking-wide text-sm">
              Something went wrong. Please try again or contact us directly.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <input type="text" name="name" id="name" required value={formState.name} onChange={handleChange} disabled={status === 'sending'}
                  className="w-full bg-void-900/50 border border-white/10 rounded-2xl px-6 pt-8 pb-3 text-white placeholder-transparent focus:outline-none focus:border-raiden-400 focus:ring-1 focus:ring-raiden-400 transition-all duration-300 peer font-light tracking-wide disabled:opacity-50"
                  placeholder="Name" />
                <label htmlFor="name"
                  className="absolute text-sm font-light text-slate-400 duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-raiden-400 tracking-wider uppercase">
                  Your Name
                </label>
              </div>
              <div className="relative group">
                <input type="email" name="email" id="email" required value={formState.email} onChange={handleChange} disabled={status === 'sending'}
                  className="w-full bg-void-900/50 border border-white/10 rounded-2xl px-6 pt-8 pb-3 text-white placeholder-transparent focus:outline-none focus:border-raiden-400 focus:ring-1 focus:ring-raiden-400 transition-all duration-300 peer font-light tracking-wide disabled:opacity-50"
                  placeholder="Email" />
                <label htmlFor="email"
                  className="absolute text-sm font-light text-slate-400 duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-raiden-400 tracking-wider uppercase">
                  Email Address
                </label>
              </div>
            </div>

            <div className="relative group">
              <textarea name="message" id="message" required rows={6} value={formState.message} onChange={handleChange} disabled={status === 'sending'}
                className="w-full bg-void-900/50 border border-white/10 rounded-2xl px-6 pt-8 pb-3 text-white placeholder-transparent focus:outline-none focus:border-raiden-400 focus:ring-1 focus:ring-raiden-400 transition-all duration-300 peer resize-none font-light tracking-wide disabled:opacity-50"
                placeholder="Message"></textarea>
              <label htmlFor="message"
                className="absolute text-sm font-light text-slate-400 duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-raiden-400 tracking-wider uppercase">
                Project Details
              </label>
            </div>

            <motion.button type="submit" disabled={status === 'sending'}
              whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
              whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="w-full py-5 rounded-full font-bold tracking-[0.2em] uppercase text-white bg-gradient-to-r from-raiden-500 to-raiden-700 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-shadow duration-300 relative overflow-hidden group mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span className="relative flex items-center justify-center gap-3">
                {status === 'sending' && (
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {status === 'sending' ? 'Transmitting...' : 'Transmit Inquiry'}
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
