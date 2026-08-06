import "./globals.css";
import { profile } from "@/data/portfolio";

export const metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
