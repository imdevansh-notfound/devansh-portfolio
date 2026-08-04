/** @type {import('tailwindcss').Config} */
export default { content: ['./index.html', './src/**/*.{ts,tsx}'], darkMode: 'class', theme: { extend: { fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] }, colors: { ink: '#111827', muted: '#6B7280', accent: '#2563EB' }, boxShadow: { card: '0 1px 2px rgb(15 23 42 / .04), 0 8px 28px rgb(15 23 42 / .05)' } } }, plugins: [] };
