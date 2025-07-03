import useWindowDimensions from "@/hooks/useWindowDimensions";
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

  const {width } = useWindowDimensions()
  const isDesktop = width > 500 ? true : false;
  return (
    <div className="column">
      <h2 style={{textAlign: isDesktop ? 'left' : 'center'}}>{props.title}</h2>
      <ul>
        {props.list.map((l, i) => {
          return props.clickable && l.path ? (
            <Link className="next-link" href={l.path} key={i}>
              <li className="clickable-li">
                <Image
                  className="img"
                  width={isDesktop ? 100 : 60}
                  height={isDesktop ? 100 : 60}
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
                className="img"
                width={isDesktop ? 100 : 60}
                height={isDesktop ? 100 : 60}
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
