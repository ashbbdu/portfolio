import { Download, Mail, MapPin } from 'lucide-react';
import { Typewriter } from '../Typewriter';
import { GithubIcon, LinkedinIcon } from '../BrandIcons';
import { profile } from '../../data/profile';

export function Hero() {
  return (
    <section id="top" className="min-h-[85vh] flex items-center px-4 md:px-6 pt-10 pb-16">
      <div className="max-w-4xl mx-auto w-full animate-fadeInUp">
        <div className="text-sm text-term-muted-l dark:text-term-muted mb-4">
          <span className="text-term-green-l dark:text-term-green">$</span> whoami
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-term-text-l dark:text-term-text">
          {profile.name}
        </h1>

        <p className="mt-4 text-lg md:text-2xl text-term-muted-l dark:text-term-muted">
          <span className="text-term-cyan-l dark:text-term-cyan">&gt;</span>{' '}
          <Typewriter phrases={profile.taglines} className="text-term-text-l dark:text-term-text" />
        </p>

        <p className="mt-6 flex items-center gap-2 text-sm text-term-muted-l dark:text-term-muted">
          <MapPin size={14} /> {profile.location}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-term-green-l dark:bg-term-green text-term-bg-l dark:text-term-bg font-semibold hover:opacity-90 transition-opacity"
          >
            <Download size={16} /> Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-term-border-l dark:border-term-border hover:border-term-cyan-l dark:hover:border-term-cyan hover:text-term-cyan-l dark:hover:text-term-cyan transition-colors"
          >
            <Mail size={16} /> Get in touch
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4 text-term-muted-l dark:text-term-muted">
          <a
            href={profile.github}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="hover:text-term-text-l dark:hover:text-term-text transition-colors"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={profile.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="hover:text-term-text-l dark:hover:text-term-text transition-colors"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="hover:text-term-text-l dark:hover:text-term-text transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
