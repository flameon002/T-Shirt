import { useSnapshot } from "valtio";
import state from "../store";
import {
  SlArrowUpCircle,
  SlArrowRightCircle,
  SlArrowLeftCircle,
  SlArrowDownCircle,
} from "react-icons/sl";

const DirectionsButtons = () => {
  const snap = useSnapshot(state);

  const updatePosition = (axis, changeAmount) => {
    state[axis] += changeAmount;
  };

  return (
    <>
      <div className="flex flex-col mr-8 h-8 w-8 ">
        <div className="flex items-center justify-center">
          <button onClick={() => updatePosition("positionY", 0.01)}>
            <SlArrowUpCircle size={[55]} className="bg-gray-600 rounded-full hover:bg-gray-500 active:bg-gray-700" />
          </button>
        </div>
        <div className="flex gap-10 items-center justify-center">
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
        <div className="flex gap-10 items-center justify-center">
          <button onClick={() => updatePosition("positionY", -0.01)}>
            <SlArrowDownCircle
              size={[55]}
              className="bg-gray-600 rounded-full hover:bg-gray-500 active:bg-gray-700"
            />
          </button>
        </div>
      </div>
      {/* <div>
        <button onClick={() => updatePosition("positionY", 0.01)}>max</button>
        <button onClick={() => updatePosition("positionY", -0.01)}>min</button>
      </div> */}
    </>
  );
};

export default DirectionsButtons;
