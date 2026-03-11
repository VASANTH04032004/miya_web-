import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LuxuriousMoon from './LuxuriousMoon';

const Footer: React.FC = () => {
    return (
        <footer className="relative z-10 bg-navy-900/40 backdrop-blur-2xl border-t border-white/5 pt-20 pb-10 px-4 sm:px-6 lg:px-8 mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col space-y-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0">

                    <div className="flex flex-col max-w-sm gap-6">
                        <Link to="/" className="flex items-center space-x-3 group">
                            <LuxuriousMoon className="w-10 h-10 group-hover:scale-110 transition-transform duration-500 ease-out" />
                            <span className="text-2xl font-display font-medium tracking-widest text-white uppercase">
                                Miya<span className="font-light text-slate-300">lix</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm font-light leading-relaxed tracking-wide">
                            Architecting luxury digital experiences. Merging high performance with uncompromising aesthetic standards.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-16 sm:grid-cols-3">
                        <div>
                            <h3 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Company</h3>
                            <ul className="space-y-4 text-sm font-light text-slate-400">
                                <li><Link to="/about" className="hover:text-yellow-400 transition-colors duration-300">About Us</Link></li>
                                <li><Link to="/contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Expertise</h3>
                            <ul className="space-y-4 text-sm font-light text-slate-400">
                                <li><Link to="/services" className="hover:text-yellow-400 transition-colors duration-300">Web Development</Link></li>
                                <li><Link to="/services" className="hover:text-yellow-400 transition-colors duration-300">Cloud Architecture</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-xs font-light tracking-wider text-slate-500 uppercase">
                    <p>© {new Date().getFullYear()} Miyalix Services. All rights reserved.</p>
                    <div className="flex space-x-8">
                        <a href="#" className="text-slate-500 hover:text-yellow-400 transition-colors duration-300">
                            <span className="sr-only">Twitter</span>
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="text-slate-500 hover:text-yellow-400 transition-colors duration-300">
                            <span className="sr-only">LinkedIn</span>
                            <FaLinkedin size={20} />
                        </a>
                        <a href="#" className="text-slate-500 hover:text-white transition-colors duration-300">
                            <span className="sr-only">GitHub</span>
                            <FaGithub size={20} />
                        </a>
                        <a href="#" className="text-slate-500 hover:text-yellow-400 transition-colors duration-300">
                            <span className="sr-only">Discord</span>
                            <FaDiscord size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
