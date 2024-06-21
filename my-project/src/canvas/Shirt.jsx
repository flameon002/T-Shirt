import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store";

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
  );

  // Loop through logos and render Decals if necessary
  // const logoDecals = [];
  // // console.log(logoDecals);
  // for (const logoKey in snap.logos) {
  //   if (snap.logos[logoKey].isLogoTexture) {
  //     const logoData = snap.logos[logoKey];
  //     const logoTexture = useTexture(logoData.logoDecal);
  //     logoDecals.push(
  //       <Decal
  //         position={[
  //           positionX,
  //           positionY,
  //           positionZ,
  //         ]}
  //         rotation={[0, 0, rotation]}
  //         scale={scale}
  //         map={logoTexture}
  //         anisotropy={16}
  //         depthTest={false}
  //         depthWrite={true}
  //       />
  //     );
  //   }
  // }


  const logoArray = Object.values(snap).filter(
    (logoObj) => logoObj.isLogoTexture
  );


  const logosArray = Array.isArray(logoArray)

  console.log(snap);
  console.log(logosArray);
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
            map={useTexture(snap.fullDecal)} // Use dedicated useTexture call
          />
        )}
        {/* {logoDecals} */}
        {logoArray.map((logo, index) => {
        if (logo.isLogoTexture) {
          return (
            <Decal
              key={index}
              logoDecal={logo.logoDecal}
              isLogoTexture={logo.isLogoTexture}
              positionX={logo.positionX}
              positionY={logo.positionY}
              positionZ={logo.positionZ}
              scale={logo.scale}
              rotation={logo.rotation}
            />
          );
        }
        return null;
      })}
      </mesh>
    </group>
  );
};

export default Shirt;
