import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-title">Projects</p>
        {projects.map((p, i) => (
          <article className="card" key={i}>
            <div className="card-head">
              <h3>{p.title}</h3>
              <span className="period">{p.period}</span>
            </div>
            {p.role ? <p className="role-tag">{p.role}</p> : null}
            <p className="summary">{p.summary}</p>
            <ul>
              {p.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
            <div className="chips">
              {p.stack.map((s) => (
                <span className="chip" key={s}>{s}</span>
              ))}
            </div>
            <div className="card-links">
              {p.demo ? (
                <a href={p.demo} target="_blank" rel="noreferrer">Live Demo ↗</a>
              ) : null}
              {p.repo ? (
                <a href={p.repo} target="_blank" rel="noreferrer">GitHub ↗</a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
