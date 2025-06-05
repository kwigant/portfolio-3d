"use client"

// src/App.tsx
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "@/components/Model";
import { Center } from "@react-three/drei";
import Popup from "@/components/PopUp";
import Sidebar from "@/components/SideBar";

const Home: React.FC = () => {
  const [popupInfo, setPopupInfo] = useState<string | null>(null);
  const [aside, setAside] = useState(false);
  const [activeCam, setActiveCam] = useState(0);

  const handlePartClick = (name: string) => {
    setPopupInfo(name);
  };

  const openSidebar = () => {
    setAside(true);
    setActiveCam(1);
  };

  const closeSidebar = () => {
    setAside(false);
    setActiveCam(0);
  };

  const getPosition = (popupInfo: string) => {
    switch (popupInfo) {
      case "monitor":
        return { top: "400px", left: "500px" };

      case "white-board":
        return { top: "200px", left: "800px" };

      case "diploma":
        return { top: "600px", left: "400px" };

      case "record":
        return { top: "200px", left: "400px" };

      default:
        setPopupInfo(null);
        return { top: "0", left: "0" };
    }
  };
  return (
    <>
      <main>
        <Canvas
          shadows={true}
          style={{
            backgroundColor: "#FFE8CC",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <hemisphereLight args={["#CB9FCD", "#3529A9", 4]} />
           <pointLight
            intensity={activeCam === 0 ? 12 : .3}
            castShadow={true}
            color={"yellow"}
            position={[-6, 5, 0]}
          /> 
           { activeCam === 0 && <pointLight
            scale={[5, 5, 5]}
            intensity={8}
            castShadow={true}
            color={"lightBlue"}
            position={[3, 1, 0]}
          /> }
          <ambientLight intensity={0.4} />
         { activeCam === 0 && <pointLight
            intensity={12}
            castShadow={true}
            color={"yellow"}
            position={[6, 5, 0]}
          />}
          <directionalLight
            intensity={4}
            color={"#C097BD20"}
            position={[2, 5, 0]}
          />
          <Suspense fallback={null}>
            <Center>
              <Model handlePartClick={handlePartClick} activeCam={activeCam} />
            </Center>
          </Suspense>
        </Canvas>
        {/* Simple HTML popup */}
        {popupInfo && (
          <Popup
            name={popupInfo}
            position={getPosition(popupInfo)}
            onClose={() => setPopupInfo(null)}
          />
        )}

        <button className={"menu-button"} onClick={() => openSidebar()}>
          <img alt="menu" src="./menu.png" />
        </button>
      </main>
      <Sidebar
        openPopup={handlePartClick}
        className={aside ? "open" : "closed"}
        onClose={() => closeSidebar()}
      />
    </>
  );
};

export default Home;
