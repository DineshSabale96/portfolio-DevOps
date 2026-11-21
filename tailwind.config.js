export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827',    // page background
        panel: '#1F2937',  // cards and panels
        line: '#374151',   // borders (slate)
        mist: '#F3F4F6',   // main text
        dim: '#9CA3AF',    // secondary text
        amber: '#F59E0B',  // primary accent
        gold: '#FBBF24',   // light accent
        pass: '#34D399',   // pipeline success
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
