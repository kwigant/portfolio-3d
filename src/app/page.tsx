"use client"

// src/App.tsx
import React, { Suspense, useState,  } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "@/components/Model";
import { Center } from "@react-three/drei";
// import Popup from "@/components/PopUp";
import "./globals.css";
import Header from "@/components/Header";
import Popup from "@/components/PopUp";

const Home: React.FC = () => {
  const [popupInfo, setPopupInfo] = useState<string | null>(null);


  const handlePartClick = (name: string) => {
    setPopupInfo(name);
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
      <Header/>
      <div className="container">
        <Canvas
          shadows={true}
          style={{
            backgroundColor: "#FFE8CC",
            height: '75vh',
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
          }}
        >
          <hemisphereLight args={["#CB9FCD", "#3529A9", 4]} />
           <pointLight
            intensity={12}
            castShadow={true}
            color={"yellow"}
            position={[-6, 5, 0]}
          /> 
            <pointLight
            scale={[5, 5, 5]}
            intensity={8}
            castShadow={true}
            color={"lightBlue"}
            position={[3, 1, 0]}
          /> 
          <ambientLight intensity={0.4} />
        <pointLight
            intensity={12}
            castShadow={true}
            color={"yellow"}
            position={[6, 5, 0]}
          />
          <directionalLight
            intensity={4}
            color={"#C097BD20"}
            position={[2, 5, 0]}
          />
          <Suspense fallback={null}>
            <Center>
              <Model handlePartClick={handlePartClick} />
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
      </div>
   </>
  );
};

export default Home;
