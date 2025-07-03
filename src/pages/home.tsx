"use client";

// src/App.tsx
import React, { useEffect, useState } from "react";
import "../styles/globals.scss";
import Header from "@/components/Header";
import CanvasModel from "@/components/Canvas";
import { useRouter, useSearchParams } from "next/navigation";
import DesktopPopups from "@/components/popups/DesktopPopups";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import MobileHome from "@/components/mobile/MobileHome";
import { useHasMounted } from "@/hooks/useHasMounted";

const Home: React.FC = () => {
  const [tab, setTab] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isDesktop = width > 500 ? true : false;
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (searchParams) {
      const urlTab = searchParams.get("tab");

      if (urlTab) setTab(urlTab);
    }
  }, [searchParams]);

  function closePopup() {
    setTab("");
    router.replace("/");
  }

  if (!hasMounted) return null; // to do: loading component

  return (
    <div>
      {isDesktop && <Header back={false} />}

      <div className="container">
        {isDesktop ? (
          <>
            <CanvasModel />
            <DesktopPopups tab={tab} closePopup={closePopup} />
          </>
        ) : (
          <MobileHome />
        )}
      </div>
    </div>
  );
};

export default Home;
