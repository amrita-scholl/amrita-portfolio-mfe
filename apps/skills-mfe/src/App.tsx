const groups = [
  ['Languages', 'Java 8-21, Python, Node.js, TypeScript, JavaScript, Go'],
  ['GenAI / LLM / RAG', 'LangChain, OpenAI GPT, RAG architecture, Text2SQL, agentic workflows, vector search, prompt engineering, LLM orchestration'],
  ['Frontend', 'React, Redux, Angular 1-16, TypeScript, RxJS, jQuery, SPA architecture'],
  ['Backend & Frameworks', 'Spring Boot, Spring MVC, Spring Data JPA, Hibernate, REST APIs, API Gateway, GraphQL, microservices'],
  ['Architecture Patterns', 'Distributed systems, microservices, event-driven architecture, CQRS, Saga Pattern, Domain-Driven Design'],
  ['Cloud Platforms', 'AWS Certified Solutions Architect, GCP, Azure, EC2, Lambda, SQS, SNS, SES, CDK, EKS, S3, DynamoDB, Chalice'],
  ['DevOps & Containers', 'Docker, Kubernetes, Jenkins, GitLab CI/CD, Drone CI, Nexus, SonarQube, Maven'],
  ['Messaging & Streaming', 'Apache Kafka, Confluent, Solace, AWS SQS/SNS, Spring Batch'],
  ['Databases & Caching', 'PostgreSQL, Oracle, MySQL, MariaDB, MongoDB, Couchbase, DynamoDB, Elasticsearch, Neo4j, Redis, Hazelcast'],
  ['Data & Analytics', 'Data Lake architecture, Databricks, Snowflake, Collibra, Delta Lake, QlikView'],
  ['Observability', 'OpenTelemetry, Grafana, Kibana, Splunk, New Relic, Prometheus, Dynatrace'],
  ['Security & Testing', 'OAuth2, ForgeRock, Spring Security, JUnit, Mockito, Spring Test, Cucumber, Robot Automation Framework'],
]

export default function App() {
  return <main id="skills" className="portfolio-page"><div className="container"><div className="page-intro"><p className="eyebrow">Technical skills</p><h1>A broad toolkit for <span>deep work.</span></h1><p>From Java and distributed systems to GenAI, observability and cloud infrastructure, I choose technology in service of the problem.</p></div><div className="skills-grid">{groups.map(([title, details]) => <section className="skill-group" key={title}><h2>{title}</h2><p>{details}</p></section>)}</div></div></main>
}
