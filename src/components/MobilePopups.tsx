import { career, education, projects, tech } from "@/constants/popup-data";
import PopupList from "./popups/PopupList";
import PopupGrid from "./popups/PopupGrid";
import PopupContact from "./popups/PopupContact";

type MobilePopups = {
  tab: string;
  closePopup: () => void;
};

export default function MobilePopups(props: MobilePopups) {
  return (
    <div>
      {props.tab === "career" && (
       <PopupList title={'Career'} list={career} clickable={false}/>
      )}
      {props.tab === "qualifications" && (
        <div>
          <PopupList title={'Education'} list={education} clickable={false}/>
          <PopupGrid title={'Technologies'} grid={tech}/>
        </div>
      )}
   
      {props.tab === "contact" && (
        <PopupContact/>
      )}
        
      {props.tab === "projects" && (
        <PopupList title={"Latest Projects"} list={projects} clickable={true}/>
      )}
    </div>
  );
}
