/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        backgroundForeground: 'var(--background-foreground)',
        text: 'var(--text)',
        textSecondary: 'var(--text-secondary)',
        primary: 'var(--primary)',
        primaryForeground: 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        secondaryForeground: 'var(--secondary-foreground)',
        accent: 'var(--accent)',
        accentForeground: 'var(--accent-foreground)',
      },
    },
  },
  plugins: [],
};
