export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { navy: '#12345A', brand: '#087EAA', accent: '#F28C28', surface: '#F5F7FA', ink: '#1F2937', muted: '#6B7280' },
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'] },
      boxShadow: { soft: '0 8px 30px rgba(18,52,90,0.08)' },
    },
  },
  plugins: [],
}
