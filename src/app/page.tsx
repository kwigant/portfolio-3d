"use client";

// src/App.tsx
import React, { useState } from "react";
import "./globals.css";
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
              left: "3%",
              width: "400px",
              height: "300px",
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
              left: "60%",
              width: "500px",
              height: "250px",
            }}
            onClose={() => setTab(-1)}
          />
        )}
        {tab === 2 && (
          <Popup
            name={"Contact"}
            position={{
              top: "55%",
              left: "20%",
              width: "850px",
              height: "350px",
            }}
            onClose={() => setTab(-1)}
          />
        )}
        {tab === 3 && (
          <Popup
            position={{
              top: "30%",
              left: "65%",
              width: "400px",
              height: "425px",
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
