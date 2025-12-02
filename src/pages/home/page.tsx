import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import CertificationsSection from './components/CertificationsSection'
import ExperienceSection from './components/ExperienceSection'
import CTASection from './components/CTASection'

function HomePage() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificationsSection />
      <ExperienceSection />
      <CTASection />
    </div>
  )
}

export default HomePage