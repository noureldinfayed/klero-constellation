export default function SiteFooter() {
  return (
    <footer className="border-t border-rule py-10 text-[11px] text-ink-muted tracking-[.15em] uppercase">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8 flex justify-between flex-wrap gap-4">
        <div>
          © MMXXVI · Klero Généalogie · 295 Rue Saint-Jacques, Paris V<sup>e</sup>
        </div>
        <div>
          <a href="#" className="text-ink-muted no-underline hover:text-gold">
            Mentions légales
          </a>{' '}
          ·{' '}
          <a href="#" className="text-ink-muted no-underline hover:text-gold">
            Confidentialité
          </a>{' '}
          · Contrôle notarial M<sup>e</sup> Rambert
        </div>
      </div>
    </footer>
  )
}
