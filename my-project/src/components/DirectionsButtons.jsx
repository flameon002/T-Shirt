import { useSnapshot } from "valtio";
import state from "../store";
import {
  SlArrowUpCircle,
  SlArrowRightCircle,
  SlArrowLeftCircle,
  SlArrowDownCircle,
} from "react-icons/sl";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiZoomIn, FiZoomOut, FiRotateCw, FiRotateCcw } from "react-icons/fi";

const DirectionsButtons = () => {
  const snap = useSnapshot(state);

  const updatePosition = (axis, changeAmount) => {
    state.logos.LogoTexture[axis] += changeAmount;
  };

  return (
    <>
      <div className="absolute right-full glassmorphism w-auto h-auto py-4 px-2 flex flex-col rounded-xl gap-4 ">
        <h1 className="text-2xl  mx-auto font-extrabold bg-slate-350 px-6 border-b-2 border-t-2 border-t-slate-300 border-b-slate-600 rounded-full shadow-lg">
          Logos
        </h1>
        <div className="flex gap-3 justify-center items-center">
          <button
            onClick={() => updatePosition("scale", 0.003)}
            className="button-axis"
          >
            <FiZoomIn size={[35]} />
          </button>
          <button
            onClick={() => updatePosition("scale", 0.003)}
            className="button-axis"
          >
            <FiZoomIn size={[35]} />
          </button>
          <button
            onClick={() => updatePosition("scale", -0.003)}
            className="button-axis "
          >
            <FiZoomOut size={[35]} />
          </button>
        </div>

        <h1 className="text-2xl mx-auto font-extrabold">Size</h1>
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

        <h1 className="text-2xl mx-auto font-extrabold">Directions</h1>
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
        <h1 className="text-2xl mx-auto font-extrabold">Rotation</h1>
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
