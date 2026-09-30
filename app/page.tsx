import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { About, Experience, Skills, Projects, Contact } from "../components/Sections";
import { profile } from "../data/portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-ink/60">&copy; {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
