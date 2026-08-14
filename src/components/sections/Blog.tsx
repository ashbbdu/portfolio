import { TerminalWindow } from '../TerminalWindow';
import { blogPosts } from '../../data/blog';

export function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
      <TerminalWindow id="blog" title="~/blog/">
        <p className="text-sm mb-6">
          <span className="text-term-green-l dark:text-term-green">$</span>{' '}
          <span className="text-term-muted-l dark:text-term-muted">ls -t ~/blog/drafts/</span>
        </p>
        <div className="space-y-4">
          {blogPosts.map(post => (
            <article
              key={post.slug}
              className="p-4 rounded-md border border-dashed border-term-border-l dark:border-term-border bg-term-bg-l/40 dark:bg-term-bg/40 hover:border-term-cyan-l/50 dark:hover:border-term-cyan/50 transition-colors"
            >
              <header className="flex items-baseline justify-between gap-3 mb-1 flex-wrap">
                <h3 className="text-base font-semibold text-term-text-l dark:text-term-text">
                  {post.title}
                </h3>
                <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border border-term-yellow-l/50 text-term-yellow-l dark:border-term-yellow/50 dark:text-term-yellow">
                  {post.status}
                </span>
              </header>
              <p className="text-xs text-term-muted-l dark:text-term-muted mb-2">
                #{post.tag} · {post.date}
              </p>
              <p className="text-sm">{post.excerpt}</p>
            </article>
          ))}
          <p className="text-xs text-term-muted-l dark:text-term-muted pt-2">
            <span className="text-term-green-l dark:text-term-green">#</span> Writing coming soon —
            drafts land here first.
          </p>
        </div>
      </TerminalWindow>
    </div>
  );
}
