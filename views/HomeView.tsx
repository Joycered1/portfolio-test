import Navbar from "@/shared/Navbar";
import Footer from "@/shared/Footer";
import Hero from "@/components/home/Hero";
import Work from "@/components/home/Work";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Contact from "@/components/home/Contact";

export default function HomeView() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
