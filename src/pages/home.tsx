"use client";

// src/App.tsx
import React, { useEffect, useState } from "react";
import "../styles/globals.scss";
import Header from "@/components/Header";
import CanvasModel from "@/components/Canvas";
import { useRouter, useSearchParams } from "next/navigation";
import DesktopPopups from "@/components/DesktopPopups";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import MobilePopups from "@/components/MobilePopups";

const Home: React.FC = () => {
  const [tab, setTab] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const { width } = useWindowDimensions();
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

  return (
    <>
      <Header back={false} />
      <div className="container">
        <CanvasModel />

        {width > 500 ? (
          <DesktopPopups tab={tab} closePopup={closePopup} />
        ) : (
          <MobilePopups tab={tab} closePopup={closePopup} />
        )}
      </div>
    </>
  );
};

export default Home;
