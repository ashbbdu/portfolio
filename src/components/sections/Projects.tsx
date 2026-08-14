import { ExternalLink } from 'lucide-react';
import { TerminalWindow } from '../TerminalWindow';
import { projects, type Project } from '../../data/projects';

function StatusBadge({ status }: { status?: Project['status'] }) {
  if (!status) return null;
  const map: Record<NonNullable<Project['status']>, { label: string; cls: string }> = {
    live: {
      label: 'live',
      cls: 'border-term-green-l/50 text-term-green-l dark:border-term-green/50 dark:text-term-green',
    },
    'in-progress': {
      label: 'in-progress',
      cls: 'border-term-yellow-l/50 text-term-yellow-l dark:border-term-yellow/50 dark:text-term-yellow',
    },
    learning: {
      label: 'learning',
      cls: 'border-term-cyan-l/50 text-term-cyan-l dark:border-term-cyan/50 dark:text-term-cyan',
    },
  };
  const { label, cls } = map[status];
  return (
    <span className={`text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border ${cls}`}>
      {label}
    </span>
  );
}

export function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
      <TerminalWindow id="projects" title="~/projects/">
        <p className="text-sm mb-6">
          <span className="text-term-green-l dark:text-term-green">$</span>{' '}
          <span className="text-term-muted-l dark:text-term-muted">ls ~/projects/</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map(project => (
            <article
              key={project.slug}
              className="group rounded-md border border-term-border-l dark:border-term-border p-5 bg-term-bg-l/40 dark:bg-term-bg/40 hover:border-term-green-l/60 dark:hover:border-term-green/60 transition-colors flex flex-col"
            >
              <header className="flex items-start justify-between gap-3 mb-1">
                <h3 className="text-base font-semibold text-term-text-l dark:text-term-text">
                  <span className="text-term-cyan-l dark:text-term-cyan">./</span>
                  {project.name}
                </h3>
                <StatusBadge status={project.status} />
              </header>
              <p className="text-xs text-term-muted-l dark:text-term-muted italic mb-3">
                {project.tagline}
              </p>
              <p className="text-sm mb-3">{project.description}</p>
              <ul className="space-y-1 text-xs md:text-sm mb-4 flex-1">
                {project.bullets.map(b => (
                  <li key={b} className="flex gap-2">
                    <span className="text-term-green-l dark:text-term-green">▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.stack.map(t => (
                  <span
                    key={t}
                    className="text-[11px] px-1.5 py-0.5 rounded border border-term-border-l dark:border-term-border text-term-muted-l dark:text-term-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.links && project.links.length > 0 && (
                <div className="flex gap-3 text-xs">
                  {project.links.map(l => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-term-cyan-l dark:text-term-cyan hover:underline"
                    >
                      <ExternalLink size={12} /> {l.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </TerminalWindow>
    </div>
  );
}
