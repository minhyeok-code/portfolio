import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">프로젝트 보기</a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href={`mailto:${profile.email}`}>이메일</a>
        </div>
      </div>
    </header>
  );
}
