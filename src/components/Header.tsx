import { useState } from "react";
import "../styles/Header.css";
import Image from "next/image";
import { useRouter } from 'next/navigation'  // Usage: App router
import Link from "next/link";

type HeaderProps = {
  back: boolean;
  home?: boolean;
};

export default function Header(props: HeaderProps) {
  const [backHover, setBackHover] = useState(false);
  const router = useRouter()

   const params = new URLSearchParams();
   
  function setTabByURL(tab: string) {
      params.set('tab', tab);
      router.push(`/?${params.toString()}`);
  }

  function getTabStyle(idx: string) {
    if (params.get('tab') === idx) return "link-active";
    else return "link";
  }
  return (
    <header style={{justifyContent: props.back ? 'center' : 'space-evenly'}}>
      {!props.back && (
        <h4
          onClick={() => setTabByURL('career')}
          className={`${getTabStyle('career')} hover-underline-animation left`}
        >
          Career
        </h4>
      )}
      {!props.back && (
        <h4
          onClick={() =>  setTabByURL('qualifications')}
          className={`${getTabStyle('qualifications')} hover-underline-animation left`}
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
          onClick={() =>  setTabByURL('contact')}
          className={`${getTabStyle('contact')} hover-underline-animation left`}
        >
          Contact
        </h4>
      )}
      {!props.back && (
        <h4
          onClick={() =>  setTabByURL('projects')}
          className={`${getTabStyle('projects')} hover-underline-animation left`}
        >
          Projects
        </h4>
      )}
    </header>
  );
}
