import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <p className="section-title">About</p>
        {about.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </section>
  );
}
