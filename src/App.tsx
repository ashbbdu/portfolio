import { Nav } from './components/Nav';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';
import { profile } from './data/profile';

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <footer className="border-t border-term-border-l dark:border-term-border py-8 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-term-muted-l dark:text-term-muted">
          <p>
            <span className="text-term-green-l dark:text-term-green">$</span> echo &quot;Built with React + Vite + Tailwind&quot;
          </p>
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
