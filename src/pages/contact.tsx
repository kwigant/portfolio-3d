import Header from "@/components/Header";
import { useState } from "react";
import "../styles/Contact.css";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Contact() {
  const toEmail = "to: kirsten.wigant@gmail.com";
  const router = useRouter();
  const [backHover, setBackHover] = useState(false);
  const [tab, setTab] = useState(2);
  const [from, setFrom] = useState('')
  const [body, setBody] = useState('')

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Header activeTab={tab} setActiveTab={() => setTab(tab)} />
      <div className="container">
        <aside>
          <button
            onMouseOver={() => setBackHover(true)}
            onMouseOut={() => setBackHover(false)}
            className="secondary-btn"
            onClick={() => router.push("/")}
          >
            <Image
              width={32}
              height={32}
              alt="back"
              src={backHover ? "/arrow-pink.png" : "/arrow-black.png"}
            />
          </button>

          <div className="img"></div>
          <h2>Let&apos;s Get in Touch</h2>
          <p>
           I&apos;m available for freelance work!<br/><br/> Need a website or app? I&apos;ve got design and development covered - drop me a message :) 
          </p>
        </aside>
        <main>
          <h2>Send an Email</h2>

          <div className="column">
            <input disabled value={toEmail}></input>
            <input value={from} onChange={(e)=>setFrom(e.target.value)} placeholder={"your-email@email.com"}></input>
            <textarea value={body} onChange={(e)=>setBody(e.target.value)} placeholder={"email"}></textarea>
          </div>

          <div className="end-row">
            <button className="primary-btn">Send</button>
          </div>
        </main>
      </div>
    </div>
  );
}
