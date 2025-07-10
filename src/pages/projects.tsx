import Header from "@/components/Header";
import { devData } from "@/constants/project-list-data";
import "../styles/Projects.scss";
import "../styles/globals.scss";
import "../styles/Header.scss";
import Image from "next/image";
import Link from "next/link";
import MobileHeader from "@/components/mobile/MobileHeader";
export default function Projects() {
  return (
    <div className="page-container">
      <div className={"desktop-view centered-column"}>
        <Header back={true} home={true} />
      </div>
      <div className="mobile-view centered-column">
        <MobileHeader />
      </div>
      {devData.map((d, i) => (
        <div key={i}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: 24,
              marginTop: 48,
            }}
          >
            {d.title}
          </h2>
          <div
            className="divider-container"
            style={{ width: "100%", marginTop: 0 }}
          >
            <div className="divider" />
          </div>
          {d.list.map((d, i) => (
            <Link href={d.path} className="project-list-item" key={i}>
              <Image
                className="project-list-img"
                src={d.img}
                width={200}
                height={200}
                alt={d.title}
              />

              <div className="column hover-underline-animation column-spacing">
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
