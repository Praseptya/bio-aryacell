export default function LogoMark({ className = '', bg = '#12345A', fg = '#FFFFFF' }) {
  const s = { fill: 'none', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round' }
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="16" fill={bg} />
      <rect x="21" y="10" width="22" height="44" rx="5.5" stroke={fg} {...s} />
      <path d="M27 28H37M33 24l4 4-4 4" stroke="#F28C28" {...s} />
      <path d="M37 40H27M31 36l-4 4 4 4" stroke={fg} {...s} />
    </svg>
  )
}
