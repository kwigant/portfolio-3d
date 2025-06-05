import { allProjectData } from "@/constants/project-data";
import { projectData } from "@/constants/types";

import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();

  const id = router.query.id;
  const profile = allProjectData.filter((pd: projectData) => {
    return pd.id === id || undefined;
  });

  if (profile !== undefined && profile[0]) return <div>{profile[0].title}</div>;
}
