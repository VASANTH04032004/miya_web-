import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaRobot, FaMobileAlt, FaCloudUploadAlt, FaShoppingCart, FaDatabase } from 'react-icons/fa';

const services = [
  { title: 'Cloud Orchestration', description: 'Elite AWS/GCP architectures tailored for high-availability and uncompromised performance.', icon: FaCloudUploadAlt },
  { title: 'Artificial Intelligence', description: 'Proprietary AI models and intelligent automation to propel your enterprise past competitors.', icon: FaRobot },
  { title: 'Web Experiences', description: 'Bespoke web applications blending cinematic design with lightning-fast reactive technologies.', icon: FaServer },
  { title: 'Mobile Supremacy', description: 'Flawless native iOS and Android applications designed for ultimate user engagement.', icon: FaMobileAlt },
  { title: 'Digital Commerce', description: 'High-converting headless storefronts optimized for global scaling.', icon: FaShoppingCart },
  { title: 'Data Mastery', description: 'Sophisticated data pipelines transforming raw information into commanding strategic insights.', icon: FaDatabase },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-32 z-10 w-full overflow-hidden bg-void-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xs font-bold tracking-[0.2em] text-raiden-400 uppercase font-display mb-4"
          >
            Aesthetic & Power
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.08 }}
            className="text-4xl md:text-6xl font-display font-light mb-8 text-white"
          >
            Unrivaled <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-raiden-300 to-raiden-600">Capabilities</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.02, rotateY: 2, rotateX: -2, zIndex: 20 }}
              style={{ perspective: 800 }}
              className="relative group gpu-accelerate"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-raiden-400 to-raiden-700 rounded-3xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>
              <div className="relative h-full bg-void-900 border border-white/10 p-10 rounded-3xl flex flex-col items-start transition-all duration-300 z-10 group-hover:bg-void-800/90 group-hover:border-raiden-500/50">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-raiden-300/10 to-raiden-600/10 border border-raiden-500/20 mb-8 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-4xl text-raiden-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]" />
                </div>
                <h4 className="text-2xl font-medium tracking-wide mb-5 text-white group-hover:text-raiden-400 transition-colors duration-300">{service.title}</h4>
                <p className="text-slate-400 font-light leading-relaxed text-sm tracking-wide">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
