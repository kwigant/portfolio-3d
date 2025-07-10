import "@/styles/about.scss";
import "@/styles/PopUp.scss";
import "@/styles/lists.scss";
import PopupList from "@/components/popups/PopupList";
import PopupGrid from "@/components/popups/PopupGrid";
import { education, tech } from "@/constants/popup-data";
import MobileHeader from "@/components/mobile/MobileHeader";

export default function Qualifications() {

  return (
    <div style={{width: '100%'}}>
      <MobileHeader />
      
        <PopupList title={'Education'} list={education} clickable={false}/>
        <br/>
        <br/>
        
        <PopupGrid title={'Technologies'} grid={tech}/>
      </div>
   
  );
}
