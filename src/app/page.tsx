import BlogsSection from "@/components/BlogsSection";
import Branding from "@/components/branding";
import ChooseSection from "@/components/ChooseSection";
import ContactsSection from "@/components/ContactsSection";
import FeaturesSection from "@/components/FeaturesSection";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/marquee";
import PartnersSection from "@/components/PartnersSection";
import ServicesSection from "@/components/ServicesSection";
import TrustedSection from "@/components/TrustedSection";

export default function Home() {
  return (
    <div>
      <Branding />
      <Header />
      <HeroSection />
      <ServicesSection />
      <PartnersSection />
      <ChooseSection />
      <Marquee />
      <FeaturesSection />
      <TrustedSection />
      <BlogsSection />
      <ContactsSection />
      <FooterSection />
    </div>
  );
}
