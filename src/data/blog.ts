export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  tag: string;
  status: 'draft' | 'published';
};

export const blogPosts: BlogPost[] = [
  {
    title: 'Running Spring Boot and Node.js side by side in production',
    slug: 'spring-and-node',
    date: 'Coming soon',
    excerpt:
      'Notes from operating a polyglot backend at Lavinstar — how we split responsibilities between Spring Boot and Express services, shared auth, and the tradeoffs of running both.',
    tag: 'architecture',
    status: 'draft',
  },
  {
    title: 'Reducing API latency 25% with Redis — a practical breakdown',
    slug: 'redis-25-percent',
    date: 'Coming soon',
    excerpt:
      'The exact caching pattern I used on reporting APIs, cache invalidation traps, and how to pick TTLs that do not lie to your dashboards.',
    tag: 'performance',
    status: 'draft',
  },
  {
    title: 'RBAC done right: JWT + roles + resource-level checks',
    slug: 'rbac-done-right',
    date: 'Coming soon',
    excerpt:
      'A pragmatic RBAC design I keep reaching for across Node and Spring Boot services — with the edge cases that bite in production.',
    tag: 'security',
    status: 'draft',
  },
];
