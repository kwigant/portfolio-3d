import Header from "@/components/Header";
import "../styles/about.scss";
import { abtData } from "@/constants/about-data";
import Image from "next/image";

export default function About() {

  return (
    <div className="abt-page">
      <Header back={true} />

      <div style={{marginTop: 48}}>
        {abtData.map((a, i) => (
          <div className="centered-column" key={i}>
            <div className="abt-row" >
            { i % 2 === 0 && <Image className="left-img" src={a.img} width={a.width} height={a.height} alt={a.alt}/>}
             <div className="abt-column">
              <h2>{a.title}</h2>
              <span style={{maxWidth: 600}} dangerouslySetInnerHTML={{__html: a.description}}></span>
              </div>
                  { i % 2 !== 0 && <Image className="right-img" src={a.img} width={a.width} height={a.height} alt={a.alt}/>}
            </div>
            { i !== 3 && <div className="scroll-icon">
              <Image src={'/icons/down-arrow.png'} width={28} height={28} alt={'scroll down'}/>
            </div>}
          </div>
        ))}
      </div>
    </div>
  );
}
