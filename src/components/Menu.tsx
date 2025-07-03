import "@/styles/Header.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { tabs } from "./mobile/MobileHome";
import Link from "next/link";

type MenuProps = {
  onClose: () => void;
  setTab: (tab: string) => void;
  getTabStyle: (tab: string) => string;
};

export default function Menu(props: MenuProps) {
  const router = useRouter()

  return (
    <div className="menu">
      <div className="menu-close" onClick={()=> props.onClose()}>x</div>
      <Link href={"/about"} className="name-container">
        <h2>Kirsten Wigant</h2>
        <h4>Freelance Web & Mobile Developer</h4>
        
      </Link>
     
      <div style={{display: "flex", alignItems: 'center', flexDirection: "column", marginTop: 48, marginBottom: 48}}>
        {tabs.map((t, i) => {
          return (
            <Link
              key={i}
              href={t.path}
              className={`${props.getTabStyle(t.title)} hover-underline-animation left`}
            >
              {t.title}
            </Link>
          );
        })}
      </div>
      <button style={{border: 'none', background: 'none'}} onClick={() => router.push("/")}>
        <Image width={50} height={50} alt="home" src={"/icons/desk.svg"} />
      </button>
    </div>
  );
}
