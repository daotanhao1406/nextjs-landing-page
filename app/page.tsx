import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Features } from "@/components/sections/features";
import { Demo } from "@/components/sections/demo";
import { ValueProduct } from "@/components/sections/value-product";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { Team } from "@/components/sections/team";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { AboutUs } from "@/components/sections/about-us";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/layout/footer";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Demo />
      <LogoCloud />
      <AboutUs />
      <Features />
      <Testimonials />
      <Pricing />
      <ValueProduct />
      {/* <Features /> */}
      {/* <Problem /> */}
      <Team />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}