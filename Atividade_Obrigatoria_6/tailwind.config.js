/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // controlado por classe
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2563eb',
                    dark: '#1d4ed8',
                },
                tagnew: '#10b981',
                tagpromo: '#f59e0b',
                bgdark: '#1a1a1a',
                textdark: '#f5f5f5'
            },
            spacing: {
                '4x': '1rem'
            },
            borderRadius: {
                'md': '0.5rem'
            },
            boxShadow: {
                'card': '0 2px 8px rgba(0,0,0,0.1)',
                'card-hover': '0 4px 16px rgba(0,0,0,0.18)'
            },
            transitionDuration: {
                '200': '200ms'
            }
        },
        screens: {
            // usando breakpoints exatos pedidos:
            // <=480 base, 481-768 => bp1, 769-1024 => bp2, >=1025 => bp3
            'bp1': '481px',
            'bp2': '769px',
            'bp3': '1025px',
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
