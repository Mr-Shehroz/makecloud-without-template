import BlogsSectionContainer from "@/components/BlogsSectionContainer"
import BrandingContainer from "@/components/BrandingContainer"
import ChooseSectionContainer from "@/components/ChooseSectionContainer"
import ContactsSectionContainer from "@/components/ContactsSectionContainer"
import FeaturesSectionContainer from "@/components/FeaturesSectionContainer"
import FooterSectionContainer from "@/components/FooterSectionContainer"
import HeaderContainer from "@/components/HeaderContainer"
import HeroSectionContainer from "@/components/HeroSectionContainer"
import MarqueeContainer from "@/components/MarqueeContainer"
import PartnersSectionContainer from "@/components/PartnersSectionContainer"
import ServicesSectionContainer from "@/components/ServicesSectionContainer"
import TrustedSectionContainer from "@/components/TrustedSectionContainer"

export default function Home() {
  return (
    <div>
      <BrandingContainer />
      <HeaderContainer/>
      <HeroSectionContainer />
      <ServicesSectionContainer />
      <PartnersSectionContainer />
      <ChooseSectionContainer />
      <MarqueeContainer />
      <FeaturesSectionContainer />
      <TrustedSectionContainer />
      <BlogsSectionContainer />
      <ContactsSectionContainer />
      <FooterSectionContainer />
    </div>
  )
}