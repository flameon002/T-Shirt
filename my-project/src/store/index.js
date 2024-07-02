import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#30302C",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./react.png",
  fullDecal: "./threejs.png",
  positionX: 0,
  positionY: 0.09,
  positionZ: 0.14,
  scale: 0.09,
  rotation:0,
});
// 0, 0.04, 0.15
export default state;
