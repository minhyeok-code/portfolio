"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      const el = document.createElement("textarea");
      el.value = profile.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <p className="section-title">Contact</p>
        <p>채용이나 커피챗 관련 연락 언제든 환영합니다. 편하게 메일 주세요.</p>
        <div className="hero-actions">
          <button type="button" className="btn btn-primary" onClick={copyEmail}>
            {copied ? "복사됨!" : profile.email}
          </button>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          {profile.blog ? (
            <a className="btn" href={profile.blog} target="_blank" rel="noreferrer">Blog</a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
