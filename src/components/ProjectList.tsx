import { project } from "@/constants/types";
import Image from "next/image";
import Link from "next/link";
import "./Project.css";

export default function ProjectListItem(props: project) {

  return (
    <Link
      href={`/projects/${props.id}`}
      className={"project-list-item"}
    >
      <Image
        width={ 180}
        height={ 180}
        alt={props.title}
        src={props.img}
        style={{marginBottom:24 }}
      />
      <div className={"text-column"}>
         
          <div className="justified-row" style={{marginBottom: 24}}>
            <h1 >{props.title}</h1>
            <Image
              width={18}
              height={18}
              alt={props.title}
              src={"/icons/chevron-blue.png"}
            />
          </div>
    

        {props.subtitle && (
          <>
            <p>{props.subtitle}</p>
            <br />
          </>
        )}
        <p style={{  marginBottom: 8 }}>
          {props.description}
        </p>
        <div className="row" style={{flexWrap: 'wrap', marginBottom: 48}}>
          {props.tags.map((t, i) => (
            <div className={'tag'} key={i}>
              {t}
            </div>
          ))}
        </div>
      </div>
      
    </Link>
  );
}
