import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main role="main">
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
