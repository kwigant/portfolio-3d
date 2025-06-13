import { useEffect, useRef, useState } from "react";
import "./PopUp.css";
import Image from "next/image";
import { career, education, projects, tech } from "@/constants/popup-data";

type PopupProps = {
  name: string;
  position: { top: string; left: string, width: string, height: string };
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
      const timer = setTimeout(() => setShowContent(true), position.width !== '850px' ? 200 : 300);
      return () => clearTimeout(timer);
    } else {
      // Reset content visibility when popup is hidden
      setShowContent(false);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, ]);

  const getAnimationClass = () => {
    switch(position.width) {
      case '400px': 
        if (position.height === '250px') return 'popup-250-h'
        return 'popup-400';
      case '850px': return 'popup-850';
      case '500px': return 'popup-500';
    }
  }

  const getPopUpContent = () => {
    if (showContent) {
      switch (name) {
        case "Contact":
          return (
            <div className="row">
              <div className="column">
                <div className="img"></div>
                <h2>Contact Me!</h2>
                <p>
                  Whether you need a website or app built, or are just curious
                  about my projects and background, let&apos;s get in touch!
                </p>
              </div>
              <div className="column">
                <input disabled value={toEmail}></input>
                <input placeholder={"your-email@email.com"}></input>
                <textarea placeholder={"email"}></textarea>
                <div className="end-row">
                  <button className="send-btn">Send</button>
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
                  return <div key={i}>{t.tech}</div>;
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
                    <li key={i}>
                      <Image width={60} height={60} src={p.src} alt={p.alt} />
                      <div className="column">
                        <p className="degree">{p.title}</p>
                        <p className="school">{p.description}</p>
                        <p className="date">{p.date}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <button className="cancel-btn">View All (7)</button>
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
                      <Image width={60} height={60} src={p.src} alt={p.alt} />
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
