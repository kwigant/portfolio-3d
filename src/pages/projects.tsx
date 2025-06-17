import Header from "@/components/Header";
import { devData } from "@/constants/project-list-data";
import "../styles/Projects.css";
import Image from "next/image";
import Link from "next/link";
export default function Projects() {

  return (
    <div >
      <Header back={true} />
      {devData.map((d, i) => (
        <div
          style={{
            width: "100%",
          }}
          key={i}
          className="project-list"
        >
          <h2
            style={{
              marginLeft: 0,
              textAlign: "center",
            }}
          >
            {d.title}
          </h2>
          {d.list.map((d, i) => (
            <Link href={d.path} className="project-list-item" key={i}>
              <Image src={d.img} width={100} height={100} alt={d.title} />

              <div className="column">
                <h3>{d.title}</h3>
                <div>{d.subtitle}</div>
                <div className="row">
                  {d.tags.map((t, i) => (
                    <div className="tag" key={i}>{t}</div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
