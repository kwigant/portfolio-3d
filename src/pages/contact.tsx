import MobileHeader from "@/components/mobile/MobileHeader";
import "@/styles/contact.scss";
import Image from "next/image";

export default function Contact() {

  return (
    <div className="contact">
      <MobileHeader />
      <>
           <div className={"contact"}>
             <div className="contact-img">
               <Image
                 className="landing-img-mobile"
                 src="/visuals/kw-pic.svg"
                 width={150}
                 height={150}
                 alt="profile"
               />
             </div>
                <h2>Let&apos;s Get in Touch</h2>

             <div className="contact-column">
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
                     src={"/icons/linkedin.svg"}
                     width={24}
                     height={24}
                     alt={"linkedin"}
                   />
                   <p style={{ marginLeft: 8, marginRight: 24 }}>LinkedIn</p>
                 </div>
                 <div className="row">
                   <Image
                     src={"/icons/email.svg"}
                     width={24}
                     height={24}
                     alt={"email"}
                   />
                   <p style={{ marginLeft: 8 }}>kirsten.wigant@gmail.com</p>
                 </div>
               </div>
             </div>
           </div>
         </>
    </div>
  );
}
