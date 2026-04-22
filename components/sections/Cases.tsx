import Reveal from '@/components/ui/Reveal'

type Case = {
  n: string
  loc: string
  quote: string
  by: string
  story: React.ReactNode
  amount: string
  sub: string
}

const CASES: Case[] = [
  {
    n: '№ 04.118',
    loc: 'Lyon · Rhône · Mars 2025',
    quote: "Je n'avais jamais entendu parler de cette grand-tante.",
    by: '— Mme Lefèvre, 58 ans, institutrice',
    story: (
      <>
        Succession ouverte en 1997 jamais close. Livret d&apos;épargne, appartement XV
        <sup>e</sup>, collection de lettres de la guerre. 4 branches d&apos;héritiers localisées
        en 7 mois.
      </>
    ),
    amount: '184 200 €',
    sub: '4 héritiers · 7 mois',
  },
  {
    n: '№ 04.203',
    loc: 'Bordeaux · Gironde · Sept. 2025',
    quote: 'Un simple appel. Je pensais à une arnaque.',
    by: '— M. & Mme Caron, artisans',
    story: (
      <>
        Cousin germain décédé célibataire en 2018. Succession dormante répartie entre trois
        banques. Filiation reconstituée sur cinq générations.
      </>
    ),
    amount: '72 400 €',
    sub: '2 héritiers · 5 mois',
  },
  {
    n: '№ 04.271',
    loc: 'Marseille · Bouches-du-Rhône · Févr. 2026',
    quote: "On nous avait dit que c'était perdu.",
    by: '— Famille Moretti, descendants italiens',
    story: (
      <>
        Propriété rurale inscrite sous patronyme francisé, échappée à trois notaires successifs.
        340 actes, 12 archives départementales, 2 recherches internationales.
      </>
    ),
    amount: '312 800 €',
    sub: '7 héritiers · 11 mois',
  },
  {
    n: '№ 04.289',
    loc: 'Strasbourg · Bas-Rhin · Avr. 2026',
    quote: "Ma mère en parlait comme d'un mystère.",
    by: '— M. Weber, médecin',
    story: (
      <>
        Livrets d&apos;épargne alsaciens ouverts en 1952, transférés sans adresse connue après
        1968. Identification par recoupement de registres ecclésiastiques.
      </>
    ),
    amount: '58 700 €',
    sub: '1 héritier · 4 mois',
  },
]

const COUNTERS = [
  { k: 'Actifs restitués', v: '47,2 M€' },
  { k: 'Familles réunies', v: '2 184' },
  { k: 'Depuis', v: '1984' },
]

export default function Cases() {
  return (
    <section id="cases" className="py-20 md:pt-10 md:pb-[140px] relative">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 md:items-end mb-12 md:mb-[72px]">
          <div>
            <Reveal className="flex items-center gap-[14px] text-[11px] tracking-[.28em] uppercase text-gold mb-6">
              <span aria-hidden="true" className="w-8 h-px bg-gold" />— Dossiers Kléro · Archives
              publiques
            </Reveal>
            <Reveal
              as="h2"
              delay={1}
              className="font-serif font-normal leading-[1.02] tracking-[-.02em]"
            >
              <span style={{ fontSize: 'clamp(44px,5.5vw,80px)' }}>
                Des histoires
                <br />
                qui <em className="italic text-gold">finissent bien.</em>
              </span>
            </Reveal>
          </div>

          <Reveal delay={2} className="flex gap-8 md:gap-12 flex-wrap">
            {COUNTERS.map((c) => (
              <div key={c.k}>
                <div className="text-[10px] tracking-[.22em] uppercase text-ink-muted mb-2">
                  {c.k}
                </div>
                <div className="font-serif italic text-[36px] md:text-[44px] text-gold font-normal leading-none">
                  {c.v}
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <div>
          {CASES.map((c) => (
            <Reveal
              key={c.n}
              as="article"
              className="case-row relative group grid md:grid-cols-[80px_1.3fr_1fr_160px] grid-cols-[50px_1fr] gap-4 md:gap-12 py-7 md:py-10 border-b border-rule items-center cursor-pointer transition-[background] duration-300 hover:bg-[linear-gradient(90deg,rgba(29,53,88,.25),transparent_70%)]"
            >
              {/* left bar */}
              <span
                aria-hidden="true"
                className="absolute left-[-24px] top-0 bottom-0 w-[2px] bg-gold origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-[400ms]"
              />

              <div className="font-serif italic text-[48px] text-gold font-normal leading-none tracking-[-.02em]">
                {c.n}
              </div>

              <div className="md:col-auto col-start-2">
                <div className="text-[10px] tracking-[.22em] uppercase text-ink-muted mb-3">
                  {c.loc}
                </div>
                <div className="font-display italic leading-[1.25] text-bone mb-3" style={{ fontSize: 'clamp(22px,2vw,30px)' }}>
                  {c.quote}
                </div>
                <div className="text-[12px] text-ink-muted tracking-[.06em]">{c.by}</div>
              </div>

              <div className="md:col-auto col-start-2 text-[13.5px] leading-[1.65] text-ink-muted">
                {c.story}
              </div>

              <div className="md:text-right md:col-auto col-start-1 col-span-2 md:border-0 md:pt-0 border-t border-dashed border-rule pt-4 mt-3 md:mt-0 flex md:block items-baseline gap-4">
                <div className="text-[9px] tracking-[.24em] uppercase text-ink-muted md:mb-[6px] mb-0">
                  Restitué
                </div>
                <div className="font-serif italic text-[32px] md:text-[40px] text-gold font-normal leading-none tracking-[-.02em]">
                  {c.amount}
                </div>
                <div className="text-[10px] tracking-[.18em] uppercase text-ink-muted md:mt-2 md:ml-0 ml-auto mt-0">
                  {c.sub}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            type="button"
            className="bg-transparent text-bone px-[30px] py-[15px] border border-[rgba(239,231,211,.3)] cursor-pointer font-sans text-[12px] tracking-[.18em] uppercase transition-all hover:border-gold hover:text-gold"
          >
            Consulter l&apos;ensemble des dossiers publics →
          </button>
        </div>
      </div>
    </section>
  )
}
