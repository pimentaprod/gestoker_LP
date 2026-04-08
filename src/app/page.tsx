import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import CtaBanner from "@/components/CtaBanner";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CtaBanner />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
