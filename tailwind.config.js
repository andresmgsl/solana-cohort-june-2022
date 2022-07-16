/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');
const typography = require('@tailwindcss/typography');

module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                // Primary
                primary: '#e37542',
                'primary-focus': '#ffffff',

                // Secondary
                secondary: '#F64B62',

                // Miscelaneous
                neutral: '#1B1817',
                base: '#26262B',
                'base-content': '#ffffff',
                line: '#666666',
                
            },
            textColor: {
                secondary: '#999999',
            },
            width: {
                '98': '28rem',
            },
            borderWidth: {
                '1.5': '1.5px',
                '3': '3px',
            },
            screens: {
                '2lg': '1111px',
            },
        },
        fontFamily: {
            sans: ['Rubik'],
        },
        screens: { ...defaultTheme.screens },
    },
    plugins: [typography],
};
