import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { label: 'Excellence Delivered', value: 100, suffix: '+' },
  { label: 'Performance Metric', value: 98, suffix: '%' },
  { label: 'Global Experts', value: 5, suffix: '+' },
];

const AnimatedCounter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          clearInterval(timer);
          setCount(value);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const displayCount = value % 1 !== 0 ? count.toFixed(1) : Math.floor(count);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-light font-display text-white group-hover:text-raiden-400 transition-colors duration-300">
      {displayCount}<span className="text-raiden-500 font-bold">{suffix}</span>
    </span>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-32 relative z-10 w-full overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-raiden-500/5 to-transparent pointer-events-none blur-[80px] rounded-full gpu-accelerate"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:w-1/2 gpu-accelerate"
          >
            <h2 className="text-xs font-bold tracking-[0.2em] text-raiden-400 uppercase font-display mb-4">The Miyalix Standard</h2>
            <h3 className="text-4xl md:text-6xl font-display font-light mb-8 leading-tight">
              A Legacy of <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-raiden-300 to-raiden-600">Perfection</span>
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light tracking-wide">
              We transcend traditional development. Our syndicate operates with precision, orchestrating zero-downtime environments and crafting architectures of unprecedented power and speed.
            </p>
            <ul className="space-y-6 text-slate-300 font-light tracking-wide">
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-raiden-400 mr-4 shadow-[0_0_10px_rgba(168,85,247,0.6)]"></span>
                Iterative Perfection & Flawless UX
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-raiden-500 mr-4 shadow-[0_0_10px_rgba(147,51,234,0.6)]"></span>
                Impenetrable, High-Availability Systems
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-raiden-300 mr-4 shadow-[0_0_10px_rgba(192,132,252,0.6)]"></span>
                Dedicated Avant-Garde Engineering Guild
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="lg:w-1/2 grid grid-cols-2 gap-8 w-full gpu-accelerate"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-transparent hover:from-raiden-400/50 hover:to-raiden-700/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)]"
              >
                <div className="h-full bg-void-900/90 backdrop-blur-sm rounded-[23px] p-8 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:bg-void-800">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <span className="text-xs text-slate-400 mt-4 font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-300">{stat.label}</span>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
