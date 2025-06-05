import { useEffect, useRef } from "react";
import "./Sidebar.css";
import Link from "next/link";

type SidebarProps = {
  onClose: () => void;
  className: string;
  openPopup: (name: string) => void;
};

export default function Sidebar({ openPopup, className, onClose }: SidebarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const menu = [
    { title: "About Me", path: "/about" },
    { title: "Career & Education" },
    { title: "Technologies" },
    { title: "Projects", path: "/projects" },
    { title: "Freelancing", path: "/freelance" },
  ];
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <aside
      ref={ref}
      style={{
        width: className === "open" ? "350px" : "0",
      }}
    >
      <div
        style={{
          margin: "36px",
          marginTop: "40px",
          height: "100px",
          width: "100px",
          borderRadius: "50px",
          backgroundColor: "white",
        }}
      ></div>
      <h1>
        Welcome! <br /> I&apos;m Kirsten Wigant
      </h1>
      <h4>Freelance Web / Mobile Developer</h4>
      <br />
      <br />

      <ul>
        {menu.map((m, i) =>
          m.path ? (
            <Link
              className="link hover-underline-animation left"
              key={i}
              href={m.path}
            >
              {m.title}
            </Link>
          ) : (
            <div onMouseOver={()=> openPopup(m.title) } className="link hover-underline-animation left" key={i}>
              {m.title}
            </div>
          )
        )}
      </ul>
      <br />
      <br />
      <h4>Contact Me</h4>
    </aside>
  );
}
