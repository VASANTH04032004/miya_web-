import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { clsx } from 'clsx';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-700 border-b border-transparent',
                isScrolled ? 'bg-void-900/70 backdrop-blur-xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3' : 'bg-transparent py-5'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center space-x-3 cursor-pointer group">
                        <img
                            src="/logo.png"
                            alt="Miyalix"
                            className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]"
                        />
                        <span className="text-2xl font-display font-medium tracking-widest text-white uppercase drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                            Miya<span className="font-light text-raiden-300">lix</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-10 items-center">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) => clsx(
                                    "relative text-sm font-medium tracking-wide transition-all duration-300 hover:text-white uppercase",
                                    isActive ? "text-white" : "text-slate-400"
                                )}
                            >
                                {({ isActive }) => (
                                    <>
                                        <span className="relative z-10">{link.name}</span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-raiden-400 to-raiden-600 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <Link
                            to="/contact"
                            className="relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white transition-all duration-300 bg-transparent border border-white/20 rounded-full group hover:bg-white/5 hover:border-raiden-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] overflow-hidden"
                        >
                            <span className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-raiden-500/10 to-transparent transition-opacity duration-300 pointer-events-none"></span>
                            <span className="relative tracking-wider uppercase text-xs">Contact Us</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-slate-300 hover:text-white focus:outline-none transition-colors"
                        >
                            {mobileMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="md:hidden bg-void-900/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden absolute w-full left-0 top-full"
                    >
                        <div className="px-4 pt-4 pb-8 space-y-2 sm:px-3 flex flex-col items-center">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) => clsx(
                                        "block px-3 py-4 text-sm tracking-widest uppercase transition-colors rounded-md w-full text-center border-b border-white/5",
                                        isActive ? "text-raiden-400 font-bold" : "text-slate-400 hover:text-white"
                                    )}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <Link
                                to="/contact"
                                className="mt-8 block w-full max-w-xs text-center px-6 py-4 text-sm font-medium tracking-widest text-white bg-gradient-to-r from-raiden-500 to-raiden-700 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] uppercase transition-all hover:scale-105 active:scale-95"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
