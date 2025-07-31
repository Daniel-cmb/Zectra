import Hero from "@/components/hero"
import AboutPreview from "@/components/about-preview"
import SolutionsPreview from "@/components/solutions-preview"
import InvestorsCTA from "@/components/investors-cta"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <AboutPreview />
      <SolutionsPreview />
      <InvestorsCTA />
    </div>
  )
}
