"use client";

// src/App.tsx
import React, { useState } from "react";
import "../styles/globals.css";
import Header from "@/components/Header";
import Popup from "@/components/PopUp";
import CanvasModel from "@/components/Canvas";

const Home: React.FC = () => {
  const [tab, setTab] = useState(-1);

  return (
    <>
      <Header activeTab={tab} setActiveTab={setTab} />
      <div className="container">
       <CanvasModel/>
        {tab === 0 && (
          <Popup
            name={"Career"}
            position={{
              top: "35%",
              left: "4%",
              width: "400px",
              height: "325px",
            }}
            onClose={() => setTab(-1)}
          />
        )}
        {tab === 1 && (
          <Popup
            name={"Education"}
            position={{
              top: "18%",
              left: "7%",
              width: "400px",
              height: "250px",
            }}
            onClose={() => setTab(-1)}
          />
        )}
        {tab === 1 && (
          <Popup
            name={"Technologies"}
            position={{
              top: "45%",
              left: "52%",
              width: "600px",
              height: "320px",
            }}
            onClose={() => setTab(-1)}
          />
        )}
        {tab === 2 && (
          <Popup
            name={"Contact"}
            position={{
              top: "65%",
              left: "20%",
              width: "850px",
              height: "250px",
            }}
            onClose={() => setTab(-1)}
          />
        )}
        {tab === 3 && (
          <Popup
            position={{
              top: "27%",
              left: "65%",
              width: "400px",
              height: "450px",
            }}
            name={"Projects"}
            onClose={() => setTab(-1)}
          />
        )}
      </div>
    </>
  );
};

export default Home;
