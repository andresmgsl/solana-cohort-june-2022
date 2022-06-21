/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');
const typography = require('@tailwindcss/typography');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['Rubik'],
    },
    screens: { ...defaultTheme.screens },
  },
  plugins: [typography],
};
