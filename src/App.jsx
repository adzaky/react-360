import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Model } from "./Model";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows>
        <Stage environment="sunset">
          <Model />
        </Stage>
        <OrbitControls autoRotate={false} />
      </Canvas>
    </div>
  );
}
