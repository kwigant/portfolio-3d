import { useEffect, useRef } from "react";
import "./PopUp.css"
type PopupProps = {
  name: string;
  position: { top: string; left: string };
  onClose: () => void;
};

export default function Popup({ name, position, onClose }: PopupProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={ref}
      style={{
          top: position.top,
          left: position.left
        }}
      className="popup"
    >
      <strong>Part:</strong> {name}
    </div>
  );
}
