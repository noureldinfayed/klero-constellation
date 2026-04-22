'use client'

import { useEffect, useRef, useState } from 'react'
import Reveal from '@/components/ui/Reveal'

type Option = { t: string; s: number }
type Question = { q: string; opts: Option[] }

const QUESTIONS: Question[] = [
  {
    q: 'Un membre de votre famille élargie est-il décédé ces 30 dernières années ?',
    opts: [
      { t: 'Oui, probablement', s: 2 },
      { t: 'Je ne suis pas sûr', s: 1 },
      { t: 'Plusieurs, oui', s: 3 },
      { t: 'Non, aucun', s: 0 },
    ],
  },
  {
    q: 'Y a-t-il eu des branches familiales perdues de vue — cousins, grands-oncles, émigrations ?',
    opts: [
      { t: "Oui, c'est le cas", s: 3 },
      { t: 'Possiblement', s: 2 },
      { t: 'Pas à ma connaissance', s: 0 },
      { t: 'Famille très dispersée', s: 3 },
    ],
  },
  {
    q: "Avez-vous déjà eu le sentiment qu'une succession n'avait pas été entièrement réglée ?",
    opts: [
      { t: 'Oui, un doute persiste', s: 3 },
      { t: 'Non, tout semblait clair', s: 0 },
      { t: "Je l'ignore", s: 1 },
      { t: 'Une zone grise, oui', s: 2 },
    ],
  },
]

type Result = { pct: number; label: string; body: string }

function computeResult(score: number): Result {
  const pct = Math.min(82, 7 + score * 8)
  if (pct < 25) {
    return {
      pct,
      label: 'Votre profil présente un risque modéré.',
      body: "Un doute subsiste cependant. Une vérification gratuite de vos ascendances prend 10 minutes et peut révéler l'inattendu.",
    }
  }
  if (pct < 55) {
    return {
      pct,
      label: "Probabilité significative qu'un héritage vous concerne.",
      body: "Votre configuration familiale correspond à plus de 60% de nos dossiers résolus. Nous vous recommandons un diagnostic approfondi.",
    }
  }
  return {
    pct,
    label: 'Forte probabilité — un dossier vous concerne.',
    body: "Votre profil présente plusieurs signaux typiques de nos dossiers aboutis. Nous vous conseillons vivement d'ouvrir un dossier gratuitement.",
  }
}

export default function EligibilityQuiz() {
  const [step, setStep] = useState(0)
  const [score, setScore] = useState(0)
  const [result, setResult] = useState<Result | null>(null)
  const [displayPct, setDisplayPct] = useState(0)
  const [fading, setFading] = useState(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (result === null) return
    let n = 0
    const target = result.pct
    const tick = () => {
      n = Math.min(target, n + 2)
      setDisplayPct(n)
      if (n < target) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [result])

  const onPick = (s: number) => {
    const newScore = score + s
    const next = step + 1
    if (next < QUESTIONS.length) {
      setFading(true)
      setTimeout(() => {
        setScore(newScore)
        setStep(next)
        setFading(false)
      }, 200)
    } else {
      setScore(newScore)
      setResult(computeResult(newScore))
    }
  }

  const restart = () => {
    setStep(0)
    setScore(0)
    setResult(null)
    setDisplayPct(0)
  }

  const current = QUESTIONS[step]

  return (
    <section
      id="eligibility"
      className="py-16 md:py-[120px] relative"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(29,53,88,.4), transparent 60%)',
      }}
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <Reveal
          className="elig-card relative max-w-[760px] mx-auto p-6 md:p-[56px_56px_48px] border"
          delay={0}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{
              background: 'linear-gradient(180deg, rgba(19,39,66,.85), rgba(7,16,29,.95))',
              boxShadow: '0 40px 120px rgba(0,0,0,.4)',
            }}
          />
          {/* Corner brackets */}
          <span
            aria-hidden="true"
            className="absolute w-5 h-5"
            style={{ top: -1, left: -1, borderTop: '1px solid #c9a961', borderLeft: '1px solid #c9a961' }}
          />
          <span
            aria-hidden="true"
            className="absolute w-5 h-5"
            style={{ bottom: -1, right: -1, borderBottom: '1px solid #c9a961', borderRight: '1px solid #c9a961' }}
          />

          <div className="text-[10px] tracking-[.28em] uppercase text-gold mb-[14px] text-center">
            — Diagnostic confidentiel · 30 secondes
          </div>
          <h3 className="font-serif font-normal text-[30px] md:text-[40px] leading-[1.1] text-center mb-2">
            Êtes-vous <em className="italic text-gold">concerné</em>&nbsp;?
          </h3>
          <p className="font-display italic text-[18px] text-gold-soft text-center mb-10">
            Trois questions, aucune donnée enregistrée.
          </p>

          {/* Progress dots */}
          <div className="flex gap-[6px] justify-center mb-6" aria-hidden="true">
            {QUESTIONS.map((_, i) => (
              <span
                key={i}
                className={`w-8 h-[2px] transition-all duration-300 ${
                  result !== null || i < step
                    ? 'bg-gold-soft'
                    : i === step
                    ? 'bg-gold'
                    : 'bg-rule'
                }`}
              />
            ))}
          </div>

          {result === null ? (
            <div
              className={`transition-opacity duration-200 ${fading ? 'opacity-0' : 'opacity-100'}`}
              aria-live="polite"
            >
              <fieldset className="border-0 p-0 m-0">
                <legend
                  className="font-serif text-[22px] font-normal mb-5 text-center block w-full"
                  style={{ minHeight: 60 }}
                >
                  {current.q}
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-6">
                  {current.opts.map((o) => (
                    <button
                      key={o.t}
                      type="button"
                      onClick={() => onPick(o.s)}
                      aria-label={o.t}
                      className="group bg-transparent border border-rule-strong text-bone px-6 py-5 cursor-pointer font-sans text-[14px] transition-all duration-200 text-left flex justify-between items-center gap-4 hover:border-gold hover:text-gold hover:bg-[rgba(201,169,97,.06)]"
                    >
                      <span>{o.t}</span>
                      <span
                        aria-hidden="true"
                        className="opacity-40 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>
          ) : (
            <div className="text-center" aria-live="polite">
              <div className="font-serif italic text-[88px] md:text-[120px] font-normal text-gold tracking-[-.04em] leading-none mb-4">
                {displayPct}%
              </div>
              <div className="font-display italic text-[20px] text-bone mb-7 leading-[1.4]">
                {result.label}
              </div>
              <div className="text-[14px] text-ink-muted max-w-[480px] mx-auto mb-8 leading-[1.65]">
                {result.body}
              </div>
              <div className="flex gap-[14px] justify-center flex-wrap">
                <a
                  href="#contact"
                  className="inline-block no-underline bg-gold text-navy-0 px-8 py-4 font-sans text-[12px] tracking-[.18em] uppercase font-semibold cursor-pointer transition-all hover:bg-gold-soft hover:-translate-y-[1px] hover:shadow-[0_10px_40px_rgba(201,169,97,.25)]"
                >
                  Ouvrir mon dossier gratuitement →
                </a>
                <button
                  type="button"
                  onClick={restart}
                  className="bg-transparent text-bone px-[30px] py-[15px] border border-[rgba(239,231,211,.3)] cursor-pointer font-sans text-[12px] tracking-[.18em] uppercase transition-all hover:border-gold hover:text-gold"
                >
                  Refaire le test
                </button>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
