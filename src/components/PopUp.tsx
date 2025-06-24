import { useEffect, useRef, useState } from "react";
import "../styles/PopUp.css";
import "../styles/globals.scss";
import "../styles/Header.css";
import Image from "next/image";
import { career, education, projects, tech } from "@/constants/popup-data";
import Link from "next/link";

type PopupProps = {
  name: string;
  position: { top: string; left: string; width: string; height: string };
  onClose: () => void;
};

export default function Popup({ name, position, onClose }: PopupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    if (ref && ref.current && ref.current?.clientWidth > 40) {
      // Wait for the transition to complete (e.g., 300ms)
      const timer = setTimeout(() => setShowContent(true), 300);
      return () => clearTimeout(timer);
    } else {
      // Reset content visibility when popup is hidden
      setShowContent(false);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const getAnimationClass = () => {
    switch (position.width) {
      case "400px":
        if (position.height === "250px") return "popup-250-h";
        if (position.height === "320px") return "popup-400-r";
        if (position.height === "425px") return "popup-400-r";

        return "popup-400-l";
      case "850px":
        return "popup-850";
      case "600px":
        return "popup-500";
    }
  };

  const getPopUpContent = () => {
    if (showContent) {
      switch (name) {
        case "Contact":
          return (
            <div>
              <h2>Let&apos;s Get in Touch</h2>
              <div className="row" style={{ alignItems: "flex-start" }}>
                <Image
                  alt="portrait"
                  style={{borderRadius: 8,}}
                  height={200}
                  width={200}
                  src={"/visuals/kw-pic.svg"}
                />
                <div
                  className="column"
                  style={{ marginLeft: 24, width: "100%" }}
                >
                  <p className="subtitle">
                    I&apos;m currently available for freelance work!
                  </p>
                  <p>
                    Whether you need a website, an app, or just have questions
                    about my work, feel free to reach out. I handle both design
                    and development and would love to hear from you.
                  </p>
                  <div className="row">
                    <div className="row">
                      <Image
                        src={"/icons/linkedin.png"}
                        width={40}
                        height={40}
                        alt={"linkedin"}
                      />
                      <p style={{ marginLeft: 8, marginRight: 24 }}>LinkedIn</p>
                    </div>
                    <div className="row">
                      <Image
                        src={"/icons/email.png"}
                        width={40}
                        height={40}
                        alt={"email"}
                      />
                      <p style={{ marginLeft: 8 }}>kirsten.wigant@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        case "Education":
          return (
            <div className="column">
              <h2>Education</h2>
              <ul>
                {education.map((e, i) => {
                  return (
                    <li key={i}>
                      <Image
                        style={{borderRadius: 8, marginRight: 12 }}
                        width={100}
                        height={100}
                        src={e.src}
                        alt={e.alt}
                      />
                      <div className="column">
                        <p className="degree">{e.degree}</p>
                        <p className="school">{e.school}</p>
                        <p className="date">{e.date}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        case "Technologies":
          return (
            <div className="column">
              <h2>Technologies</h2>
              <div className="grid">
                {tech.map((t, i) => {
                  return (
                    <div key={i} className="tech-container">
                      <Image
                        style={{ borderRadius: 8, }}
                        height={60}
                        width={60}
                        alt="logo"
                        src={t.img}
                      />
                      <p className="small-text">{t.tech}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );

        case "Projects":
          return (
            <div className="column">
              <h2>Latest Projects</h2>
              <ul>
                {projects.map((p, i) => {
                  return (
                    <Link className="next-link" href={p.path} key={i}>
                      <li className="clickable-li">
                        <Image
                          style={{borderRadius: 8, marginRight: 12 }}
                          width={100}
                          height={100}
                          src={p.src}
                          alt={p.alt}
                        />
                        <div className="column hover-underline-animation">
                          <p className="degree">{p.title}</p>
                          <p className="school">{p.description}</p>
                          <p className="date">{p.date}</p>
                        </div>
                      </li>
                    </Link>
                  );
                })}
              </ul>

              <Link
                style={{ textDecoration: "none" }}
                href={"/projects"}
                className="secondary-btn"
              >
                View All (7)
              </Link>
            </div>
          );
        case "Career":
          return (
            <div className="column">
              <h2>Career</h2>
              <ul>
                {career.map((p, i) => {
                  return (
                    <li key={i}>
                      <Image
                        style={{ borderRadius: 8,marginRight: 12 }}
                        width={100}
                        height={100}
                        src={p.src}
                        alt={p.alt}
                      />
                      <div className="column">
                        <p className="degree">{p.title}</p>
                        <p className="school">{p.description}</p>
                        <p className="date">{p.date}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
      }
    }
  };

  return (
    <div
      ref={ref}
      style={{
        width: position.width,
        height: position.height,
        top: position.top,
        left: position.left,
      }}
      className={`popup ${getAnimationClass()}`}
    >
      {getPopUpContent()}
    </div>
  );
}
