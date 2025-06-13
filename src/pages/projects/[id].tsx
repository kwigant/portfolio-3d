import Header from "@/components/Header";
import { allProjectData } from "@/constants/project-data";
import { projectData } from "@/constants/types";
import { useRouter } from "next/router";
import { useState } from "react";
import "./Projects.css";
import Link from "next/link";

export default function Profile() {
  const router = useRouter();
  const [tab, setTab] = useState(3);

  const id = router.query.id;
  const profile = allProjectData.filter((pd: projectData) => {
    return pd.id === id || undefined;
  });

  const handleNav = (idx: number) => {
    console.log('num', idx)
    
      router.push('/')
    
  }

  if (profile !== undefined && profile[0]) {
    return (
      <>
        <Header activeTab={tab} setActiveTab={() => handleNav(tab)} />
       
        <div className="layout">
          <aside>
          <button onClick={()=> router.push('/')}><h3>Back</h3></button>
          <ul>
            
            {allProjectData.map((d,i) => {
              return <Link key={i} className="next-link" href={`/projects/${d.id}`}>
                <li className={profile[0].id === d.id ? 'li-current' : 'li'}>{d.title}</li>
              </Link>
            })}
          </ul>
          </aside>
          <main>
           <h1>{profile[0].title}</h1>
          </main>
        </div>
       
      </>
  )
  };
}
