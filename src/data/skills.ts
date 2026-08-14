export type SkillGroup = {
  title: string;
  file: string;
  items: string[];
  accent?: 'green' | 'cyan' | 'yellow' | 'purple' | 'red';
  featured?: boolean;
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    file: 'backend.json',
    accent: 'green',
    featured: true,
    items: [
      'Java 17',
      'Spring Boot',
      'Spring MVC',
      'Spring Data JPA',
      'Spring Security (JWT)',
      'Hibernate',
      'Node.js',
      'Express.js',
      'REST APIs',
      'Microservices',
    ],
  },
  {
    title: 'Databases & Caching',
    file: 'databases.json',
    accent: 'yellow',
    featured: true,
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL', 'Sequelize ORM', 'Query Optimization', 'Indexing'],
  },
  {
    title: 'System Design & Architecture',
    file: 'system-design.json',
    accent: 'cyan',
    featured: true,
    items: [
      'REST API Design',
      'Microservices Patterns',
      'RBAC & JWT Auth',
      'Caching Strategies',
      'Database Design',
      'Real-Time Systems (Socket.io)',
      'Scalable Architecture',
    ],
  },
  {
    title: 'DevOps & Cloud',
    file: 'devops.json',
    accent: 'purple',
    items: ['Docker', 'CI/CD', 'Linux', 'AWS (Basic Services)', 'Git', 'GitHub', 'Postman'],
  },
  {
    title: 'CS Fundamentals',
    file: 'fundamentals.json',
    accent: 'cyan',
    items: [
      'Data Structures & Algorithms',
      'OOP',
      'DBMS',
      'Operating Systems',
      'System Design',
    ],
  },
  {
    title: 'Frontend',
    file: 'frontend.json',
    accent: 'cyan',
    items: [
      'React.js',
      'Redux Toolkit',
      'TypeScript',
      'JavaScript',
      'React Native',
      'Tailwind CSS',
      'Material UI',
      'HTML',
      'CSS',
    ],
  },
  {
    title: 'Testing',
    file: 'testing.json',
    accent: 'red',
    items: ['Jest', 'React Testing Library', 'Vitest'],
  },
];
