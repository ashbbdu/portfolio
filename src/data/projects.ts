export type Project = {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  bullets: string[];
  stack: string[];
  status?: 'live' | 'in-progress' | 'learning';
  links?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    name: 'Cargostar.io',
    slug: 'cargostar',
    tagline: 'Freight Quote Management Platform',
    description:
      'Scalable backend services and RESTful APIs powering freight quote management for Air and Ocean shipment workflows.',
    bullets: [
      'Integrated multiple logistics providers — LFS, WWEX, ShipRite, ExFreight — for automated freight rate aggregation.',
      'Built APIs to process and normalize freight pricing data from multiple third-party providers.',
      'Optimized backend processing, caching strategies, and DB queries for high-volume logistics operations.',
      'Designed scalable backend workflows for shipment lifecycle and quote management.',
    ],
    stack: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'REST APIs'],
    status: 'live',
  },
  {
    name: 'Reporting Metrics Dashboard',
    slug: 'reporting-metrics',
    tagline: 'Logistics analytics & performance monitoring',
    description:
      'Backend services and analytics APIs for logistics reporting and shipment performance monitoring.',
    bullets: [
      'APIs for job profitability analysis, operational reporting, and analytics dashboards.',
      'Role-Based Access Control (RBAC) for secure access management.',
      'Improved reporting API response times by 25% via Redis caching, query optimization, and indexing.',
      'Designed scalable reporting architecture for operational & financial analytics workflows.',
    ],
    stack: ['Node.js', 'PostgreSQL', 'Redis', 'RBAC', 'Analytics'],
    status: 'live',
  },
  {
    name: 'Onivas',
    slug: 'onivas',
    tagline: 'Insurance Management Platform',
    description:
      'Customer-facing and admin insurance management platforms with a Spring Boot backend and React + Redux Toolkit frontend.',
    bullets: [
      'Reusable frontend architecture and scalable UI components improving maintainability.',
      'Backend APIs in Spring Boot for insurance workflow management.',
      'REST API integration and authentication systems for secure customer operations.',
      'Maintained 80%+ frontend test coverage using Jest and React Testing Library.',
    ],
    stack: ['React.js', 'Redux Toolkit', 'Spring Boot', 'Jest', 'RTL'],
    status: 'live',
  },
  {
    name: 'Serviceo Mobile App',
    slug: 'serviceo',
    tagline: 'Internal Communication Chat Application',
    description:
      'Real-time communication mobile app for internal team collaboration.',
    bullets: [
      'Live messaging, notifications, authentication, and real-time communication workflows.',
      'Backend APIs and real-time synchronization systems supporting concurrent users.',
      'Integrated Socket.io for live messaging and notification delivery.',
    ],
    stack: ['React Native', 'Node.js', 'Express.js', 'Socket.io'],
    status: 'live',
  },
  {
    name: 'Freight Microservices (Spring Boot)',
    slug: 'freight-microservices',
    tagline: 'Java + Spring Boot backend at Lavinstar Logistics',
    description:
      'Production Spring Boot microservices I build and maintain at Lavinstar for freight and shipment lifecycle management — running alongside Node.js/Express services in the same platform.',
    bullets: [
      'Layered Spring Boot services (Controller → Service → Repository) with clean domain boundaries.',
      'Spring Data JPA + Hibernate against PostgreSQL/MySQL with tuned indexes and queries.',
      'JWT authentication and RBAC via Spring Security for enterprise access control.',
      'Dockerized and deployed on Linux; integrated with the wider Node.js service mesh.',
    ],
    stack: ['Java 17', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'PostgreSQL', 'Docker'],
    status: 'live',
  },
];
