import Header from "@/components/Header";
import "../styles/about.scss";
import PopupContact from "@/components/popups/PopupContact";

export default function Contact() {

  return (
    <div className="abt-page">
      <Header back={true} />
      <PopupContact/>
    </div>
  );
}
