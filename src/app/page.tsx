import { Nav } from "@/components/layout/Nav";
import { Cursor } from "@/components/layout/Cursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { Work } from "@/components/sections/Work";
import { TechEcosystem } from "@/components/sections/TechEcosystem";
import { Experience } from "@/components/sections/Experience";
import { Academic } from "@/components/sections/Academic";
import { Education } from "@/components/sections/Education";
import { About } from "@/components/sections/About";
import { Github } from "@/components/sections/Github";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Impact />
        <Work />
        <TechEcosystem />
        <Experience />
        <Academic />
        <Education />
        <About />
        <Github />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
