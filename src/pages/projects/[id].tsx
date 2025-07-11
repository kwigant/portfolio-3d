import Header from "@/components/Header";
import { allProjectData } from "@/constants/project-data";
import { projectData } from "@/constants/types";
import { useRouter } from "next/router";
import "@/styles/Projects.scss";
import "@/styles/globals.scss";
import Link from "next/link";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import MobileHeader from "@/components/mobile/MobileHeader";

export default function Profile() {
  const router = useRouter();
  const id = router.query.id;
  const profile = allProjectData.filter((pd: projectData) => {
    return pd.id === id || undefined;
  });

  if (profile !== undefined && profile[0]) {
    return (
      <div style={{ overflow: "hidden", height: "100%" }}>
        <div className={"desktop-view centered-column"}>
          <Header back={true} home={true} />
        </div>
        <div className="mobile-view centered-column">
          <MobileHeader />
        </div>
        <div className="layout">
          <aside>
            <Link className="next-link" href={`/projects`}>
              <h3>All Projects</h3>
            </Link>
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
            <div className={"header-row"}>
              <Image
                width={200}
                height={200}
                className="project-list-img"
                alt="zen-tank"
                src={profile[0].img}
              />

              <div className="projects-column">
                <h2 style={{ marginBottom: 12 }}>{profile[0].title}</h2>
                <div className={"projects-row"}>
                  {profile[0].projectDetails &&
                    profile[0].projectDetails.techStack &&
                    profile[0].projectDetails.techStack.map((t, i) => (
                      <div key={i} className="tag">
                        {t}
                      </div>
                    ))}
                </div>
                <p style={{ margin: 0, marginTop: 12, maxWidth: 700 }}>
                  {profile[0].description}
                </p>
              </div>
            </div>

            <div className="divider-container">
              <div className="divider" />
            </div>
            <div className="details-grid">
              <div className="column centered">
                <div className={"date"}>
                  <h3>My Role</h3>
                  <p className={"parse-container"}>
                    {profile[0].projectDetails.role}
                  </p>
                  <h3>Date</h3>
                  <p className={"parse-container"} style={{ marginBottom: 24 }}>
                    {profile[0].projectDetails.date}
                  </p>
                </div>
              </div>
              <div className="special-divide divider-container">
                <div className="divider" />
              </div>
              <div className={"deliverables"}>
                <h3>Deliverables</h3>
                <div className={"parse-container"}>
                  {profile[0].projectDetails.deliverables.map((d, i) => {
                    return <p key={i}>{d}</p>;
                  })}
                  {profile[0].projectDetails.subDeliverables && (
                    <ul>
                      {profile[0].projectDetails.subDeliverables.map((d, i) => {
                        return <li key={i}>{d}</li>;
                      })}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="divider-container">
              <div className="divider" />
            </div>

            <ImageGallery images={profile[0].projectDetails.images} />
          </main>
        </div>
      </div>
    );
  }
}
