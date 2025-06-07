'use client'
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
