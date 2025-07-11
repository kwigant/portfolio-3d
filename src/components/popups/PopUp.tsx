import { useEffect, useRef, useState } from "react";
import "@/styles/PopUp.scss";
import "@/styles/globals.scss";
import "@/styles/Header.scss";
import "@/styles/lists.scss";
import "@/styles/contact.scss";

import { career, education, projects, tech } from "@/constants/popup-data";
import PopupList from "./PopupList";
import PopupGrid from "./PopupGrid";
import PopupContact from "./PopupContact";

type PopupProps = {
  name: string;
  position: { top: string; left: string; width: string; height: string };
  onClose: () => void;
};

export default function Popup({ name, position, onClose }: PopupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    if (ref && ref.current && ref.current?.clientWidth > 40) {
      // Wait for the transition to complete (e.g., 300ms)
      const timer = setTimeout(() => setShowContent(true), 300);
      return () => clearTimeout(timer);
    } else {
      // Reset content visibility when popup is hidden
      setShowContent(false);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const getAnimationClass = () => {
    switch (position.width) {
      case "400px":
        if (position.height === "280px") return "popup-250-h"; // education
        if (position.height === "320px") return "popup-400-r"; // tech
        if (position.height === "480px") return "popup-400-r"; // projects

        return "popup-400-l"; // career
      case "850px":
        return "popup-850"; // contact
      case "600px":
        return "popup-500"; // tech
    }
  };

  const getPopUpContent = () => {
    if (showContent) {
      switch (name) {
        case "Contact":
          return <PopupContact />;
        case "Education":
          return (
            <PopupList title={"Education"} list={education} clickable={false} />
          );
        case "Technologies":
          return <PopupGrid title="Technologies" grid={tech} />;

        case "Projects":
          return (
            <PopupList
              title="Latest Projects"
              list={projects}
              clickable={true}
            />
          );
        case "Career":
          return <PopupList title={"Career"} list={career} clickable={false} />;
      }
    }
  };

  return (
    <div
      ref={ref}
      style={{
        width: position.width,
        height: position.height,
        top: position.top,
        left: position.left,
      }}
      className={`popup ${getAnimationClass()}`}
    >
      {getPopUpContent()}
    </div>
  );
}
