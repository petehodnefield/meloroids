/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      0.625: ['0.625rem'],
      0.75: ['0.75rem'],
      0.75: ['0.75rem'],
      0.875: ['0.875rem'],
      1: ['1rem'],
      1.125: ['1.125rem'],
      1.5: ['1.5rem'],
      2: ['2rem'],
      2.5: ['2.5rem'],
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      colors: {
        primary: '#BB39FA',
        secondary: '#C9ABD9',
        tertiary: '#EFECF0',
        quad: '#423D47',
        white: '#ffffff',
        light: '#',
        medium: '#999999',
        dark: '#2c2c2c',
        black: '#111111',
        light: '#e1e1e1',
        blue: '#3B7EE2',
        green: '#37E1EC',
      },
      maxWidth: {
        xxxs: ['12rem'],
        xxs: ['16rem'],
        '660': '660px',
        '26': '26rem',
        '58': '58rem',
        '70': '70rem',
        112: '28rem'

      },
      spacing: {
        88: '22rem',
        112: '28rem'
      },
    },
  },
  plugins: [],
}
