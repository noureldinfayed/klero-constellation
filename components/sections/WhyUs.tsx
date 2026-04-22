import Reveal from '@/components/ui/Reveal'

type Value = {
  kicker: string
  title: string
  body: string
  proof: string
}

const VALUES: Value[] = [
  {
    kicker: '01',
    title: 'Service expert tout-en-un',
    body: "Généalogistes, juristes, archivistes et notaire superviseur sous un même toit. Vous ne gérez ni les démarches administratives, ni les allers-retours en mairie : nous prenons tout en charge en votre nom.",
    proof: '28 experts internes',
  },
  {
    kicker: '02',
    title: 'Zéro frais sans résultat',
    body: "Aucun honoraire d'avance, aucun abonnement, aucune surprise. Nos honoraires sont prélevés uniquement sur les actifs effectivement restitués — si rien n'est retrouvé, vous ne payez rien.",
    proof: 'Engagement notarié',
  },
  {
    kicker: '03',
    title: 'Démarches optimisées',
    body: "Accès direct à plus de 47 bases notariales, bancaires et d'état civil. Nos dossiers aboutissent en moyenne en 6 mois — là où une démarche individuelle peut en prendre plusieurs années sans garantie.",
    proof: '6 mois en moyenne',
  },
]

export default function WhyUs() {
  return (
    <section id="why" className="py-20 md:py-[140px] relative">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="max-w-[920px] mb-12 md:mb-[72px]">
          <Reveal className="flex items-center gap-[14px] text-[11px] tracking-[.28em] uppercase text-gold mb-6">
            <span aria-hidden="true" className="w-8 h-px bg-gold" />— Pourquoi choisir Kléro
          </Reveal>
          <Reveal
            as="h2"
            delay={1}
            className="font-serif font-normal leading-[1.02] tracking-[-.02em] mb-6"
          >
            <span style={{ fontSize: 'clamp(44px,5.5vw,80px)' }}>
              Des centaines d&apos;héritiers
              <br />
              <em className="italic text-gold">retrouvés chaque mois.</em>
            </span>
          </Reveal>
          <Reveal
            as="p"
            delay={2}
            className="font-display italic text-gold-soft max-w-[620px]"
          >
            <span style={{ fontSize: 20 }}>
              Quarante ans de pratique, un seul engagement : vous restituer ce qui vous revient,
              sans friction, sans avance, sans compromis sur la confidentialité.
            </span>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-rule">
          {VALUES.map((v, i) => (
            <Reveal
              key={v.kicker}
              as="article"
              delay={i as 0 | 1 | 2}
              className="relative p-8 md:p-12 bg-navy-0 transition-colors duration-[400ms] hover:bg-[rgba(19,39,66,0.4)]"
            >
              <div className="flex items-baseline justify-between mb-8">
                <span className="font-serif italic text-[36px] text-gold leading-none tracking-[-.02em]">
                  {v.kicker}
                </span>
                <span className="text-[10px] tracking-[.22em] uppercase text-ink-muted">
                  {v.proof}
                </span>
              </div>
              <h3 className="font-serif text-[26px] md:text-[28px] font-normal leading-[1.2] tracking-[-.01em] mb-5">
                {v.title}
              </h3>
              <p className="text-[14.5px] leading-[1.65] text-ink-muted">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
