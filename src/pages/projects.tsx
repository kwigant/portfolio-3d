import Header from "@/components/Header";
import { devData } from "@/constants/project-list-data";
import "../styles/Projects.scss";
import "../styles/globals.scss";
import "../styles/Header.scss";
import Image from "next/image";
import Link from "next/link";
export default function Projects() {
  
  return (
    <div>
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
              margin: 0,
              marginBottom: 24,
            }}
          >
            {d.title}
          </h2>
          {d.list.map((d, i) => (
            <Link href={d.path} className="project-list-item" key={i}>
              <Image src={d.img} width={200} height={200} alt={d.title} />

              <div
                className="column hover-underline-animation"
                style={{ marginLeft: 24 }}
              >
                <h3>{d.title}</h3>

                <div className={"projects-row"}>
                  {d.tags.map((t, i) => (
                    <div className="tag" key={i}>
                      {t}
                    </div>
                  ))}
                </div>
                <p>{d.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
