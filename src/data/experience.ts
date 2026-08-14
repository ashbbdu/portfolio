export type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: 'Full Stack Developer',
    company: 'Lavinstar Logistics Pvt Ltd',
    period: 'Nov 2024 — Present',
    summary:
      'Engineering scalable backend services for a logistics analytics platform with a polyglot stack — Node.js + Express and Java + Spring Boot — backed by SQL databases, Sequelize / Spring Data JPA / Hibernate, and Redis.',
    highlights: [
      'Engineered scalable backend services for a logistics analytics platform using Node.js, Express.js, Spring Boot, Java, SQL, Sequelize, Spring Data JPA, Hibernate, and Redis.',
      'Designed and implemented RESTful APIs using Node.js and Spring Boot to power dashboards tracking revenue, job profit, shipment data, and overall business performance.',
      'Built a robust Role-Based Access Control (RBAC) system and implemented secure authentication and authorization using Spring Security and middleware-based access control.',
      'Modeled complex logistics data using Sequelize ORM, Spring Data JPA, and Hibernate with SQL databases for efficient and maintainable data persistence.',
      'Leveraged Redis for caching high-frequency queries, reducing database load and improving application performance.',
      'Improved API response times by 25% through SQL query optimization, indexing strategies, caching, and efficient database access patterns.',
      'Worked on shipment quote generation by integrating third-party logistics service providers such as LFS, WWEX, ShipRite, and ExFreight.',
      'Developed APIs to fetch, aggregate, and compare real-time freight rates from multiple logistics providers, enabling efficient shipment pricing and quote management.',
      'Applied Spring Boot ecosystem features including Spring MVC, Spring Validation, Spring Security, Spring Data JPA, Hibernate, Lombok, Maven, and MySQL while following layered architecture and REST API best practices.',
      'Followed software engineering best practices including DTO pattern, dependency injection (IoC), exception handling, validation, logging, and clean architecture to build maintainable and scalable backend applications.',
    ],
    stack: [
      'Node.js', 'Express.js', 'Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA',
      'Hibernate', 'Sequelize', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Microservices',
    ],
  },
];
