import Header from "@/components/Header";
import "../styles/about.scss";
import "@/styles/PopUp.scss";
import PopupList from "@/components/popups/PopupList";
import PopupGrid from "@/components/popups/PopupGrid";
import { education, tech } from "@/constants/popup-data";

export default function Qualifications() {

  return (
    <div style={{width: '100%'}}>
      <Header back={true} />
      
        <PopupList title={'Education'} list={education} clickable={false}/>
        <PopupGrid title={'Technologies'} grid={tech}/>
      </div>
   
  );
}
