/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Poppins', 'sans-serif'],
            },
            colors: {
                neon: {
                    blue: '#00f0ff',
                    purple: '#8a2be2',
                    cyan: '#00ffff',
                    pink: '#ff007f',
                },
                navy: {
                    900: '#0a0f1c',
                    800: '#111827',
                }
            },
            animation: {
                'blob': 'blob 7s infinite',
                'mesh': 'mesh 15s ease infinite',
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scrolling-logos': 'scrolling-logos 20s linear infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                mesh: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '.8', transform: 'scale(1.05)' },
                },
                'scrolling-logos': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        },
    },
    plugins: [],
}
