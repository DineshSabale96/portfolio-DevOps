export default function Logo({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-hidden="true" className="shrink-0">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FBBF24" /><stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="11" fill="#1F2937" stroke="url(#lg)" strokeWidth="2.5" />
      <text x="24" y="30" textAnchor="middle" fontFamily="'Bricolage Grotesque', system-ui, sans-serif" fontWeight="700" fontSize="21" fill="#F3F4F6">DS</text>
      <rect x="14" y="35" width="20" height="2.6" rx="1.3" fill="url(#lg)" />
    </svg>
  )
}
