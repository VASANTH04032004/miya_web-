import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Inquiry successfully transmitted. Our concierges will reach out momentarily.");
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-32 relative z-10 w-full overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Glow behind form — lighter */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-gradient-to-r from-yellow-500/8 via-amber-600/8 to-orange-500/8 rounded-full blur-[100px] pointer-events-none z-0 gpu-accelerate"></div>

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative z-10 backdrop-blur-xl bg-navy-900/40 rounded-[2.5rem] p-10 md:p-16 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.4)] overflow-hidden gpu-accelerate"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent pointer-events-none"></div>

                    <div className="text-center mb-16 relative z-10">
                        <h2 className="text-4xl md:text-6xl font-display font-light text-white mb-6 leading-tight">
                            Begin the <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-600">Ascension</span>
                        </h2>
                        <p className="text-slate-400 font-light tracking-wide max-w-2xl mx-auto">
                            Ready to architect the unimagined? Correspond with our lead engineering strategists to secure your technological supremacy.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative group">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="w-full bg-navy-900/50 border border-white/10 rounded-2xl px-6 pt-8 pb-3 text-white placeholder-transparent focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all duration-300 peer font-light tracking-wide"
                                    placeholder="Name"
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute text-sm font-light text-slate-400 duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-yellow-400 tracking-wider uppercase"
                                >
                                    Your Identity
                                </label>
                            </div>
                            <div className="relative group">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="w-full bg-navy-900/50 border border-white/10 rounded-2xl px-6 pt-8 pb-3 text-white placeholder-transparent focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all duration-300 peer font-light tracking-wide"
                                    placeholder="Email"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute text-sm font-light text-slate-400 duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-yellow-400 tracking-wider uppercase"
                                >
                                    Secure Contact (Email)
                                </label>
                            </div>
                        </div>

                        <div className="relative group">
                            <textarea
                                name="message"
                                id="message"
                                required
                                rows={6}
                                value={formState.message}
                                onChange={handleChange}
                                className="w-full bg-navy-900/50 border border-white/10 rounded-2xl px-6 pt-8 pb-3 text-white placeholder-transparent focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all duration-300 peer resize-none font-light tracking-wide"
                                placeholder="Message"
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="absolute text-sm font-light text-slate-400 duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-yellow-400 tracking-wider uppercase"
                            >
                                Project Directives
                            </label>
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="w-full py-5 rounded-full font-bold tracking-[0.2em] uppercase text-navy-900 bg-gradient-to-r from-yellow-300 to-amber-600 shadow-[0_0_15px_rgba(255,215,0,0.2)] hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transition-shadow duration-300 relative overflow-hidden group mt-4"
                        >
                            <span className="relative">Transmit Inquiry</span>
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
