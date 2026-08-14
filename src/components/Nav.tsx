import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
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

  // Lock body scroll + close on Escape when drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
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
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen(true)}
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          onClick={close}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Sidebar panel */}
        <aside
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-term-panel-l dark:bg-term-panel border-l border-term-border-l dark:border-term-border shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-4 h-14 border-b border-term-border-l dark:border-term-border">
            <span className="text-sm font-semibold flex items-center gap-2">
              <span className="text-term-green-l dark:text-term-green">$</span>
              <span>menu</span>
            </span>
            <button
              onClick={close}
              aria-label="Close menu"
              className="p-2 rounded-md border border-term-border-l dark:border-term-border hover:bg-term-bg-l dark:hover:bg-term-bg transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-3">
            <p className="px-3 pt-1 pb-2 text-[11px] uppercase tracking-wider text-term-muted-l dark:text-term-muted">
              ~/sections
            </p>
            <ul className="flex flex-col gap-0.5">
              {links.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={close}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm text-term-text-l dark:text-term-text hover:bg-term-bg-l dark:hover:bg-term-bg hover:text-term-green-l dark:hover:text-term-green transition-colors"
                  >
                    <span className="text-term-muted-l dark:text-term-muted">./</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-3 border-t border-term-border-l dark:border-term-border space-y-3">
            <a
              href={profile.resumeUrl}
              download
              onClick={close}
              className="flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded-md bg-term-green-l dark:bg-term-green text-term-bg-l dark:text-term-bg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Download size={14} /> resume.pdf
            </a>
            <div className="flex items-center justify-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-md border border-term-border-l dark:border-term-border hover:border-term-green-l dark:hover:border-term-green transition-colors"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-md border border-term-border-l dark:border-term-border hover:border-term-cyan-l dark:hover:border-term-cyan transition-colors"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
