import { Dispatch, SetStateAction, useState } from "react";
import "../styles/Header.css";
import Image from "next/image";
import { useRouter } from 'next/navigation'  // Usage: App router
import Link from "next/link";

type HeaderProps = {
  back: boolean;
  home?: boolean;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
};

export default function Header(props: HeaderProps) {
  const [backHover, setBackHover] = useState(false);
  const router = useRouter()
  function getTabStyle(idx: number) {
    if (props.activeTab === idx) return "link-active";
    else return "link";
  }
  return (
    <header style={{justifyContent: props.back ? 'center' : 'space-evenly'}}>
      {!props.back && (
        <h4
          onClick={() => props.setActiveTab(0)}
          className={`${getTabStyle(0)} hover-underline-animation left`}
        >
          Career
        </h4>
      )}
      {!props.back && (
        <h4
          onClick={() => props.setActiveTab(1)}
          className={`${getTabStyle(1)} hover-underline-animation left`}
        >
          Qualifications
        </h4>
      )}
      {props.back && (
        <button onMouseOver={()=>setBackHover(true)} onMouseOut={()=>setBackHover(false)} className="back-link" onClick={() => router.back()}>
          <Image
            width={32}
            height={32}
            alt="back"
            src={backHover ? "/arrow-pink.png" : "/arrow-black.png"}
          />
        </button>
      )}
      <Link href={'/about'} className="name-container">
        <h1>Kirsten Wigant</h1>
        <h4>Freelance Web & Mobile Developer</h4>
      </Link>
       {props.home && (
        <button className="desk-link" onClick={() => router.push('/')}>
          <Image
            width={50}
            height={50}
            alt="home"
            src={"/desk.svg"}
          />
        </button>
      )}
      {!props.back && (
        <h4
          onClick={() => props.setActiveTab(2)}
          className={`${getTabStyle(2)} hover-underline-animation left`}
        >
          Contact
        </h4>
      )}
      {!props.back && (
        <h4
          onClick={() => props.setActiveTab(3)}
          className={`${getTabStyle(3)} hover-underline-animation left`}
        >
          Projects
        </h4>
      )}
    </header>
  );
}
