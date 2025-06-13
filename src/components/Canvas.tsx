import { Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./Model";

export default function CanvasModel() {
  return (
    <Canvas
      shadows={true}
      style={{
        backgroundColor: "#FFE8CC",
        height: "75vh",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
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
          <Model />
        </Center>
      </Suspense>
    </Canvas>
  );
}
