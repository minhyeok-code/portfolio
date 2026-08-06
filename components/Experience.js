import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-title">Experience &amp; Education</p>
        {experience.map((e, i) => (
          <div className="exp" key={i}>
            <h3>{e.title}</h3>
            <p className="meta">{e.org} · {e.period}</p>
            <ul>
              {e.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
