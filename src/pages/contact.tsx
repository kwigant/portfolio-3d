import Header from "@/components/Header";
import Link from "next/link";
import { useState } from "react";
import '../components/PopUp.css';

export default function Contact() {
  const toEmail = "to: kirsten.wigant@gmail.com";

    const [tab, setTab] = useState(2)
    return (
        <div style={{height: '100%'}}>
            
            <Header activeTab={tab} setActiveTab={() => setTab(tab)} />
            <Link href={'/'}>Back</Link>

            <div className="row">
              <div className="column">
                <div className="img"></div>
                <h2>Contact Me!</h2>
                <p>
                  Whether you need a website or app built, or are just curious
                  about my projects and background, let&apos;s get in touch!
                </p>
              </div>
              <div className="column">
                <div className="row">
                  <h2>Send an Email</h2>
                  <Link href={"/contact"}>Full Screen</Link>
                </div>
                <input disabled value={toEmail}></input>
                <input placeholder={"your-email@email.com"}></input>
                <textarea placeholder={"email"}></textarea>
                <div className="end-row">
                  <button className="send-btn">Send</button>
                </div>
              </div>
            </div>
        </div>
    )
}