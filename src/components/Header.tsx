import "../styles/Header.scss";
import "../styles/globals.scss";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

type HeaderProps = {
  back: boolean;
  home?: boolean;
};

export default function Header(props: HeaderProps) {
  const router = useRouter();
  const params = new URLSearchParams();
  const searchParams = useSearchParams();

  function setTabByURL(tab: string) {
    params.set("tab", tab);
    router.push(`/?${params.toString()}`);
  }

  function getTabStyle(idx: string) {
    if (
      searchParams?.get("tab") === idx ||
      searchParams?.get("tab") === idx.toUpperCase()
    )
      return "link-active";
    else return "link";
  }

  return (
    <header
      style={{
        justifyContent: props.back ? "center" : "space-evenly",
        alignItems: "center",
      }}
    >
      {!props.back && (
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
        <button className="back-link" onClick={() => router.back()}>
          <Image
            width={18}
            height={18}
            alt="back"
            src={"/icons/chevron-left.png"}
          />
        </button>
      )}

      <Link href={"/about"} className="name-container">
        <h2>Kirsten Wigant</h2>
        <h4>Fullstack Engineer</h4>
      </Link>

      {props.home && (
        <button className="desk-link" onClick={() => router.push("/")}>
          <Image width={50} height={50} alt="home" src={"/icons/desk.svg"} />
        </button>
      )}

      {!props.back && (
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
    </header>
  );
}
