import type { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function TerminalWindow({ title, children, className = '', id }: Props) {
  return (
    <section
      id={id}
      className={`rounded-lg border border-term-border-l dark:border-term-border bg-term-panel-l dark:bg-term-panel shadow-lg overflow-hidden ${className}`}
    >
      <header className="flex items-center gap-2 px-4 py-2 border-b border-term-border-l dark:border-term-border bg-term-bg-l/60 dark:bg-term-bg/60">
        <span className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-term-red-l dark:bg-term-red" />
          <span className="w-3 h-3 rounded-full bg-term-yellow-l dark:bg-term-yellow" />
          <span className="w-3 h-3 rounded-full bg-term-green-l dark:bg-term-green" />
        </span>
        <span className="flex-1 text-center text-xs md:text-sm text-term-muted-l dark:text-term-muted truncate">
          {title}
        </span>
        <span className="w-12" aria-hidden />
      </header>
      <div className="p-4 md:p-6">{children}</div>
    </section>
  );
}
