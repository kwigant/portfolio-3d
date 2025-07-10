import "@/styles/Header.scss";
import "@/styles/globals.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useHasMounted } from "@/hooks/useHasMounted";
import { useState } from "react";
import Menu from "./Menu";

export default function MobileHeader() {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <header
      style={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <button className="back-link" onClick={() => router.back()}>
        <Image
          width={18}
          height={18}
          alt="back"
          src={"/icons/chevron-left.png"}
        />
      </button>
      <div className="name-container">
        <h2>Kirsten Wigant</h2>
        <h4>Fullstack Engineer</h4>
      </div>

      <button onClick={() => setMenu(true)} className="next-link">
        <Image src={"/icons/menu.png"} alt={"menu"} width={24} height={24} />
      </button>
      {menu && <Menu onClose={() => setMenu(false)} />}
    </header>
  );
}
