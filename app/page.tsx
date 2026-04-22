import Chrome from '@/components/layout/Chrome'
import SiteFooter from '@/components/layout/SiteFooter'
import Hero from '@/components/sections/Hero'
import Method from '@/components/sections/Method'
import Cases from '@/components/sections/Cases'
import EligibilityQuiz from '@/components/sections/EligibilityQuiz'
import FooterCta from '@/components/sections/FooterCta'

export default function Page() {
  return (
    <>
      <Chrome />
      <main className="relative z-[2]">
        <Hero />
        <Method />
        <Cases />
        <EligibilityQuiz />
        <FooterCta />
      </main>
      <SiteFooter />
    </>
  )
}
