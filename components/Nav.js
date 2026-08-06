import { profile } from "@/data/portfolio";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <span className="nav-name">{profile.name}</span>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
