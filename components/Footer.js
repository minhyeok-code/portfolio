import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} {profile.name}. Built with Next.js.
    </footer>
  );
}
