import Header from "@/components/Header";
import { allProjectData } from "@/constants/project-data";
import { projectData } from "@/constants/types";
import { useRouter } from "next/router";
import "../../styles/Projects.css";
import Link from "next/link";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
export default function Profile() {
  const router = useRouter();
  const id = router.query.id;
  const profile = allProjectData.filter((pd: projectData) => {
    return pd.id === id || undefined;
  });
  const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

  if (profile !== undefined && profile[0]) {
    return (
      <div style={{ overflow: "hidden", height: "100%" }}>
        <Header back={true} home={true} />

        <div className="layout">
          <aside>
            <h3>All Projects</h3>
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
            <div className="row" style={{alignItems: 'flex-end'}}>
              <Image
                width={150}
                height={150}
                alt="zen-tank"
                src={profile[0].img}
              />

              <div className="column">
                <h1 style={{marginLeft: 12}}>{profile[0].title}</h1>
                <div className="row">
                  {profile[0].projectDetails &&
                    profile[0].projectDetails.techStack &&
                    profile[0].projectDetails.techStack.map((t, i) => (
                      <div key={i} className="tag">
                        {t}
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <p style={{marginTop: 32}}>{profile[0].description}</p>
            <div className="details-grid">
              <div className="column">
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
              </div>
              <div className={"deliverables"}>
                <h3>Deliverables</h3>
                <div className={"parse-container"}>
                  {profile[0].projectDetails.deliverables.map((d, i) => {
                    return <p key={i}>{d}</p>;
                  })}
                </div>
              </div>
            </div>
             <h3 style={{marginTop: 24}}>Visuals</h3>
            <p style={{marginTop: 32, marginBottom: 32}}>{profile[0].description}</p>

            <ImageGallery items={images} />
          </main>
        </div>
      </div>
    );
  }
}
