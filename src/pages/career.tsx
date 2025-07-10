import "@/styles/about.scss";
import "@/styles/PopUp.scss";
import "@/styles/lists.scss";
import PopupList from "@/components/popups/PopupList";
import { career } from "@/constants/popup-data";
import MobileHeader from "@/components/mobile/MobileHeader";

export default function Career() {
  return (
    <div className="abt-page">
      <MobileHeader  />
      <div>
        <PopupList title={"Career"} list={career} clickable={false} />
      </div>
    </div>
  );
}
