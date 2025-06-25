import Image from "next/image";
import Link from "next/link";

type List = {
  title: string;
  description: string;
  date: string;
  src: string;
  alt: string;
  path?: string;
};

type PopupListProps = {
  title: string;
  list: List[];
  clickable: boolean;
};

export default function PopupList(props: PopupListProps) {
  return (
    <div className="column">
      <h2>{props.title}</h2>
      <ul>
        {props.list.map((l, i) => {
          return props.clickable && l.path ? (
            <Link className="next-link" href={l.path} key={i}>
              <li className="clickable-li">
                <Image
                  style={{ borderRadius: 8, marginRight: 12 }}
                  width={100}
                  height={100}
                  src={l.src}
                  alt={l.alt}
                />
                <div className="column hover-underline-animation">
                  <p className="degree">{l.title}</p>
                  <p className="school">{l.description}</p>
                  <p className="date">{l.date}</p>
                </div>
              </li>
            </Link>
          ) : (
            <li key={i}>
              <Image
                style={{ borderRadius: 8, marginRight: 12 }}
                width={100}
                height={100}
                src={l.src}
                alt={l.alt}
              />
              <div className="column">
                <p className="degree">{l.title}</p>
                <p className="school">{l.description}</p>
                <p className="date">{l.date}</p>
              </div>
            </li>
          );
        })}
      </ul>
      {props.clickable && (
        <Link
          style={{ textDecoration: "none" }}
          href={"/projects"}
          className="secondary-btn"
        >
          View All (7)
        </Link>
      )}
    </div>
  );
}
