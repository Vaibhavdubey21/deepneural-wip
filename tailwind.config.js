/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom color palette
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Main primary blue
          50: '#EBF5FF',
          100: '#E1EFFE',
          200: '#C3DDFD',
          300: '#A4CAFE',
          400: '#76A9FA',
          500: '#3B82F6',
          600: '#1C64F2',
          700: '#1A56DB',
          800: '#1E429F',
          900: '#233876',
        },
        secondary: {
          DEFAULT: '#10B981', // Green
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          light: '#1A1A1A',
          lighter: '#2A2A2A',
        },
        light: {
          DEFAULT: '#F3F4F6',
          dark: '#4B5563',
        },
      },

      // Custom font families
      fontFamily: {
        'sans': ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans],
        'mono': ['var(--font-geist-mono)', ...defaultTheme.fontFamily.mono],
        'display': ['Inter', 'Segoe UI', 'sans-serif'],
      },

      // Custom animations
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      // Responsive breakpoints
      screens: {
        'xs': '480px',
        ...defaultTheme.screens,
      },

      // Box shadows
      boxShadow: {
        'custom':
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },

      // Transition and duration
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },

      // Additional custom utilities
      borderRadius: {
        'large': '1rem',
        'extra-large': '2rem',
      },

      // Opacity variations
      opacity: {
        '15': '0.15',
        '85': '0.85',
      },
    },

    // Core theme configuration
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },

  // Plugins
  plugins: [
    // Add any additional Tailwind plugins here
    // Example: require('@tailwindcss/forms')
  ],

  // Dark mode configuration
  darkMode: 'class',
};
