'use client'
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
<main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
