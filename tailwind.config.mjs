/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#122A22',
        'ink-soft': '#1B3A2F',
        forest: '#24543F',
        'forest-hi': '#3A7259',
        paper: '#F2EDDD',
        'paper-raised': '#EAE2C8',
        gold: '#C68A2E',
        'gold-soft': '#E7C077',
        ash: '#211F19',
        mist: '#E8E4D3',
        'line-paper': '#D8CFB4',
        'line-ink': '#2E4A3E',
        clay: '#95542B',
        instrument: {
          kredit: '#3E6FB0',
          buergschaft: '#2B8C89',
          zuschuss: '#2F8F5B',
          steuer: '#6C4F9E',
          personal: '#C4741F',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        body: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
