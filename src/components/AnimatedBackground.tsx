import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

interface AnimatedBackgroundProps {
    children: React.ReactNode;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ children }) => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="relative min-h-screen bg-navy-900 bg-mesh-gradient animate-mesh overflow-hidden pb-10">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: { enable: false },
                    fpsLimit: 60,
                    background: { color: 'transparent' },
                    particles: {
                        color: { value: ['#00f0ff', '#8a2be2', '#00ffff'] },
                        links: {
                            color: '#00f0ff',
                            distance: 150,
                            enable: true,
                            opacity: 0.15,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            outModes: { default: 'bounce' },
                            random: false,
                            speed: 0.8,
                            straight: false,
                        },
                        number: {
                            density: { enable: true, area: 1000 },
                            value: 30,
                        },
                        opacity: { value: 0.2 },
                        shape: { type: 'circle' },
                        size: { value: { min: 1, max: 2 } },
                    },
                    detectRetina: true,
                }}
                className="absolute inset-0 z-0 pointer-events-none"
            />

            {/* Lighter blobs — reduced blur for performance */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-purple/10 rounded-full mix-blend-screen filter blur-[80px] animate-blob z-0 pointer-events-none gpu-accelerate"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500/10 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000 z-0 pointer-events-none gpu-accelerate"></div>
            <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-neon-cyan/10 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-4000 z-0 pointer-events-none gpu-accelerate"></div>

            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
};

export default AnimatedBackground;
