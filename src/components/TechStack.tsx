import React from 'react';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaPython } from 'react-icons/fa';
import { SiGooglecloud, SiKubernetes, SiTensorflow, SiNextdotjs, SiTailwindcss, SiVite } from 'react-icons/si';

const techs = [
    { icon: FaReact, name: 'React' },
    { icon: SiNextdotjs, name: 'Next.js' },
    { icon: FaNodeJs, name: 'Node.js' },
    { icon: FaPython, name: 'Python' },
    { icon: FaAws, name: 'AWS' },
    { icon: SiGooglecloud, name: 'Cloud' },
    { icon: FaDocker, name: 'Docker' },
    { icon: SiKubernetes, name: 'Kubernetes' },
    { icon: SiTensorflow, name: 'TensorFlow' },
    { icon: SiTailwindcss, name: 'Tailwind' },
    { icon: SiVite, name: 'Vite' },
];

const TechStack: React.FC = () => {
    const doubledTechs = [...techs, ...techs];

    return (
        <section id="tech" className="py-24 relative z-10 overflow-hidden border-y border-white/5 bg-navy-900/60 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-20">
                <h3 className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase font-display drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    Trusted Technologies
                </h3>
            </div>

            <div className="flex overflow-hidden w-full relative">
                <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-navy-900 via-navy-900/80 to-transparent z-10 pointer-events-none"></div>

                <div className="flex w-max animate-scrolling-logos space-x-24 items-center pl-10">
                    {doubledTechs.map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:text-yellow-400 transition-all duration-700 transform hover:scale-110 cursor-pointer"
                        >
                            <tech.icon className="text-5xl drop-shadow-md" />
                            <span className="text-2xl font-light tracking-widest uppercase">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
