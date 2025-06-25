import { useState } from "react";
import "../styles/Header.css";
import "../styles/globals.scss";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import useWindowDimensions from "@/hooks/useWindowDimensions";

type HeaderProps = {
  back: boolean;
  home?: boolean;
};

export default function Header(props: HeaderProps) {
  const [backHover, setBackHover] = useState(false);
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [menu, setMenu] = useState(false);
  const params = new URLSearchParams();
  const searchParams = useSearchParams();
  const tabs = ["career", "qualifications", "contact", "projects"];
  function setTabByURL(tab: string) {
    params.set("tab", tab);
    router.push(`/?${params.toString()}`);
  }

  function getTabStyle(idx: string) {
    if (searchParams?.get("tab") === idx) return "link-active";
    else return "link";
  }

  return (
    <header
      style={{
        justifyContent: props.back ? "center" : "space-evenly",
        alignItems: "center",
      }}
    >
      {width > 500 && !props.back && (
        <>
          <h4
            onClick={() => setTabByURL("career")}
            className={`${getTabStyle(
              "career"
            )} hover-underline-animation left`}
          >
            Career
          </h4>
          <h4
            onClick={() => setTabByURL("qualifications")}
            className={`${getTabStyle(
              "qualifications"
            )} hover-underline-animation left`}
          >
            Qualifications
          </h4>
        </>
      )}

      {props.back && (
        <button
          onMouseOver={() => setBackHover(true)}
          onMouseOut={() => setBackHover(false)}
          className="back-link"
          onClick={() => router.back()}
        >
          <Image
            width={32}
            height={32}
            alt="back"
            src={backHover ? "/icons/arrow-pink.png" : "/icons/arrow-black.png"}
          />
        </button>
      )}

      <Link href={"/about"} className="name-container">
        <h1>Kirsten Wigant</h1>
        <h4>Freelance Web & Mobile Developer</h4>
      </Link>

      {props.home && (
        <button className="desk-link" onClick={() => router.push("/")}>
          <Image width={50} height={50} alt="home" src={"/icons/desk.svg"} />
        </button>
      )}

      {width > 500 && !props.back && (
        <>
          <h4
            onClick={() => setTabByURL("contact")}
            className={`${getTabStyle(
              "contact"
            )} hover-underline-animation left`}
          >
            Contact
          </h4>
          <h4
            onClick={() => setTabByURL("projects")}
            className={`${getTabStyle(
              "projects"
            )} hover-underline-animation left`}
          >
            Projects
          </h4>
        </>
      )}
      {width < 500 && <button onClick={() => setMenu(!menu)}>Menu</button>}

      {menu && (
        <ul className="menu">
          {tabs.map((t, i) => {
            return (
              <li
                key={i}
                onClick={() => setTabByURL(t)}
                className={`${getTabStyle(t)} hover-underline-animation left`}
              >
                {t}
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
