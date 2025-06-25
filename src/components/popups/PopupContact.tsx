import useWindowDimensions from "@/hooks/useWindowDimensions";
import Image from "next/image";

export default function PopupContact() {
    const {width} = useWindowDimensions()
    const isDesktop = width > 500 ? true : false
  return (
    <>
      <h2>Let&apos;s Get in Touch</h2>
      <div className={isDesktop ? "row" : "column"} style={{ alignItems: width > 500 ? "flex-start" : "center" }}>
        <Image
          alt="portrait"
          style={{ borderRadius: 8 }}
          height={200}
          width={200}
          src={"/visuals/kw-pic.svg"}
        />
        <div className="column" style={{ marginLeft: isDesktop ?  24 : 0, width: "100%" }}>
          <p className="subtitle">
            I&apos;m currently available for freelance work!
          </p>
          <p>
            Whether you need a website, an app, or just have questions about my
            work, feel free to reach out. I handle both design and development
            and would love to hear from you.
          </p>
          <div className={isDesktop ? "row" : "column"}>
            <div className="row">
              <Image
                src={"/icons/linkedin.png"}
                width={40}
                height={40}
                alt={"linkedin"}
              />
              <p style={{ marginLeft: 8, marginRight: 24 }}>LinkedIn</p>
            </div>
            <div className="row">
              <Image
                src={"/icons/email.png"}
                width={40}
                height={40}
                alt={"email"}
              />
              <p style={{ marginLeft: 8 }}>kirsten.wigant@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
