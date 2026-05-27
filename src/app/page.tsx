import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Sections from "@/components/Sections";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0d0d14] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Sections />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
