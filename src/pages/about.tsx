import Header from "@/components/Header";
import { useState } from "react";
import "../styles/Projects.css";
import { abtData } from "@/constants/about-data";
import Image from "next/image";

export default function About() {
  const [tab, setTab] = useState(-1);
  return (
    <div className="abt-page">
      <Header back={true} activeTab={tab} setActiveTab={setTab} />

      {abtData.map((a, i) => (
        <div className="abt-row" key={i}>
        { i % 2 === 0 && <Image src={a.img} width={a.width} height={a.height} alt={a.alt}/>}
         
         <div className="column">
          <h2>{a.title}</h2>
          <p>{a.description}</p>
          </div>
              { i % 2 !== 0 && <Image src={a.img} width={a.width} height={a.height} alt={a.alt}/>}
        </div>
      ))}
    </div>
  );
}
