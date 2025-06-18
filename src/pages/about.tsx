import Header from "@/components/Header";
import "../styles/Projects.css";
import { abtData } from "@/constants/about-data";
import Image from "next/image";

export default function About() {

  return (
    <div className="abt-page">
      <Header back={true} />

      {abtData.map((a, i) => (
        <div className="abt-row" key={i}>
        { i % 2 === 0 && <Image className="left-img" src={a.img} width={a.width} height={a.height} alt={a.alt}/>}
         
         <div className="abt-column">
          <h2>{a.title}</h2>
          <span dangerouslySetInnerHTML={{__html: a.description}}></span>
          </div>
              { i % 2 !== 0 && <Image className="right-img" src={a.img} width={a.width} height={a.height} alt={a.alt}/>}
        </div>
      ))}
    </div>
  );
}
