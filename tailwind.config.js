import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        customPink: '#FF7BAC',
        darkPink: '#FF3C80'
      },
      boxShadow: {
        cardShadow: '0px 5px 15px rgba(203,213,225,1)'
      }
    },
    screens: {
      xs: { max: '639px' },
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  darkMode: 'class',
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: '#FF7BAC',
            foreground: '#FFFFFF'
          },
          focus: 'yellow'
        }
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: '#FF3C80',
            foreground: '#FFFFFF'
          },
          focus: '#BEF264'
        }
      }
    }
  })]
}
