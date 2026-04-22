export default function Constellation() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="star-glow">
          <stop offset="0%" stopColor="#c9a961" stopOpacity="1" />
          <stop offset="100%" stopColor="#c9a961" stopOpacity="0" />
        </radialGradient>
        <filter id="blur">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* Constellation lines */}
      <g stroke="#c9a961" strokeWidth="0.6" fill="none" opacity="0.35">
        <line x1="180" y1="140" x2="340" y2="200" />
        <line x1="340" y1="200" x2="490" y2="150" />
        <line x1="490" y1="150" x2="620" y2="260" />
        <line x1="620" y1="260" x2="780" y2="220" />
        <line x1="780" y1="220" x2="940" y2="320" />
        <line x1="940" y1="320" x2="1120" y2="280" />
        <line x1="1120" y1="280" x2="1260" y2="380" />
        <line x1="1260" y1="380" x2="1420" y2="340" />

        <line x1="340" y1="200" x2="420" y2="380" />
        <line x1="420" y1="380" x2="580" y2="480" />
        <line x1="580" y1="480" x2="720" y2="540" />
        <line x1="720" y1="540" x2="900" y2="620" />
        <line x1="900" y1="620" x2="1080" y2="560" />
        <line x1="1080" y1="560" x2="1260" y2="620" />

        <line x1="620" y1="260" x2="580" y2="480" />
        <line x1="780" y1="220" x2="720" y2="540" />
        <line x1="940" y1="320" x2="900" y2="620" />

        <line x1="260" y1="480" x2="420" y2="380" />
        <line x1="260" y1="480" x2="340" y2="680" />
        <line x1="340" y1="680" x2="520" y2="740" />
        <line x1="520" y1="740" x2="700" y2="780" />
        <line x1="700" y1="780" x2="900" y2="620" />
      </g>

      {/* Stars */}
      <g>
        <circle cx="180" cy="140" r="2.5" fill="#c9a961">
          <animate attributeName="opacity" values=".3;1;.3" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="340" cy="200" r="3" fill="#efe7d3">
          <animate attributeName="opacity" values=".5;1;.5" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="490" cy="150" r="2" fill="#c9a961">
          <animate attributeName="opacity" values=".4;1;.4" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="620" cy="260" r="3.5" fill="#efe7d3">
          <animate attributeName="opacity" values=".6;1;.6" dur="4.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="780" cy="220" r="2.2" fill="#c9a961">
          <animate attributeName="opacity" values=".4;1;.4" dur="3.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="940" cy="320" r="3" fill="#efe7d3">
          <animate attributeName="opacity" values=".5;1;.5" dur="4.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="1120" cy="280" r="2" fill="#c9a961" />
        <circle cx="1260" cy="380" r="3.5" fill="#efe7d3">
          <animate attributeName="opacity" values=".6;1;.6" dur="5.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="1420" cy="340" r="2.5" fill="#c9a961" />

        <circle cx="420" cy="380" r="2.5" fill="#efe7d3">
          <animate attributeName="opacity" values=".4;1;.4" dur="4.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="580" cy="480" r="2" fill="#c9a961" />
        <circle cx="720" cy="540" r="3" fill="#efe7d3">
          <animate attributeName="opacity" values=".5;1;.5" dur="3.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="900" cy="620" r="4" fill="#c9a961">
          <animate attributeName="r" values="4;5;4" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values=".7;1;.7" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="1080" cy="560" r="2.2" fill="#efe7d3" />
        <circle cx="1260" cy="620" r="2.5" fill="#c9a961">
          <animate attributeName="opacity" values=".4;1;.4" dur="4.8s" repeatCount="indefinite" />
        </circle>

        <circle cx="260" cy="480" r="2.5" fill="#efe7d3">
          <animate attributeName="opacity" values=".5;1;.5" dur="3.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="340" cy="680" r="2" fill="#c9a961" />
        <circle cx="520" cy="740" r="3" fill="#efe7d3">
          <animate attributeName="opacity" values=".5;1;.5" dur="4.1s" repeatCount="indefinite" />
        </circle>
        <circle cx="700" cy="780" r="2.5" fill="#c9a961" />

        <circle cx="120" cy="320" r="1.5" fill="#efe7d3" opacity=".6" />
        <circle cx="80" cy="560" r="1" fill="#c9a961" opacity=".5" />
        <circle cx="1500" cy="180" r="1.2" fill="#efe7d3" opacity=".7" />
        <circle cx="1480" cy="640" r="1.5" fill="#c9a961" opacity=".6">
          <animate attributeName="opacity" values=".2;.8;.2" dur="5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* "You are here" node */}
      <g transform="translate(900,620)">
        <circle r="20" fill="url(#star-glow)" opacity="0.5" />
        <circle r="12" fill="url(#star-glow)" opacity="0.8" />
      </g>
    </svg>
  )
}
