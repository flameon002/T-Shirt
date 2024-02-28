import { proxy, snapshot } from "valtio";

const state = proxy({
  intro: true,
  color: "#30302C",
  isFullTexture: false,
  fullDecal: "./threejs.png",
  logos: {
    LogoTexture: {
      logoDecal: "./threejs.png",
      isLogoTexture: true,
      positionX: 0,
      positionY: 0.04,
      positionZ: 0.14,
      scale: 0.05,
      rotation: 0.1,
    },
    LogoTexture: {
      logoDecal: "./react.png",
      isLogoTexture: true,
      positionX: 0.02,
      positionY: 0.10,
      positionZ: 0.14,
      scale: 0.05,
      rotation: 0.1,
    },
    LogoTexture: {
      logoDecal: "./cofee.png",
      isLogoTexture: true,
      positionX: -0.09,
      positionY: -0.5,
      positionZ: 0.14,
      scale: 0.1,
      rotation: 0.1,
    },
  },
});

export function createNewObject(logoTexture) {
  const key = logoTexture.name;
  // Create a new object with default properties and allow customization
  const newLogo = {
    LogoTexture: {
      logoDecal: logoTexture,
      isLogoTexture: true,
      positionX: 0,
      positionY: 0.04,
      positionZ: 0.14,
      scale: 0.05,
      rotation: 0.1,
    },
  };
  state.logos[logoTexture] = newLogo;
  snapshot(state);

  console.log(newLogo);
  console.log(state);
}

export default state;
