import { TerminalWindow } from '../TerminalWindow';
import { experience } from '../../data/experience';

export function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
      <TerminalWindow id="experience" title="~/experience.log">
        <p className="text-sm mb-6">
          <span className="text-term-green-l dark:text-term-green">$</span>{' '}
          <span className="text-term-muted-l dark:text-term-muted">tail -f experience.log</span>
        </p>
        <div className="space-y-8">
          {experience.map(exp => (
            <article key={exp.company} className="relative pl-4 md:pl-6 border-l-2 border-term-green-l/40 dark:border-term-green/40">
              <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-term-green-l dark:bg-term-green" />
              <header className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
                <h3 className="text-base md:text-lg font-semibold text-term-text-l dark:text-term-text">
                  {exp.role}{' '}
                  <span className="text-term-cyan-l dark:text-term-cyan">@ {exp.company}</span>
                </h3>
                <time className="text-xs md:text-sm text-term-muted-l dark:text-term-muted">
                  {exp.period}
                </time>
              </header>
              <p className="text-sm text-term-muted-l dark:text-term-muted mb-3">{exp.summary}</p>
              <ul className="space-y-1.5 text-sm">
                {exp.highlights.map(h => (
                  <li key={h} className="flex gap-2">
                    <span className="text-term-green-l dark:text-term-green mt-0.5">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.stack.map(t => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded border border-term-border-l dark:border-term-border text-term-muted-l dark:text-term-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </TerminalWindow>
    </div>
  );
}
