import Popup from "./PopUp";

type DesktopPopups = {
  tab: string;
  closePopup: () => void;
};

export default function DesktopPopups(props: DesktopPopups) {
  return (
    <>
      {props.tab === "career" && (
        <Popup
          name={"Career"}
          position={{
            top: "30%",
            left: "4%",
            width: "400px",
            height: "420px",
          }}
          onClose={() => props.closePopup()}
        />
      )}
      {props.tab === "qualifications" && (
        <Popup
          name={"Education"}
          position={{
            top: "16%",
            left: "7%",
            width: "400px",
            height: "280px",
          }}
          onClose={() => props.closePopup()}
        />
      )}
      {props.tab === "qualifications" && (
        <Popup
          name={"Technologies"}
          position={{
            top: "30%",
            left: "52%",
            width: "600px",
            height: "400px",
          }}
          onClose={() => props.closePopup()}
        />
      )}
      {props.tab === "contact" && (
        <Popup
          name={"Contact"}
          position={{
            top: "63%",
            left: "20%",
            width: "850px",
            height: "250px",
          }}
          onClose={() => props.closePopup()}
        />
      )}
      {props.tab === "projects" && (
        <Popup
          position={{
            top: "25%",
            left: "65%",
            width: "400px",
            height: "480px",
          }}
          name={"Projects"}
          onClose={() => props.closePopup()}
        />
      )}
    </>
  );
}
