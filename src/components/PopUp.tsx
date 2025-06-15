import { useEffect, useRef, useState } from "react";
import "../styles/PopUp.css";
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
  const toEmail = "to: kirsten.wigant@gmail.com";
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
        if (position.height === "320px" ) return "popup-400-r";
        if (position.height === "450px" ) return "popup-400-r";

        return "popup-400-l";
      case "1000px":
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
            <div className="justified-row">
              <aside>
                <div className="img"></div>

                <h3>Let&apos;s Get in Touch</h3>
                <p className="subtitle">
                  I&apos;m available for freelance work!
                </p>

                <p>
                  Need a website or app? I&apos;ve got design and development
                  covered - drop me a message :)
                </p>
              </aside>
              <main>
                <div className="justified-row">
                  <h3>Send an Email</h3>
                  <Link className="expand-link" href={"/contact"}>
                    Expand
                    <Image
                      style={{ marginLeft: 8 }}
                      src={"/expand.png"}
                      width={24}
                      height={24}
                      alt={"expand"}
                    />
                  </Link>
                </div>
                <input disabled value={toEmail}></input>
                <input placeholder={"your-email@email.com"}></input>
                <textarea placeholder={"email"}></textarea>
                <div className="end-row">
                  <button className="primary-btn">Send</button>
                </div>
              </main>
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
                        style={{marginRight: 12}}
                        width={e.width}
                        height={e.height}
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
                        style={{ borderRadius: 8, marginRight: 12 }}
                        height={60}
                        width={60}
                        alt="logo"
                        src={t.img}
                        
                      />
                      <p className="tech-logos">{t.tech}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );

        case "Projects":
          return (
            <div className="column">
              <h2>Projects</h2>
              <ul>
                {projects.map((p, i) => {
                  return (
                    <Link className="next-link" href={p.path} key={i}>
                      <li className="clickable-li">
                        <Image style={{marginRight: 12}} width={80} height={80} src={p.src} alt={p.alt} />
                        <div className="column">
                          <p className="degree">{p.title}</p>
                          <p className="school">{p.description}</p>
                          <p className="date">{p.date}</p>
                        </div>
                      </li>
                    </Link>
                  );
                })}
              </ul>
              <button className="primary-btn">View All (7)</button>
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
                      <Image style={{marginRight: 12}} width={60} height={60} src={p.src} alt={p.alt} />
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
