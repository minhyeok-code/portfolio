import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <p className="section-title">Contact</p>
        <p>새로운 기회나 협업 제안은 언제든 환영합니다.</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          {profile.blog ? (
            <a className="btn" href={profile.blog} target="_blank" rel="noreferrer">Blog</a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
