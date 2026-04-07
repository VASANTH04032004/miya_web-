import React from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaGem, FaShieldAlt, FaSpaceShuttle } from 'react-icons/fa';

const features = [
  {
    icon: FaCrown,
    title: 'Elite Craftsmanship',
    description: 'We deliver uncompromising quality, ensuring every pixel and line of code represents the pinnacle of technology.',
    color: 'text-raiden-400',
  },
  {
    icon: FaSpaceShuttle,
    title: 'Future-Proof Horizons',
    description: 'We innovate beyond the curve, equipping your enterprise with scalable technology that defines tomorrow.',
    color: 'text-raiden-300',
  },
  {
    icon: FaShieldAlt,
    title: 'Fortified Security',
    description: 'Impenetrable, enterprise-grade architectures that safeguard your most valuable digital assets.',
    color: 'text-raiden-200',
  },
  {
    icon: FaGem,
    title: 'Bespoke Solutions',
    description: 'Tailored specifically for your vision, we construct elegant systems matching your unique strategic requirements.',
    color: 'text-raiden-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 z-10 w-full overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-raiden-500/5 to-transparent pointer-events-none blur-2xl rounded-full gpu-accelerate"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-xs font-bold tracking-[0.2em] text-raiden-400 uppercase font-display mb-4">
            Our Philosophy
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-4xl md:text-6xl font-display font-light mb-8 text-white">
            Ascend Beyond <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-raiden-300 to-raiden-600">Ordinary</span>
          </motion.h3>
          <motion.p variants={itemVariants} className="text-lg text-slate-400 font-light leading-relaxed tracking-wide">
            Miyalix is a syndicate of visionaries. We do not mass-produce; we curate. Every digital experience we engineer is a statement of power and limitless potential.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="bg-void-800/40 backdrop-blur-sm border border-white/10 hover:border-raiden-500/30 rounded-3xl p-8 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-[0_10px_30px_rgba(168,85,247,0.08)] relative overflow-hidden gpu-accelerate"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-raiden-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="p-5 rounded-2xl bg-void-900 border border-white/5 mb-8 transition-shadow duration-300 relative z-10 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <feature.icon className={`text-4xl ${feature.color}`} />
              </div>
              <h4 className="text-xl font-medium tracking-wide mb-4 text-white group-hover:text-raiden-400 transition-colors duration-300 relative z-10">{feature.title}</h4>
              <p className="text-slate-400 text-sm font-light leading-relaxed tracking-wide relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
