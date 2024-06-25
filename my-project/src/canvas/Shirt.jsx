import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store";

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  const positionY = snap.positionY;
  const positionX = snap.positionX;
  const positionZ = snap.positionZ;
  const scale = snap.scale;
  const rotation = snap.rotation;

  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
  );

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[1, -10, -15]} />
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
        position={[0.75, 0, 0]}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
          >
          <meshStandardMaterial
            transparent
            polygonOffset
            map={fullTexture}
            map-anisotropy={16}
            roughness={1}
            toneMapped={false}
          /></Decal>
        )}
        {/* 0, 0.04, 0.15 */}
        {snap.isLogoTexture && (
          <Decal
            position={[positionX, positionY, positionZ]}
            rotation={[0, 0, rotation]}
            scale={[scale,scale, 0.3]}
          >
            <meshPhysicalMaterial
              transparent
              polygonOffset
              polygonOffsetFactor={-10}
              map={logoTexture}
              map-anisotropy={16}
              roughness={1}
              toneMapped={false}
            />
          </Decal>
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
