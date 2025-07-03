import { abtData } from "@/constants/about-data";
import Image from "next/image";

type AboutListProps = {
  isDesk: boolean;
};
export default function AboutList(props: AboutListProps) {
  return abtData.map((a, i) => (
    <div className="centered-column" key={i}>
      {props.isDesk ? (
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
          <Image src={a.img} width={280} height={250} alt={a.alt} />
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
  ));
}
