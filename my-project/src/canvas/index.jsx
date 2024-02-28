import { Canvas } from "@react-three/fiber";
import { Environment, Center, OrbitControls } from "@react-three/drei";

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import Shirt2 from "./Shirt2";

const CanvasModel = () => {
  const LogoTexture = "LogoTexture"
  return (
    <Canvas
      shadows
      camera={{ position: [-0.6, 0.2, 1.75], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-24  h-24 transition-all ease-in"
    >
      <ambientLight intensity={0.1} />
      <Environment preset="city" />

      <Center>
        <Shirt/>
        <OrbitControls
          makeDefault
          enablePan={false}
          maxDistance={2.5}
          minDistance={0.45}
        />
      </Center>
      <Backdrop />
    </Canvas>
  );
};

export default CanvasModel;
