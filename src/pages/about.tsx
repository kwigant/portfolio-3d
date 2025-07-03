import Header from "@/components/Header";
import "../styles/about.scss";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import AboutList from "@/components/AboutList";

export default function About() {
  const { width } = useWindowDimensions();
  const isDesktop = width > 500 ? true : false;

  return (
    <div className="abt-page">
      <Header back={true} />
      <div style={{ marginTop: isDesktop ? 48 : 0 }}>
        <AboutList isDesk={isDesktop} />
      </div>
    </div>
  );
}
