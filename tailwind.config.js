/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundDefault: 'var(--background-default)',
        backgroundSecondary: 'var(--background-secondary)',
        text: 'var(--text)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
      },
    },
  },
  plugins: [],
};
