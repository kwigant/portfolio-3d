import { useEffect, useRef } from "react";

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
        fontSize: "20px",
        position: "absolute",
        top: position.top,
        left: position.left,
        
        // transform: 'translate(-50%, -100%)',
        background: "#ffffff90",
        padding: "24px",
        borderRadius: "12px",
        border: "2px solid white",
        pointerEvents: "auto", // important to allow click detection
      }}
    >
      <strong>Part:</strong> {name}
    </div>
  );
}
