import Header from "@/components/Header";
import "@/styles/contact.scss";
import PopupContact from "@/components/popups/PopupContact";

export default function Contact() {

  return (
    <div className="contact">
      <Header back={true} />
      <PopupContact/>
    </div>
  );
}
