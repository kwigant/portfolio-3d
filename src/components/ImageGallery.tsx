import Image from "next/image";
import { useState } from "react";
import "@/styles/globals.scss";
import Link from "next/link";
import { Gallery } from "@/constants/types";

type PropsGallery = {
  images: Gallery[];
};
export default function ImageGallery(props: PropsGallery) {
  const [currentIdx, setCurrentIdx] = useState(0);
  function rightClick() {
    if (currentIdx < props.images.length - 1) setCurrentIdx(currentIdx + 1);
    else setCurrentIdx(0);
  }

  function leftClick() {
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
    else setCurrentIdx(props.images.length - 1);
  }

  function getImage() {
    return props.images[currentIdx].src;
  }

  if (props.images.length < 1)
    return (
      <div>
        <h3 style={{ marginTop: 24 }}>Visuals</h3>
        <p style={{ marginTop: 32, marginBottom: 32 }}>
          This project is owned by Cisco and as a result I can’t show any code
          or visuals associated with this product. However if you would like to
          chat more about my experience at Cisco and this project in particular
          then <Link href={"/?tab=contact"}> let’s connect!</Link>
        </p>
      </div>
    );

  return (
    <div>
      <div className="justified-row" style={{marginBottom: 24}}>
        <button className="btn" onClick={leftClick}>
          <Image
            src={"/icons/chevron-left.png"}
            alt="left"
            width={18}
            height={18}
          />
        </button>
        <h3 style={{ marginTop: 24 }}>{props.images[currentIdx].title}</h3>
        <button className="btn" onClick={rightClick}>
          <Image
            style={{ rotate: "180deg" }}
            src={"/icons/chevron-left.png"}
            alt="left"
            width={18}
            height={18}
          />
        </button>
      </div>
      <p style={{ marginTop: 12 }}>{props.images[currentIdx].description}</p>

      <div className="image-gallery">
        <Image fill={true} src={getImage()} alt={"project image"} />
      </div>
    </div>
  );
}
