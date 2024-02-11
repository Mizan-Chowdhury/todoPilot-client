import { IoMdMore } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import Card from "./Card";
import { useForm } from "react-hook-form";
const Boards = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.title);
  };

  const handleDeleteTask = () => {};
  return (
    <div className="w-[300px] max-h-full h-full">
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-bold text-xl">
          Board name <span>2</span>
        </h1>
        <div className="relative dropdown dropdown-hover dropdown-left">
          <div tabIndex={0} className="btn btn-sm btn-ghost">
            <IoMdMore className="text-xl" />
          </div>
          <div
            tabIndex={0}
            className="absolute -mr-2 mt-6 z-[1] rounded-lg card-compact dropdown-content w-28 bg-base-100 shadow"
          >
            <button className="btn btn-sm h-10 w-full">delete board</button>
          </div>
        </div>
      </div>
      <div className="bg-[#f8f8f8] p-4 border-b-[10px] space-y-2 overflow-y-auto h-full custom-scroll">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <div className="">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn w-full bg-slate-200"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            + add a new task
          </button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:flex gap-5">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-bold text-lg">
                        Board Name*
                      </span>
                    </label>
                    <input
                      {...register("title", { required: true })}
                      type="text"
                      placeholder="Board name..."
                      className="input input-bordered w-full"
                    />
                    {errors.title && (
                      <p className="text-red-500">board name is required.</p>
                    )}
                  </div>
                </div>
                <input
                  className="nbtn w-20 text-white mt-5"
                  type="submit"
                  value="Add"
                />
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Boards;
<h1>boards</h1>;
