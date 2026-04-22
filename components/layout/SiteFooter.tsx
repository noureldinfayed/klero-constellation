export default function SiteFooter() {
  return (
    <footer className="border-t border-rule py-10 text-[11px] text-ink-muted tracking-[.15em] uppercase">
      <div className="mx-auto max-w-[1800px] px-5 md:px-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <span>
            © MMXXVI · Kléro Généalogie · 295 Rue Saint-Jacques, Paris V<sup>e</sup>
          </span>
          <a
            href="tel:+33173711363"
            className="text-ink-muted no-underline hover:text-gold"
          >
            01 73 71 13 63
          </a>
          <a
            href="mailto:accueil@klero.fr"
            className="text-ink-muted no-underline hover:text-gold normal-case tracking-[.08em]"
          >
            accueil@klero.fr
          </a>
        </div>
        <div className="flex flex-wrap gap-x-3">
          <a href="#" className="text-ink-muted no-underline hover:text-gold">
            Mentions légales
          </a>
          <span aria-hidden="true">·</span>
          <a href="#" className="text-ink-muted no-underline hover:text-gold">
            Confidentialité
          </a>
          <span aria-hidden="true">·</span>
          <span>
            Contrôle notarial M<sup>e</sup> Rambert
          </span>
        </div>
      </div>
    </footer>
  )
}
