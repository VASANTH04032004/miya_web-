import React from 'react';
import { motion } from 'framer-motion';

const LuxuriousMoon: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
    return (
        <motion.div
            initial={{ rotate: -20, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className={`relative flex items-center justify-center ${className}`}
        >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]">
                <defs>
                    <linearGradient id="moonGlow" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop stopColor="#FFDF73" offset="0%" />
                        <stop stopColor="#F5B927" offset="50%" />
                        <stop stopColor="#D48100" offset="100%" />
                    </linearGradient>
                    <radialGradient id="moonCrater" cx="30%" cy="30%" r="50%">
                        <stop stopColor="#FFFFFF" stopOpacity="0.3" offset="0%" />
                        <stop stopColor="#000000" stopOpacity="0.4" offset="100%" />
                    </radialGradient>
                </defs>

                {/* Main Moon Body */}
                <motion.path
                    d="M85,50 C85,69.33 69.33,85 50,85 C39.14,85 29.43,80.05 23.08,72.33 C34.39,72.49 44.97,66.52 50.8,56.5 C55.97,47.61 55.97,36.57 50.8,27.68 C45.39,18.36 35.6,12.55 25.04,11.85 C31.64,11.16 38.39,11.51 44.93,12.98 C66.86,17.9 83.1,36.6 85,50 Z"
                    fill="url(#moonGlow)"
                    animate={{ filter: ['drop-shadow(0px 0px 10px #FFDF73)', 'drop-shadow(0px 0px 25px #FFDF73)', 'drop-shadow(0px 0px 10px #FFDF73)'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Crater Details */}
                <circle cx="65" cy="40" r="5" fill="url(#moonCrater)" opacity="0.6" />
                <circle cx="75" cy="60" r="3" fill="url(#moonCrater)" opacity="0.5" />
                <circle cx="55" cy="70" r="4" fill="url(#moonCrater)" opacity="0.6" />
            </svg>
            {/* Star sparkles */}
            <motion.div
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-0 right-0 w-2 h-2 bg-yellow-200 rounded-full blur-[1px]"
            />
            <motion.div
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-2 left-6 w-1.5 h-1.5 bg-yellow-200 rounded-full blur-[1px]"
            />
        </motion.div>
    );
};

export default LuxuriousMoon;
