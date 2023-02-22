/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const plugin = require('tailwindcss/plugin');
// eslint-disable-next-line no-undef
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                ethnocentric: ['Ethnocentric', 'Inter', '-apple-system', 'Helvetica Neue', 'sans-serif'],
                'tt-octosquares': ['TT Octosquares', 'Inter', '-apple-system', 'Helvetica Neue', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-main': 'linear-gradient(107.7deg, #320F5B 0%, #162E56 49.66%, #124D6A 99.33%)',
                'gradient-nav':
                    'linear-gradient(269.89deg, rgba(45, 167, 179, 0.5) -8.41%, rgba(24, 57, 156, 0.5) 64.31%, rgba(100, 34, 104, 0.5) 113.62%)',
                'gradient-active-tab':
                    'linear-gradient(124.24deg, rgba(135, 68, 174, 0.504) -55.1%, rgba(98, 223, 255, 0.364) 115.67%)',
                'gradient-header':
                    'linear-gradient(269.89deg, rgba(45, 167, 179, 0.5) -8.41%, rgba(24, 57, 156, 0.5) 64.31%, rgba(100, 34, 104, 0.5) 113.62%)',
                'gradient-text': 'linear-gradient(270deg, #60E2FF 0%, #8C98FF 50%, #CC61FF 100%)',
            },
        },
    },
    plugins: [
        plugin(function ({ addComponents }) {
            addComponents({
                '.bottom-line': {
                    position: 'absolute',
                    background: 'linear-gradient(270deg, #60E2FF 0%, #8C98FF 50%, #CC61FF 100%)',
                    height: 'min(3px, 5%)',
                    width: '100%',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
            });
        }),
    ],
};
