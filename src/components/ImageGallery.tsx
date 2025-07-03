import Image from "next/image";
import { useState } from "react";
import "../styles/globals.scss";
import Link from "next/link";
import { Gallery } from "@/constants/types";
import useWindowDimensions from "@/hooks/useWindowDimensions";

type PropsGallery = {
  images: Gallery[]
}
export default function ImageGallery(props: PropsGallery) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const {width} = useWindowDimensions()
  const isDesktop = width > 500 ? true : false;
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
         <div
          className="justified-row"
         
        >
          <h3 style={{ marginTop: 24 }}>{props.images[currentIdx].title}</h3>

          <div className="row">
            <button className="btn" onClick={leftClick}>
              <Image
                src={"/icons/chevron-left.png"}
                alt="left"
                width={24}
                height={24}
              />
            </button>
            <button className="btn" onClick={rightClick}>
              <Image
                style={{ rotate: "180deg" }}
                src={"/icons/chevron-left.png"}
                alt="left"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div> 
      <p style={{ marginTop: 12,}}>
        {props.images[currentIdx].description}
      </p>

      <div style={{ position: "relative", width: "100%", height: isDesktop ? 600 : '100%' }}>
        <Image fill={true} src={getImage()} alt={"project image"} />
      
      </div>
    </div>
  );
}
