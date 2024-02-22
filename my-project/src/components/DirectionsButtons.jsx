import { useSnapshot } from "valtio";
import state from "../store";
import {
  SlArrowUpCircle,
  SlArrowRightCircle,
  SlArrowLeftCircle,
  SlArrowDownCircle,
} from "react-icons/sl";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
const DirectionsButtons = () => {
  const snap = useSnapshot(state);

  const updatePosition = (axis, changeAmount) => {
    state[axis] += changeAmount;
    // console.log(axis);
  };

  return (
    <>
      <div className="flex flex-row h-8 w-8 items-center justify-center ">
        <div className="flex  flex-col ">
          <div>
            <button onClick={() => updatePosition("positionY", 0.01)}>
              <SlArrowUpCircle
                size={[55]}
                className="bg-gray-600 rounded-full hover:bg-gray-500 active:bg-gray-700"
              />
            </button>
          </div>
          <div className="flex gap-10 items-center justify-center">
            <div>
              <button onClick={() => updatePosition("positionX", -0.01)}>
                <SlArrowLeftCircle
                  size={[55]}
                  className="bg-gray-600 rounded-full hover:bg-gray-500 active:bg-gray-700"
                />
              </button>

              <button onClick={() => updatePosition("positionX", 0.01)}>
                <SlArrowRightCircle
                  size={[55]}
                  className="bg-gray-600 rounded-full hover:bg-gray-500 active:bg-gray-700"
                />
              </button>
            </div>
          </div>
          <div className="flex gap-10 items-center justify-center">
            <button onClick={() => updatePosition("positionY", -0.01)}>
              <SlArrowDownCircle
                size={[55]}
                className="bg-gray-600 rounded-full hover:bg-gray-500 active:bg-gray-700"
              />
            </button>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <button onClick={() => updatePosition("scale", 0.01)}>
            <FiZoomIn size={[55]} />
          </button>
          <button onClick={() => updatePosition("scale", -0.01)}>
            <FiZoomOut size={[55]} />
          </button>
        </div>
      </div>
    </>
  );
};

export default DirectionsButtons;
