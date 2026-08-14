import { TerminalWindow } from '../TerminalWindow';
import { skillGroups } from '../../data/skills';

const accentClass: Record<string, string> = {
  green: 'text-term-green-l dark:text-term-green',
  cyan: 'text-term-cyan-l dark:text-term-cyan',
  yellow: 'text-term-yellow-l dark:text-term-yellow',
  purple: 'text-term-purple-l dark:text-term-purple',
  red: 'text-term-red-l dark:text-term-red',
};

const chipClass: Record<string, string> = {
  green: 'border-term-green-l/40 text-term-green-l dark:border-term-green/40 dark:text-term-green',
  cyan: 'border-term-cyan-l/40 text-term-cyan-l dark:border-term-cyan/40 dark:text-term-cyan',
  yellow: 'border-term-yellow-l/40 text-term-yellow-l dark:border-term-yellow/40 dark:text-term-yellow',
  purple: 'border-term-purple-l/40 text-term-purple-l dark:border-term-purple/40 dark:text-term-purple',
  red: 'border-term-red-l/40 text-term-red-l dark:border-term-red/40 dark:text-term-red',
};

const featuredBorder: Record<string, string> = {
  green: 'border-term-green-l/60 dark:border-term-green/60',
  cyan: 'border-term-cyan-l/60 dark:border-term-cyan/60',
  yellow: 'border-term-yellow-l/60 dark:border-term-yellow/60',
  purple: 'border-term-purple-l/60 dark:border-term-purple/60',
  red: 'border-term-red-l/60 dark:border-term-red/60',
};

export function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
      <TerminalWindow id="skills" title="~/skills/">
        <p className="text-sm mb-2">
          <span className="text-term-green-l dark:text-term-green">$</span>{' '}
          <span className="text-term-muted-l dark:text-term-muted">
            ls -la ~/skills/ --sort=priority
          </span>
        </p>
        <p className="text-xs text-term-muted-l dark:text-term-muted mb-6">
          <span className="text-term-green-l dark:text-term-green"># </span>
          primary focus: backend development, APIs, and data
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillGroups.map(group => {
            const accent = group.accent ?? 'cyan';
            return (
              <div
                key={group.file}
                className={`rounded-md border p-4 bg-term-bg-l/40 dark:bg-term-bg/40 ${
                  group.featured
                    ? featuredBorder[accent]
                    : 'border-term-border-l dark:border-term-border'
                }`}
              >
                <div className="flex items-baseline justify-between gap-2 mb-3 flex-wrap">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-sm font-semibold ${accentClass[accent]}`}>
                      {group.title}
                    </span>
                    <span className="text-xs text-term-muted-l dark:text-term-muted">
                      /{group.file}
                    </span>
                  </div>
                  {group.featured && (
                    <span className={`text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border ${chipClass[accent]}`}>
                      primary
                    </span>
                  )}
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map(item => (
                    <li
                      key={item}
                      className={`text-xs px-2 py-1 rounded border ${chipClass[accent]}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </TerminalWindow>
    </div>
  );
}
