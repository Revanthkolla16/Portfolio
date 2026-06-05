import ThemeProvider from '@/components/ThemeProvider';
import Navbar        from '@/components/Navbar';
import Hero          from '@/components/Hero';
import About         from '@/components/About';
import Skills        from '@/components/Skills';
import Projects      from '@/components/Projects';
import { Education, Experience } from '@/components/EduExp';
import LeetCode      from '@/components/LeetCode';
import Contact, { Footer } from '@/components/ContactFooter';

export default function Page() {
  return (
    <>
      {/* Applies saved theme before first paint */}
      <ThemeProvider />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <LeetCode />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
