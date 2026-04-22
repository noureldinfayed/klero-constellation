import Reveal from '@/components/ui/Reveal'

export default function FooterCta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-[140px] md:pb-20 text-center">
      {/* vertical gold line */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-[60px] bg-gold"
      />
      <div className="mx-auto max-w-[1800px] px-5 md:px-8">
        <Reveal className="text-[10px] tracking-[.28em] uppercase text-gold mb-7 mt-[88px]">
          — Cabinet Kléro · Depuis 1984
        </Reveal>
        <Reveal
          as="h2"
          delay={1}
          className="font-serif font-normal leading-none tracking-[-.025em] mb-8"
        >
          <span style={{ fontSize: 'clamp(48px,7vw,108px)' }}>
            L&apos;histoire de votre famille
            <br />
            <em className="italic text-gold">n&apos;est pas encore finie.</em>
          </span>
        </Reveal>
        <Reveal
          as="p"
          delay={2}
          className="font-display italic text-gold-soft max-w-[520px] mx-auto mb-10"
        >
          <span style={{ fontSize: 22, lineHeight: 1.45 }}>
            Une prise de contact simple, confidentielle, sans engagement. Nous vous répondons sous
            48 heures ouvrées.
          </span>
        </Reveal>
        <Reveal delay={3} className="flex gap-[14px] justify-center flex-wrap">
          <a
            href="#eligibility"
            className="inline-block no-underline bg-gold text-navy-0 px-8 py-4 font-sans text-[12px] tracking-[.18em] uppercase font-semibold cursor-pointer transition-all hover:bg-gold-soft hover:-translate-y-[1px] hover:shadow-[0_10px_40px_rgba(201,169,97,.25)]"
          >
            Ouvrir un dossier gratuitement →
          </a>
          <a
            href="tel:+33173711363"
            className="inline-block no-underline bg-transparent text-bone px-[30px] py-[15px] border border-[rgba(239,231,211,.3)] cursor-pointer font-sans text-[12px] tracking-[.18em] uppercase transition-all hover:border-gold hover:text-gold"
          >
            01 73 71 13 63
          </a>
        </Reveal>
      </div>
    </section>
  )
}
