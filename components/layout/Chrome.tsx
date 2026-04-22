'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Chrome() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b border-rule"
      style={{
        background: 'rgba(7,16,29,.75)',
        backdropFilter: 'blur(16px) saturate(140%)',
        WebkitBackdropFilter: 'blur(16px) saturate(140%)',
      }}
    >
      <div className="container mx-auto max-w-[1800px] px-5 md:px-8 relative">
        <div className="flex items-center justify-between h-[64px] md:h-[72px] relative z-[2]">
          <a href="#" className="flex items-center gap-3 no-underline" aria-label="Kléro Généalogie — accueil">
            <Image
              src="/images/klero-logo.png"
              alt="Kléro Généalogie"
              width={1022}
              height={313}
              priority
              className="h-[50px] md:h-[56px] w-auto"
            />
            <span className="sr-only">Kléro Généalogie successorale</span>
          </a>

          <nav className="hidden md:flex gap-8 lg:gap-10 items-center">
            <a
              href="#process"
              className="text-bone/85 text-[13px] tracking-[.04em] transition-colors hover:text-gold hover:opacity-100"
            >
              La méthode
            </a>
            <a
              href="#why"
              className="text-bone/85 text-[13px] tracking-[.04em] transition-colors hover:text-gold hover:opacity-100"
            >
              Pourquoi Kléro
            </a>
            <a
              href="#cases"
              className="text-bone/85 text-[13px] tracking-[.04em] transition-colors hover:text-gold hover:opacity-100"
            >
              Dossiers
            </a>
            <a
              href="#eligibility"
              className="text-bone/85 text-[13px] tracking-[.04em] transition-colors hover:text-gold hover:opacity-100"
            >
              Éligibilité
            </a>
            <button
              className="bg-gold text-navy-0 px-[22px] py-[11px] font-sans text-[12px] tracking-[.15em] uppercase font-medium cursor-pointer transition-colors hover:bg-gold-soft"
              type="button"
            >
              Nous contacter
            </button>
          </nav>

          <button
            className="md:hidden bg-transparent border-0 cursor-pointer p-2 text-gold"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="3" y1="8" x2="21" y2="8" />
              <line x1="3" y1="16" x2="21" y2="16" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-5 flex flex-col gap-4 border-t border-rule pt-4">
            <a
              href="#process"
              onClick={() => setOpen(false)}
              className="text-bone/85 text-[13px] tracking-[.04em] hover:text-gold"
            >
              La méthode
            </a>
            <a
              href="#why"
              onClick={() => setOpen(false)}
              className="text-bone/85 text-[13px] tracking-[.04em] hover:text-gold"
            >
              Pourquoi Kléro
            </a>
            <a
              href="#cases"
              onClick={() => setOpen(false)}
              className="text-bone/85 text-[13px] tracking-[.04em] hover:text-gold"
            >
              Dossiers
            </a>
            <a
              href="#eligibility"
              onClick={() => setOpen(false)}
              className="text-bone/85 text-[13px] tracking-[.04em] hover:text-gold"
            >
              Éligibilité
            </a>
            <button
              className="bg-gold text-navy-0 px-[22px] py-[11px] font-sans text-[12px] tracking-[.15em] uppercase font-medium cursor-pointer self-start"
              type="button"
            >
              Nous contacter
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
