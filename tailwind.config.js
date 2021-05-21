module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        primaryHover: 'var(--primary--hover)',
        bg: 'var(--bg)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
