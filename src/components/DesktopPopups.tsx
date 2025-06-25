import Popup from "./popups/PopUp";

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
            height: "400px",
          }}
          onClose={() => props.closePopup()}
        />
      )}
      {props.tab === "qualifications" && (
        <Popup
          name={"Education"}
          position={{
            top: "18%",
            left: "7%",
            width: "400px",
            height: "275px",
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
            height: "350px",
          }}
          onClose={() => props.closePopup()}
        />
      )}
      {props.tab === "contact" && (
        <Popup
          name={"Contact"}
          position={{
            top: "60%",
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
            height: "460px",
          }}
          name={"Projects"}
          onClose={() => props.closePopup()}
        />
      )}
    </>
  );
}
