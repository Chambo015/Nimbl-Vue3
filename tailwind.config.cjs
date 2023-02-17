/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'ethnocentric': ['Ethnocentric', 'Inter', '-apple-system', 'Helvetica Neue', 'sans-serif'],
                'tt-octosquares': ['TT Octosquares', 'Inter', '-apple-system', 'Helvetica Neue', 'sans-serif']
            }
        },
    },
    plugins: [],
};
