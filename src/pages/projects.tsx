import ProjectListItem from "@/components/ProjectList";
import { devData } from "@/constants/project-list-data";

export default function Projects() {
  return (
    <div>
      {devData.map((d, i) => (
        <div
          style={{
            width: "100%",
            marginLeft: 24,
            marginRight: 24,
          }}
          key={i}
        >
          <h1
            className="title"
            style={{
              marginLeft: 0,
              textAlign: "center",
            }}
          >
            {d.title}
          </h1>
          {d.list.map((d, i) => (
            <ProjectListItem key={i} {...d} />
          ))}
        </div>
      ))}
    </div>
  );
}
