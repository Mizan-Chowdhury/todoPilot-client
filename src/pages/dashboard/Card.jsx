import { IoMdMore } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
const Card = () => {
  const handleEditTask = () => {};

  const handleDeleteTask = () => {};
  return (
    <div className="p-3 rounded-md bg-[#fff] card">
      <div className="flex justify-between items-center mb-5">
        <h1>card name</h1>
        <div className="relative dropdown dropdown-hover dropdown-left">
          <div
            tabIndex={0}
            className="cursor-pointer rounded-md btn-ghost card-more"
          >
            <IoMdMore className="text-lg" />
          </div>
          <div
            tabIndex={0}
            className="absolute -mr-2 mt-6 z-[1] rounded-lg card-compact dropdown-content w-12 bg-base-100 shadow"
          >
            <div className="p-2 text-white space-y-1">
              <div
                onClick={() => handleEditTask()}
                className="bg-primary p-2 cursor-pointer rounded-md flex items-center justify-center"
              >
                <FiEdit3 className="text-md"></FiEdit3>
              </div>
              <div
                onClick={() => handleDeleteTask()}
                className="bg-[#DD3333] p-2 cursor-pointer rounded-md flex items-center justify-center"
              >
                <RiDeleteBin6Line className="text-md"></RiDeleteBin6Line>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Card;
