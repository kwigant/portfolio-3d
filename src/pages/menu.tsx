import "@/styles/Header.scss";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { tabs } from "@/components/mobile/MobileHome";
import Link from "next/link";

export default function Menu() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function getTabStyle(idx: string) {
    if (
      searchParams?.get("tab") === idx ||
      searchParams?.get("tab") === idx.toUpperCase()
    )
      return "link-active";
    else return "link";
  }
  return (
    <div className="menu">
      <div className="menu-close" onClick={() => router.back()}>
        x
      </div>
      <Link href={"/about"} className="name-container">
        <h2>Kirsten Wigant</h2>
        <h4>Fullstack Engineer</h4>
      </Link>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 48,
          marginBottom: 48,
        }}
      >
        {tabs.map((t, i) => {
          return (
            <Link
              key={i}
              href={t.path}
              className={`${getTabStyle(
                t.title
              )} hover-underline-animation left`}
            >
              {t.title}
            </Link>
          );
        })}
      </div>
      <button
        style={{ border: "none", background: "none" }}
        onClick={() => router.push("/")}
      >
        <Image width={50} height={50} alt="home" src={"/icons/desk.svg"} />
      </button>
    </div>
  );
}
