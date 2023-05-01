/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const plugin = require('tailwindcss/plugin');
// eslint-disable-next-line no-undef
module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'ethnocentric': ['Ethnocentric', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu' ,'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue' ,'sans-serif'],
                'tt-octosquares': ['TT Octosquares', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu' ,'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue' ,'sans-serif'],
                'rollbox': ['Rollbox', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu' ,'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue' ,'sans-serif'], 
            },
            backgroundImage: {
                'gradient-main': 'linear-gradient(107.7deg, #320F5B 0%, #162E56 49.66%, #124D6A 99.33%)',
                'gradient-main-mute': 'linear-gradient(107.7deg, rgba(50, 15, 91, 0.1) 0%, rgba(22, 46, 86, 0.1) 49.66%, rgba(18, 77, 106, 0.1) 99.33%)',
                'gradient-nav':
                    'linear-gradient(269.89deg, rgba(45, 167, 179, 0.5) -8.41%, rgba(24, 57, 156, 0.5) 64.31%, rgba(100, 34, 104, 0.5) 113.62%)',
                'gradient-tab-list':
                    'linear-gradient(90.7deg, rgba(135, 68, 174, 0.553) -59.08%, rgba(98, 223, 255, 0.35) 112.63%)',
                'gradient-tab-list-mute':
                    'linear-gradient(269.91deg, rgba(4, 223, 243, 0.17) -28.06%, rgba(56, 105, 254, 0.17) 55.29%, rgba(206, 15, 219, 0.17) 127%)',
                'gradient-active-tab':
                    'linear-gradient(124.24deg, rgba(135, 68, 174, 0.504) -55.1%, rgba(98, 223, 255, 0.364) 115.67%)',
                'gradient-header':
                    'linear-gradient(269.89deg, rgba(45, 167, 179, 0.5) -8.41%, rgba(24, 57, 156, 0.5) 64.31%, rgba(100, 34, 104, 0.5) 113.62%)',
                'gradient-text': 'linear-gradient(270deg, #60E2FF 0%, #8C98FF 50%, #CC61FF 100%)',
                'gradient-text-v2': 'linear-gradient(90.24deg, #01EAF2 0.21%, #3B65FF 57.08%, #D70BDA 102.91%)',
                'gradient-metamask-btn': 'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), linear-gradient(90.05deg, #6C71F7 -17.07%, rgba(151, 36, 164, 0.900001) 75.94%, rgba(234, 0, 154, 0.8) 145.22%)',
                'gradient-mint-btn': 'linear-gradient(270deg, rgba(96, 226, 255, 0.7) 0%, rgba(140, 152, 255, 0.7) 50%, rgba(204, 97, 255, 0.7) 100%);',
                'gradient-line-right': 'linear-gradient(137deg,#D70BDA 0.5%,rgba(1,234,242,0) 50%)',
                'gradient-line-left': 'linear-gradient(270deg,#D70BDA 0.5%,rgba(1,234,242,0) 50%)',
            },
            colors: {
                'light-blue': '#53A2FF',
                'default-glass': 'rgba(51, 51, 51, 0.5)',
                'light-glass': 'rgba(192, 192, 192, 0.1)',
                'light-glass-mute': 'rgba(217, 217, 217, 0.1)',
                'dark-glass': 'rgba(17, 17, 17, 0.7)',
                'dark-violet': '#22202F'
            },
            spacing: {
                'height-navigation': '60px',
                'width-sidebar-community': '5rem',
                'size-video-controls': '50px'
            }
        },
    },
    plugins: [
        plugin(function ({ addComponents , theme}) {
            addComponents({
                '.gradient-text': {
                    backgroundImage: theme('backgroundImage.gradient-text'),
                    color: theme('colors.transparent'),
                    backgroundClip: 'text'
                },
                '.gradient-text-v2': {
                    backgroundImage: theme('backgroundImage.gradient-text-v2'),
                    color: theme('colors.transparent'),
                    backgroundClip: 'text'
                },
                '.bottom-line': {
                    position: 'absolute',
                    background: 'linear-gradient(270deg, #60E2FF 0%, #8C98FF 50%, #CC61FF 100%)',
                    height: 'min(3px, 7%)',
                    width: '100%',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                '.top-line': {
                    position: 'absolute',
                    background: 'linear-gradient(270deg, #60E2FF 0%, #8C98FF 50%, #CC61FF 100%)',
                    height: 'min(3px, 7%)',
                    width: '100%',
                    top: '0',
                    left: '0',
                    right: '0',
                },
                '.bg-custom-center': {
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% auto'
                }
            });
        }),
        // eslint-disable-next-line no-undef
        require('@tailwindcss/line-clamp')
    ],
};
