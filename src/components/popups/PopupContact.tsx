import Image from "next/image";

export default function PopupContact() {
  return (
    <>
      <h2>Let&apos;s Get in Touch</h2>
      <div className={"contact"}>
        <Image
          alt="portrait"
          style={{ borderRadius: 8 }}
          height={200}
          width={200}
          src={"/visuals/kw-pic.svg"}
        />
        <div className="contact-column" >
          <p className="subtitle">
            I&apos;m currently available for freelance work!
          </p>
          <p>
            Whether you need a website, an app, or just have questions about my
            work, feel free to reach out. I handle both design and development
            and would love to hear from you.
          </p>
          <div className="contact-row">
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
