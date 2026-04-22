import Reveal from '@/components/ui/Reveal'
import Constellation from './Constellation'
import HeroStats from './HeroStats'

export default function Hero() {
  return (
    <section className="relative overflow-hidden flex items-center py-8 md:py-10 md:pb-14 md:min-h-[calc(100svh-76px)]">
      {/* Constellation background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Constellation />
      </div>

      {/* Markers */}
      <div
        className="marker hidden md:block absolute text-gold font-display italic text-[14px] opacity-60 z-[1]"
        style={{ top: 140, left: '50%' }}
      >
        <span
          aria-hidden="true"
          className="absolute top-[10px] w-[18px] h-px bg-gold"
          style={{ left: -24 }}
        />
        Acte de décès, 1987
      </div>
      <div
        className="marker hidden md:block absolute text-gold font-display italic text-[14px] opacity-60 z-[1]"
        style={{ top: 320, left: '12%' }}
      >
        <span
          aria-hidden="true"
          className="absolute top-[10px] w-[18px] h-px bg-gold"
          style={{ left: -24 }}
        />
        Archives départementales
      </div>
      <div
        className="marker hidden md:block absolute text-gold font-display italic text-[14px] opacity-60 z-[1]"
        style={{ bottom: 180, right: '8%' }}
      >
        <span
          aria-hidden="true"
          className="absolute top-[10px] w-[18px] h-px bg-gold"
          style={{ left: -24 }}
        />
        Vous êtes ici
      </div>

      <div className="relative z-[2] w-full mx-auto max-w-[1800px] px-5 md:px-8">
        <div className="max-w-[860px]">
          <Reveal className="flex items-center gap-[14px] font-sans text-[11px] tracking-[.28em] uppercase text-gold mb-6">
            <span aria-hidden="true" className="inline-block w-10 h-px bg-gold" />
            Cabinet de généalogie successorale · Paris
          </Reveal>

          <Reveal
            as="h1"
            delay={1}
            className="font-serif font-normal leading-[.95] tracking-[-.025em] text-bone mb-6"
          >
            <span
              className="block"
              style={{ fontSize: 'clamp(40px, 5.2vw, 88px)', lineHeight: '.95' }}
            >
              Ce que votre famille
              <br />a{' '}
              <span className="relative inline-block">
                <em className="not-italic">
                  <span className="italic text-gold font-normal">oublié.</span>
                </em>
                <span
                  aria-hidden="true"
                  className="absolute left-[-4px] right-[-4px] h-[6px] -z-10"
                  style={{
                    bottom: '.15em',
                    background:
                      'radial-gradient(ellipse, rgba(201,169,97,.35), transparent 70%)',
                  }}
                />
              </span>
              <br />
              Nous le <span className="italic text-gold">retrouvons.</span>
            </span>
          </Reveal>

          <Reveal
            as="p"
            delay={2}
            className="font-display italic text-gold-soft max-w-[540px] mb-8"
          >
            <span style={{ fontSize: 'clamp(18px, 1.6vw, 22px)', lineHeight: 1.45 }}>
              Sept familles françaises sur cent ignorent l&apos;existence d&apos;un héritage qui leur
              revient — compte bancaire dormant, parcelle oubliée, legs non réclamé. Nous remontons
              le fil.
            </span>
          </Reveal>

          <Reveal delay={3} className="flex gap-4 items-center flex-wrap">
            <a
              href="#eligibility"
              className="inline-block no-underline bg-gold text-navy-0 px-8 py-4 font-sans text-[12px] tracking-[.18em] uppercase font-semibold cursor-pointer transition-all duration-[.25s] hover:bg-gold-soft hover:-translate-y-[1px] hover:shadow-[0_10px_40px_rgba(201,169,97,.25)]"
            >
              Vérifier mon éligibilité →
            </a>
            <button
              type="button"
              className="bg-transparent text-bone px-[30px] py-[15px] border border-[rgba(239,231,211,.3)] cursor-pointer font-sans text-[12px] tracking-[.18em] uppercase transition-all hover:border-gold hover:text-gold"
            >
              J&apos;ai été contacté
            </button>
          </Reveal>
        </div>

        <HeroStats />
      </div>
    </section>
  )
}
