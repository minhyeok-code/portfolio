import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-title">Skills</p>
        {skills.map((group) => (
          <div className="skill-group" key={group.group}>
            <h3>{group.group}</h3>
            <div className="chips">
              {group.items.map((item) => (
                <span className="chip" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
