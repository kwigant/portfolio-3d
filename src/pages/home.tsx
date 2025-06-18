"use client";

// src/App.tsx
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import Header from "@/components/Header";
import Popup from "@/components/PopUp";
import CanvasModel from "@/components/Canvas";
import { useRouter, useSearchParams } from "next/navigation";

const Home: React.FC = () => {
  const [tab, setTab] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter()
  useEffect(()=> {
    if (searchParams) {
      const urlTab = searchParams.get('tab')
      
      if( urlTab ) setTab(urlTab)
    }
  }, [searchParams]) 

  function closePopup() {
    setTab('')
    router.replace('/')
  }

  return (
    <>
      <Header back={false} />
      <div className="container">
       <CanvasModel/>
        {tab === 'career' && (
          <Popup
            name={"Career"}
            position={{
              top: "35%",
              left: "4%",
              width: "400px",
              height: "350px",
            }}
            onClose={() =>closePopup()}
          />
        )}
        {tab === 'qualifications' && (
          <Popup
            name={"Education"}
            position={{
              top: "18%",
              left: "7%",
              width: "400px",
              height: "250px",
            }}
            onClose={() => closePopup()}
          />
        )}
        {tab === 'qualifications' && (
          <Popup
            name={"Technologies"}
            position={{
              top: "45%",
              left: "52%",
              width: "600px",
              height: "320px",
            }}
            onClose={() => closePopup()}
          />
        )}
        {tab === 'contact' && (
          <Popup
            name={"Contact"}
            position={{
              top: "65%",
              left: "20%",
              width: "850px",
              height: "250px",
            }}
            onClose={() => closePopup()}
          />
        )}
        {tab === 'projects' && (
          <Popup
            position={{
              top: "27%",
              left: "65%",
              width: "400px",
              height: "425px",
            }}
            name={"Projects"}
            onClose={() => closePopup()}
          />
        )}
      </div>
    </>
  );
};

export default Home;
