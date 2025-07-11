import Image from "next/image";
import "@/styles/grid.scss"
type Grid = {
    img: string;
    title: string;
}

type PopupGrid = {
    title: string;
    grid: Grid[]
}

export default function PopupGrid(props: PopupGrid) {
  return (
    <div className="column">
      <h2>{props.title}</h2>
      <div className="grid">
        {props.grid.map((t, i) => {
          return (
            <div key={i} className="tech-container">
              <Image
                className="tech-logo"
                height={60}
                width={60}
                alt="logo"
                src={t.img}
              />
              <p className="small-text">{t.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
