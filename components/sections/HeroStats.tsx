import Reveal from '@/components/ui/Reveal'

export default function HeroStats() {
  return (
    <Reveal
      delay={4}
      className="hero-stats relative z-[2] w-full md:absolute md:right-8 md:bottom-0 md:w-[340px] pt-7 md:px-7 border-t border-rule-strong md:border-t-0 md:border-l md:border-rule-strong mt-12 md:mt-0"
    >
      <div className="text-[10px] tracking-[.25em] uppercase text-gold mb-[10px]">
        Étude INSEE · 2025
      </div>
      <div className="font-serif text-[88px] md:text-[120px] font-normal leading-[.9] tracking-[-.04em] text-bone flex items-baseline">
        7
        <span className="text-gold text-[48px] font-normal ml-1 italic">%</span>
      </div>
      <div className="font-display italic text-[17px] text-gold-soft mt-[14px] leading-[1.4] max-w-[280px]">
        des Français ont un héritage non transmis — souvent sans le savoir.
      </div>
      <div className="mt-7 flex gap-[14px] items-center text-[10px] tracking-[.2em] uppercase text-ink-muted">
        <span>— 4,8 M de personnes</span>
        <span>· 2026</span>
      </div>
    </Reveal>
  )
}
