import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#30302C",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
  positionX: 0,
  positionY: 0.04,
  positionZ: 0.14,
  scale: 0.05,
  rotation:0.1,
});
// 0, 0.04, 0.15
export default state;
