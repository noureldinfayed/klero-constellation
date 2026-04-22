type Props = {
  className?: string
  width?: number
  height?: number
}

export default function Logo({ className, width, height }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1022 313"
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="Kléro Généalogie"
    >
      {/* Tree of life icon */}
      <g
        transform="translate(114 156.5)"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      >
        {/* outer crown canopy */}
        <path d="M -80 -90 C -80 -140 -40 -150 0 -150 C 40 -150 80 -140 80 -90 C 80 -40 50 -20 0 -20 C -50 -20 -80 -40 -80 -90 Z" />
        {/* outer root canopy (mirror) */}
        <path d="M -70 80 C -70 120 -35 135 0 135 C 35 135 70 120 70 80 C 70 40 40 25 0 25 C -40 25 -70 40 -70 80 Z" />

        {/* trunk */}
        <path d="M -4 -20 C -2 -10 -8 5 -6 12 C -4 19 -2 23 -3 25" />
        <path d="M  4 -20 C  2 -10  8 5  6 12 C  4 19  2 23  3 25" />

        {/* branches inside crown */}
        <path d="M 0 -20 C -10 -40 -25 -60 -45 -70" />
        <path d="M 0 -20 C  10 -40  25 -60  45 -70" />
        <path d="M 0 -25 C -5 -60 -15 -85 -25 -110" />
        <path d="M 0 -25 C  5 -60  15 -85  25 -110" />
        <path d="M 0 -30 L 0 -130" />

        {/* scattered leaves — small ovals across the crown */}
        <ellipse cx="-55" cy="-115" rx="6" ry="9" transform="rotate(-20 -55 -115)" />
        <ellipse cx="-30" cy="-128" rx="5.5" ry="9" transform="rotate(-10 -30 -128)" />
        <ellipse cx="0" cy="-135" rx="6" ry="9" />
        <ellipse cx="30" cy="-128" rx="5.5" ry="9" transform="rotate(10 30 -128)" />
        <ellipse cx="55" cy="-115" rx="6" ry="9" transform="rotate(20 55 -115)" />
        <ellipse cx="-55" cy="-90" rx="5" ry="8" transform="rotate(-35 -55 -90)" />
        <ellipse cx="-30" cy="-85" rx="5" ry="8" transform="rotate(-20 -30 -85)" />
        <ellipse cx="30" cy="-85" rx="5" ry="8" transform="rotate(20 30 -85)" />
        <ellipse cx="55" cy="-90" rx="5" ry="8" transform="rotate(35 55 -90)" />
        <ellipse cx="-15" cy="-60" rx="4.5" ry="7" transform="rotate(-25 -15 -60)" />
        <ellipse cx="15" cy="-60" rx="4.5" ry="7" transform="rotate(25 15 -60)" />

        {/* root tendrils */}
        <path d="M 0 25 C -12 45 -28 65 -45 75" />
        <path d="M 0 25 C  12 45  28 65  45 75" />
        <path d="M 0 30 C -5 60 -15 90 -22 115" />
        <path d="M 0 30 C  5 60  15 90  22 115" />
        <path d="M 0 30 L 0 120" />
      </g>

      {/* KLÉRO wordmark */}
      <text
        x="240"
        y="158"
        fill="currentColor"
        fontFamily="var(--font-playfair), Georgia, serif"
        fontSize="168"
        fontWeight="400"
        letterSpacing="4"
        textLength="560"
        lengthAdjust="spacingAndGlyphs"
      >
        KLÉRO
      </text>

      {/* GÉNÉALOGIE subline */}
      <text
        x="246"
        y="245"
        fill="currentColor"
        fontFamily="var(--font-manrope), system-ui, sans-serif"
        fontSize="50"
        fontWeight="500"
        letterSpacing="14"
        textLength="540"
        lengthAdjust="spacingAndGlyphs"
      >
        GÉNÉALOGIE
      </text>
    </svg>
  )
}
