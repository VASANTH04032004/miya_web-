import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center min-h-screen z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">

        {/* Glow behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-3xl h-64 bg-raiden-500/8 rounded-full blur-[80px] pointer-events-none gpu-accelerate"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto relative z-10 gpu-accelerate"
        >
          {/* Logo above heading */}
          <motion.img
            src="/logo.png"
            alt="Miyalix Logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-8 object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-block mb-8 px-6 py-2 rounded-full border border-raiden-400/20 bg-raiden-400/5 text-raiden-300 text-xs font-semibold tracking-[0.2em] font-display uppercase backdrop-blur-sm"
          >
            Digital Innovation & Power
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-display font-light tracking-tight mb-8 text-white leading-tight">
            Design the Future with{' '}
            <span className="block mt-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-raiden-300 via-raiden-400 to-raiden-600 drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">
              Miyalix
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-sans leading-relaxed tracking-wide font-light">
            We architect bespoke digital experiences, orchestrating technology and aesthetics to elevate your enterprise beyond all limits.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative w-full sm:w-auto overflow-hidden rounded-full group p-[1px] bg-gradient-to-b from-raiden-400 to-raiden-700"
            >
              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center px-10 py-5 text-sm font-bold tracking-[0.15em] text-white uppercase transition-all duration-300 bg-void-900 rounded-full group-hover:bg-opacity-0 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                Contact Us
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-sm font-medium tracking-[0.15em] text-white uppercase transition-all duration-300 bg-transparent border border-white/20 rounded-full hover:bg-white/5 hover:border-raiden-400/40"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
