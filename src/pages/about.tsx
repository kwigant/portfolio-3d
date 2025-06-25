import Header from "@/components/Header";
import "../styles/about.scss";
import { abtData } from "@/constants/about-data";
import Image from "next/image";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function About() {
  const { width } = useWindowDimensions();
  const isDesktop = width > 500 ? true : false;

  return (
    <div className="abt-page">
      <Header back={true} />

      <div style={{ marginTop: isDesktop ? 48 : 0 }}>
        {abtData.map((a, i) => (
          <div className="centered-column" key={i}>
            {isDesktop ? (
              <div className="abt-row">
                {i % 2 === 0 && (
                  <Image
                    className="left-img"
                    src={a.img}
                    width={a.width}
                    height={a.height}
                    alt={a.alt}
                  />
                )}
                <div className="abt-column">
                  <h2>{a.title}</h2>
                  <span
                    style={{ maxWidth: 600 }}
                    dangerouslySetInnerHTML={{ __html: a.description }}
                  ></span>
                </div>
                {i % 2 !== 0 && (
                  <Image
                    className="right-img"
                    src={a.img}
                    width={a.width}
                    height={a.height}
                    alt={a.alt}
                  />
                )}
              </div>
            ) : (
              <div className="abt-column">
                <Image src={a.img} width={230} height={300} alt={a.alt} />
                <h2>{a.title}</h2>
                <span
                  style={{ maxWidth: 600 }}
                  dangerouslySetInnerHTML={{ __html: a.description }}
                ></span>
              </div>
            )}
            {i !== 3 && (
              <div className="scroll-icon">
                <Image
                  src={"/icons/down-arrow.png"}
                  width={28}
                  height={28}
                  alt={"scroll down"}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
