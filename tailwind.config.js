/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Kept as 'primary' so legacy component classes still resolve */
        primary: {
          50:  '#F5F5F0',
          100: '#EEEDE8',
          200: '#D9D9D4',
          300: '#BEBEBA',
          400: '#9A9A96',
          500: '#737370',
          600: '#555552',
          700: '#3A3A38',
          800: '#232320',
          900: '#111110',
          950: '#080808',
          border:         '#2A2A28',
          brandDark:      '#111111',
          herobg:         '#0D0D0D',
          brandGreen:     '#111111',
          brandGreenDark: '#0D0D0D',
        },
        neutral: {
          50:  '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
        accent: {
          DEFAULT: '#C8A96E',
          light:   '#F0E6D0',
          dark:    '#9A7A45',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight:   '-0.02em',
        widest:  '0.15em',
        ultra:   '0.22em',
      },
      boxShadow: {
        'subtle':     '0 1px 3px 0 rgba(0,0,0,0.08)',
        'card':       '0 2px 16px 0 rgba(0,0,0,0.06)',
        'card-hover': '0 12px 40px 0 rgba(0,0,0,0.12)',
        'dark':       '0 4px 24px 0 rgba(0,0,0,0.45)',
        'dark-lg':    '0 16px 48px 0 rgba(0,0,0,0.55)',
        /* Legacy aliases */
        'emerald-sm': '0 1px 3px 0 rgba(0,0,0,0.08)',
        'emerald':    '0 4px 16px 0 rgba(0,0,0,0.10)',
        'emerald-lg': '0 8px 32px 0 rgba(0,0,0,0.14)',
      },
    },
  },
  plugins: [],
}
