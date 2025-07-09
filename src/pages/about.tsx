import Header from "@/components/Header";
import "../styles/about.scss";
import "@/styles/globals.scss";
import AboutList from "@/components/AboutList";
import Image from "next/image";
import { abtData } from "@/constants/about-data";

export default function About() {
  return (
    <div className="abt-page">
      <Header back={true} home={true} />
      <div className={"desktop-view"} style={{marginTop: 80}}>
        <AboutList />
      </div>
      <div className="mobile-view centered-column">
        {abtData.map((a, i) => (
          
            <div className="abt-row" key={i}>
              
                <Image
                  className="left-img"
                  src={a.img}
                  width={a.width}
                  height={a.height}
                  alt={a.alt}
                />
              

              <div className="abt-column">
                <h2 style={{textAlign: 'center'}}>{a.title}</h2>
                <span
                  dangerouslySetInnerHTML={{ __html: a.description }}
                ></span>
              </div>
            </div>
          
        ))}
      </div>
    </div>
  );
}
