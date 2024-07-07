

import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import {
  SlArrowUpCircle,
  SlArrowRightCircle,
  SlArrowLeftCircle,
  SlArrowDownCircle,
} from "react-icons/sl";
import { IoIosAddCircleOutline } from "react-icons/io";
import {
  FiZoomIn,
  FiZoomOut,
  FiRotateCw,
  FiRotateCcw,
} from "react-icons/fi";

const DirectionsButtons = () => {
  const snap = useSnapshot(state);

  const updatePosition = (axis, changeAmount) => {
    state[axis] += changeAmount;
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
          updatePosition("positionY", 0.004);
          break;
        case "ArrowDown":
          updatePosition("positionY", -0.004);
          break;
        case "ArrowLeft":
          updatePosition("positionX", -0.004);
          break;
        case "ArrowRight":
          updatePosition("positionX", 0.004);
          break;
        default:
          return;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="absolute right-full glassmorphism w-[220px] h-auto py-4 flex flex-col rounded-md gap-7">
        <div className="flex justify-center gap-7">
          <button
            onClick={() => updatePosition("scale", 0.003)}
            className="button-axis"
          >
            <FiZoomIn size={[55]} />
          </button>
          <button
            onClick={() => updatePosition("scale", -0.003)}
            className="button-axis "
          >
            <FiZoomOut size={[55]} />
          </button>
        </div>
        <div className="">
          <div className="flex justify-center items-center">
            <button onClick={() => updatePosition("positionY", 0.003)}>
              <SlArrowUpCircle size={[55]} className="button-axis " />
            </button>
          </div>
          <div className="flex gap-8 justify-center items-center">
            <button onClick={() => updatePosition("positionX", -0.003)}>
              <SlArrowLeftCircle size={[55]} className="button-axis " />
            </button>

            <button onClick={() => updatePosition("positionX", 0.003)}>
              <SlArrowRightCircle size={[55]} className="button-axis " />
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button onClick={() => updatePosition("positionY", -0.003)}>
              <SlArrowDownCircle size={[55]} className="button-axis " />
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-7">
          <button
            onClick={() => updatePosition("rotation", 0.03)}
            className="button-axis "
          >
            <FiRotateCcw size={[55]} />
          </button>
          <button
            onClick={() => updatePosition("rotation", -0.03)}
            className="button-axis "
          >
            <FiRotateCw size={[55]} />
          </button>
        </div>
      </div>
    </>
  );
};

export default DirectionsButtons;