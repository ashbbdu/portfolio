import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { profile } from '../data/profile';

const links = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'projects' },
  { href: '#blog', label: 'blog' },
  { href: '#contact', label: 'contact' },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur transition-colors ${
        scrolled
          ? 'bg-term-bg-l/80 dark:bg-term-bg/80 border-b border-term-border-l dark:border-term-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 h-14">
        <a href="#top" className="text-sm md:text-base font-semibold flex items-center gap-2">
          <span className="text-term-green-l dark:text-term-green">$</span>
          <span>ashish@portfolio</span>
          <span className="text-term-muted-l dark:text-term-muted hidden sm:inline">:~</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-md text-term-muted-l dark:text-term-muted hover:text-term-text-l dark:hover:text-term-text hover:bg-term-panel-l dark:hover:bg-term-panel transition-colors"
            >
              ./{l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            download
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs md:text-sm font-medium border border-term-green-l/50 dark:border-term-green/50 text-term-green-l dark:text-term-green hover:bg-term-green-l/10 dark:hover:bg-term-green/10 transition-colors"
          >
            <Download size={14} />
            resume.pdf
          </a>
          <ThemeToggle />
          <button
            className="md:hidden p-2 rounded-md border border-term-border-l dark:border-term-border"
            aria-label="Toggle menu"
            onClick={() => setOpen(o => !o)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-term-border-l dark:border-term-border bg-term-bg-l dark:bg-term-bg">
          <ul className="flex flex-col p-2">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm text-term-muted-l dark:text-term-muted hover:text-term-text-l dark:hover:text-term-text hover:bg-term-panel-l dark:hover:bg-term-panel"
                >
                  ./{l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                download
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-term-green-l dark:text-term-green"
              >
                <Download size={14} /> resume.pdf
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
