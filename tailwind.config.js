/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(239 246 255)',
          500: 'rgb(var(--primary))',
          600: 'rgb(37 99 235)',
          700: 'rgb(var(--primary-dark))',
        },
        secondary: 'rgb(var(--secondary))',
        accent: 'rgb(var(--accent))',
        surface: 'rgb(var(--surface))',
        'surface-dark': 'rgb(var(--surface-dark))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section': 'var(--section-padding)',
        'container': 'var(--container-padding)',
      },
      borderRadius: {
        'theme': 'var(--border-radius)',
        'theme-lg': 'var(--border-radius-lg)',
      },
      boxShadow: {
        'theme-sm': 'var(--shadow-sm)',
        'theme': 'var(--shadow-md)',
        'theme-lg': 'var(--shadow-lg)',
        'theme-xl': 'var(--shadow-xl)',
      }
    },
  },
  plugins: [],
}