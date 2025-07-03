import { Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./Model";
import MobileModel from "./mobile/MobileModel";
import "../styles/globals.scss";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function CanvasModel() {
  const {width} = useWindowDimensions()
   const isDesktop = width > 500 ? true : false
  return (
    <Canvas
      shadows={true}
      className="canvas"
      style={{height:  isDesktop ? "75vh" : 280, marginBottom: isDesktop ? 0 : 32 }}
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
          {isDesktop ? <Model/> : <MobileModel/>}
        </Center>
      </Suspense>
    </Canvas>
  );
}
