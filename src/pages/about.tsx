import Header from "@/components/Header";
import "../styles/about.scss";
import AboutList from "@/components/AboutList";

export default function About() {
 
  return (
    <div className="abt-page">
      <Header back={true} />
      <div>
        <AboutList />
      </div>
    </div>
  );
}
