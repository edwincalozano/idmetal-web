/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'idm-red':        '#E8473F',
        'idm-red-dark':   '#C93B34',
        'idm-yellow':     '#F5A623',
        'idm-yellow-dark':'#D9901F',
        'idm-dark':       '#2C2C2C',
        'idm-gray':       '#4A4A4A',
        'idm-bg':         '#0F0F0F',
        'idm-surface':    '#1A1A1A',
        'idm-light-bg':   '#F8F7F5',
        'idm-text-light': '#E8E6E1',
        'idm-text-muted': '#9A9490',
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        inter:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
