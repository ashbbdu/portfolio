/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        term: {
          bg: '#0d1117',
          panel: '#161b22',
          border: '#30363d',
          text: '#c9d1d9',
          muted: '#8b949e',
          green: '#7ee787',
          cyan: '#79c0ff',
          yellow: '#e3b341',
          red: '#ff7b72',
          purple: '#d2a8ff',
          'bg-l': '#f6f8fa',
          'panel-l': '#ffffff',
          'border-l': '#d0d7de',
          'text-l': '#24292f',
          'muted-l': '#57606a',
          'green-l': '#1a7f37',
          'cyan-l': '#0969da',
          'yellow-l': '#9a6700',
          'red-l': '#cf222e',
          'purple-l': '#8250df',
        },
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        fadeInUp: 'fadeInUp 0.4s ease-out both',
      },
    },
  },
  plugins: [],
};
