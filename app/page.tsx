import dynamic from 'next/dynamic'
import Chrome from '@/components/layout/Chrome'
import SiteFooter from '@/components/layout/SiteFooter'
import Hero from '@/components/sections/Hero'
import Method from '@/components/sections/Method'
import WhyUs from '@/components/sections/WhyUs'
import Cases from '@/components/sections/Cases'
import FooterCta from '@/components/sections/FooterCta'

const EligibilityQuiz = dynamic(
  () => import('@/components/sections/EligibilityQuiz'),
  {
    loading: () => (
      <section
        id="eligibility"
        className="py-16 md:py-[120px] min-h-[560px]"
        aria-hidden="true"
      />
    ),
  },
)

export default function Page() {
  return (
    <>
      <Chrome />
      <main className="relative z-[2]">
        <Hero />
        <Method />
        <WhyUs />
        <Cases />
        <EligibilityQuiz />
        <FooterCta />
      </main>
      <SiteFooter />
    </>
  )
}
