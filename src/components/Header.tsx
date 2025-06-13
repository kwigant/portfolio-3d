import { Dispatch, SetStateAction } from 'react';
import './Header.css';

type HeaderProps = {
    activeTab: number,
    setActiveTab: Dispatch<SetStateAction<number>>,
}

export default function Header(props: HeaderProps) {
    // const [tab, setTab] = useState(0)

    function getTabStyle(idx: number) {
        if (props.activeTab === idx) return 'link-active'
        else return 'link'
    }
  return (
    <header>
      <h4 onClick={()=>props.setActiveTab(0)} className={`${getTabStyle(0)} hover-underline-animation left`}>Career</h4>
      <h4 onClick={()=>props.setActiveTab(1)} className={`${getTabStyle(1)} hover-underline-animation left`}>Qualifications</h4>
      <div className='name-container'>
        <h1>Kirsten Wigant</h1>
        <h4>Freelance Web & Mobile Developer</h4>
      </div>
      <h4 onClick={()=>props.setActiveTab(2)} className={`${getTabStyle(2)} hover-underline-animation left`}>Contact</h4>
      <h4 onClick={()=>props.setActiveTab(3)} className={`${getTabStyle(3)} hover-underline-animation left`}>Projects</h4>
    </header>
  );
}
