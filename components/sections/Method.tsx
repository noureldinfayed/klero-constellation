import Reveal from '@/components/ui/Reveal'

type Step = {
  numeral: 'I' | 'II' | 'III'
  tag: string
  title: string
  body: string
  meta: { label: string; value: string }[]
}

const STEPS: Step[] = [
  {
    numeral: 'I',
    tag: 'Identification',
    title: 'Nous identifions les successions dormantes.',
    body: "Notre moteur de recherche croise les bases bancaires, notariales et d'état civil pour repérer les successions où une partie de l'héritage n'a jamais été transmise.",
    meta: [
      { label: 'Bases consultées', value: '47' },
      { label: 'Précision', value: '99,4 %' },
    ],
  },
  {
    numeral: 'II',
    tag: 'Investigation',
    title: 'Notre équipe constitue votre dossier.',
    body: "Généalogistes diplômés et juristes en droit des successions, supervisés par un notaire. Collecte du mandat, recherche d'actifs, reconstitution de la filiation — tout en votre nom.",
    meta: [
      { label: 'Experts', value: '28' },
      { label: 'Durée moyenne', value: '6 mois' },
    ],
  },
  {
    numeral: 'III',
    tag: 'Restitution',
    title: 'Nous vous restituons ce qui vous revient.',
    body: "Versement supervisé par notaire, conforme aux règles dévolutives. Aucun frais d'avance, aucune commission si rien n'est retrouvé — c'est notre engagement.",
    meta: [
      { label: 'Sans résultat', value: '0 €' },
      { label: 'Contrôle', value: 'Notarial' },
    ],
  },
]

export default function Method() {
  return (
    <section id="process" className="py-20 md:py-[140px] relative">
      <div className="mx-auto max-w-[1800px] px-5 md:px-8">
        <div className="max-w-[920px] mb-12 md:mb-[88px]">
          <Reveal className="flex items-center gap-[14px] text-[11px] tracking-[.28em] uppercase text-gold mb-6">
            <span aria-hidden="true" className="w-8 h-px bg-gold" />— Notre méthode · trois temps
          </Reveal>
          <Reveal
            as="h2"
            delay={1}
            className="font-serif font-normal leading-[1.02] tracking-[-.02em] mb-6"
          >
            <span style={{ fontSize: 'clamp(44px,5.5vw,80px)' }}>
              De la donnée dormante à <em className="italic text-gold">l&apos;héritier retrouvé.</em>
            </span>
          </Reveal>
          <Reveal
            as="p"
            delay={2}
            className="font-display italic text-gold-soft max-w-[620px]"
          >
            <span style={{ fontSize: 20 }}>
              Trois étapes, pas une de plus. Encadrées par un notaire, rigoureusement
              confidentielles, sans aucun frais si aucun actif n&apos;est retrouvé.
            </span>
          </Reveal>
        </div>

        <div className="relative">
          {/* horizontal connecting line at y=60px */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-[5%] right-[5%] h-px z-0"
            style={{
              top: 60,
              background:
                'linear-gradient(90deg,transparent,rgba(201,169,97,.4) 10%,rgba(201,169,97,.4) 90%,transparent)',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 relative z-[1]">
            {STEPS.map((s, i) => (
              <Reveal
                key={s.numeral}
                as="article"
                delay={i as 0 | 1 | 2}
                className="step-card group relative p-[40px_32px] border border-rule transition-all duration-[400ms] hover:border-gold hover:-translate-y-[6px] hover:shadow-[0_30px_80px_rgba(0,0,0,.4)]"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(19,39,66,.5), rgba(12,26,46,.3))',
                    backdropFilter: 'blur(4px)',
                  }}
                />
                <div className="flex justify-between items-center mb-8">
                  <div className="relative grid place-items-center w-16 h-16 rounded-full border border-gold text-gold font-serif italic text-[28px] bg-navy-0">
                    {s.numeral}
                    <span
                      aria-hidden="true"
                      className="absolute rounded-full"
                      style={{ inset: 4, border: '1px solid rgba(201,169,97,.3)' }}
                    />
                  </div>
                  <div className="text-[10px] tracking-[.22em] uppercase text-ink-muted">
                    {s.tag}
                  </div>
                </div>
                <h3 className="font-serif text-[30px] font-normal leading-[1.15] tracking-[-.01em] mb-[18px]">
                  {s.title}
                </h3>
                <p className="text-[14.5px] leading-[1.65] text-ink-muted mb-6">{s.body}</p>
                <div className="flex gap-6 pt-5 border-t border-rule text-[10px] tracking-[.18em] uppercase text-ink-muted">
                  {s.meta.map((m) => (
                    <span key={m.label}>
                      {m.label} · <b className="text-gold font-medium">{m.value}</b>
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
