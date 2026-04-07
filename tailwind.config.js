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
                raiden: {
                    50: '#f3e8ff',
                    100: '#e9d5ff',
                    200: '#d8b4fe',
                    300: '#c084fc',
                    400: '#a855f7',
                    500: '#9333ea',
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#4c1d95',
                },
                void: {
                    950: '#060011',
                    900: '#0a0520',
                    800: '#130a30',
                    700: '#1e1045',
                },
                neon: {
                    purple: '#a855f7',
                    violet: '#7c3aed',
                    cyan: '#06b6d4',
                    pink: '#ec4899',
                },
            },
            animation: {
                'blob': 'blob 7s infinite',
                'mesh': 'mesh 15s ease infinite',
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scrolling-logos': 'scrolling-logos 20s linear infinite',
                'lightning-flash': 'lightning-flash 0.15s ease-out',
                'thunder-ambient': 'thunder-ambient 8s ease-in-out infinite',
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
                },
                'lightning-flash': {
                    '0%': { opacity: '0' },
                    '10%': { opacity: '1' },
                    '20%': { opacity: '0.3' },
                    '30%': { opacity: '0.9' },
                    '100%': { opacity: '0' },
                },
                'thunder-ambient': {
                    '0%, 100%': { opacity: '0' },
                    '45%': { opacity: '0' },
                    '50%': { opacity: '0.04' },
                    '52%': { opacity: '0' },
                    '54%': { opacity: '0.02' },
                    '56%': { opacity: '0' },
                },
            }
        },
    },
    plugins: [],
}
