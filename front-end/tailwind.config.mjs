/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#FFFFFF',
                background_box: '#f2f2f2',
                background_light: '#1f2e4e',
                background_dark: '#000c21',
                color_red: '#ea001e'
            },
            animation: {
                'wave-expand': 'waveExpand 1.5s infinite ease-in-out',
            },
            keyframes: {
                waveExpand: {
                    '0%': { transform: 'scale(1)', opacity: '0.8' },
                    '50%': { transform: 'scale(1.5)', opacity: '0.4' },
                    '100%': { transform: 'scale(2)', opacity: '0' },
                },
            },

        },
    },
    plugins: [],
};
