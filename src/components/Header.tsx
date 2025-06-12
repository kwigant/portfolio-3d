import { useState } from 'react';
import './Header.css';

export default function Header() {
    const [tab, setTab] = useState(0)

    function getTabStyle(idx: number) {
        if (tab === idx) return 'link-active'
        else return 'link'
    }
  return (
    <header>
      <h4 onClick={()=>setTab(0)} className={`${getTabStyle(0)} hover-underline-animation left`}>Contact</h4>
      <h4 onClick={()=>setTab(1)} className={`${getTabStyle(1)} hover-underline-animation left`}>Expertise</h4>
      <div className='name-container'>
        <h1>Kirsten Wigant</h1>
        <h4>Freelance Web & Mobile Developer</h4>
      </div>
      <h4 onClick={()=>setTab(2)} className={`${getTabStyle(2)} hover-underline-animation left`}>Projects</h4>
      <h4 onClick={()=>setTab(3)} className={`${getTabStyle(3)} hover-underline-animation left`}>Career</h4>
    </header>
  );
}
