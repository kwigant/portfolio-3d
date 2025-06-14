import Header from "@/components/Header";
import { allProjectData } from "@/constants/project-data";
import { projectData } from "@/constants/types";
import { useRouter } from "next/router";
import { useState } from "react";
import "./Projects.css";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";

const colors = ["#FE9689", "#B6A9C0", "#FFD8BA"];
export default function Profile() {
  const router = useRouter();
  const [tab, setTab] = useState(3);
  const [backHover, setBackHover] = useState(false);
  const id = router.query.id;
  const profile = allProjectData.filter((pd: projectData) => {
    return pd.id === id || undefined;
  });

  const handleNav = () => {
    router.push("/");
  };

  if (profile !== undefined && profile[0]) {
    return (
      <div style={{ overflow: "hidden", height: '100%' }}>
        <Header activeTab={tab} setActiveTab={() => handleNav()} />

        <div className="layout">
          <aside>
            <button
              onMouseOver={() => setBackHover(true)}
              onMouseOut={() => setBackHover(false)}
              className="btn"
              onClick={() => router.push("/")}
            >
              <Image
                width={32}
                height={32}
                alt="back"
                src={backHover ? "/arrow-pink.png" : "/arrow-black.png"}
              />
            </button>
            <ul>
              {allProjectData.map((d, i) => {
                return (
                  <Link
                    key={i}
                    className="next-link"
                    href={`/projects/${d.id}`}
                  >
                    <li
                      className={profile[0].id === d.id ? "li-current" : "li"}
                    >
                      {d.title}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </aside>
          <main>
            <div className="center-container">
              <Image
                width={150}
                height={150}
                alt="zen-tank"
                src={profile[0].img}
              />
              <h1>{profile[0].title}</h1>
              <div className="row">
                {profile[0].projectDetails &&
                  profile[0].projectDetails.techStack &&
                  profile[0].projectDetails.techStack.map((t, i) => (
                    <div
                      key={i}
                      className="tag"
                      style={{ backgroundColor: colors[i] }}
                    >
                      {t}
                    </div>
                  ))}
              </div>
            </div>

            <p>{profile[0].description}</p>

            <div className={"details-row"}>
              <div className={"date"}>
                <h3>Date</h3>
                <p className={"parse-container"} style={{ marginBottom: 24 }}>
                  {profile[0].projectDetails.date}
                </p>
                <h3>My Role</h3>
                <p className={"parse-container"}>
                  {profile[0].projectDetails.role}
                </p>
              </div>
              <div className={"deliverables"}>
                <h3>Deliverables</h3>
                <div className={"parse-container"}>
                  {parse(profile[0].projectDetails.deliverables)}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
