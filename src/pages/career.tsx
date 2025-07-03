import Header from "@/components/Header";
import "@/styles/about.scss";
import "@/styles/PopUp.scss";
import PopupList from "@/components/popups/PopupList";
import { career } from "@/constants/popup-data";

export default function Career() {
  return (
    <div className="abt-page">
      <Header back={true} />
      <div>
        
        <PopupList title={"Career"} list={career} clickable={false} />
      </div>
    </div>
  );
}
