import Image from "next/image";
import TitleCycle from "./TitleCycle";
import "@/styles/globals.scss";
import Link from "next/link";
import MobileCanvasModel from "./MobileCanvas";

type tab = {
  title: string;
  path: string;
};
export const tabs: tab[] = [
  { title: "Projects", path: "/projects" },
  { title: "Career", path: "/career" },
  { title: "Qualifications", path: "/qualifications" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

export default function MobileHome() {
  return (
    <>
    <MobileCanvasModel/>
      <div className="landing-img-container">
        <Image
          className="landing-img-mobile"
          src="/visuals/kw-pic-square.svg"
          width={120}
          height={120}
          alt="profile"
        />
      </div>
      <h1 style={{ marginBottom: 0 }}>Hello, I&apos;m Kirsten!</h1>
      <p style={{ textAlign: "center", margin: 0 }}>
        I&apos;m a freelance Mobile and Web Developer, specializing in:
      </p>
      <TitleCycle />
      <div style={{ marginTop: "32px" }}>
        <p className={"small-text"} style={{ margin: 0, textAlign: "center" }}>
          Check out my Work:
        </p>
        <div className="landing-mobile-btns">
          {tabs.map((t, i) => {
            return (
              <Link
                href={t.path}
                className={t.title === "Contact" ? "filled-btn" : "outline-btn"}
                key={i}
              >
                {t.title}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
