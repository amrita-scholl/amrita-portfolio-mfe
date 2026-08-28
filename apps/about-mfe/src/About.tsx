import animePortrait from './assets/amrita-animie.png'

export default function About() {
  return (
    <section className="about-page">
      <div className="container">
        <p className="eyebrow">About me</p>
        <h1>Engineering with curiosity,<br /><span>building with purpose.</span></h1>
        <div className="about-layout">
          <div className="about-portrait"><div className="portrait-frame"><img src={animePortrait} alt="Anime illustration of Amrita Singh enjoying an adventure" /></div><p className="portrait-caption">Curious by nature.<br />Thoughtful by design.</p></div>
          <div><p className="about-lead">I’m Amrita Singh, a Lead Engineer who turns complex technology into dependable products, scalable platforms and clear technical direction.</p><div className="about-copy"><p>Across 18+ years in full-stack engineering, distributed systems and cloud-native architecture, I have built solutions for fintech, banking, telecom and insurance while staying close to the code and the people who use it.</p><p>Today, my work brings together Java, Spring Boot, React and cloud platforms with GenAI capabilities including RAG, LangChain, OpenAI, agentic workflows and Text2SQL. I enjoy taking promising ideas from research and proof of concept to production-ready systems that are observable, secure and built to last.</p><p>As an AWS Certified Solutions Architect, I care about more than making systems work. I care about making them easier to understand, operate and improve.</p></div></div>
        </div>
      </div>
    </section>
  );
}