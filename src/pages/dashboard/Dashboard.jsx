import { useForm } from "react-hook-form";
import Boards from "./Boards";

const Dashboard = () => {






  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.title);
  };

  return (
    <div className="flex-1 w-full overflow-x-auto h-screen overflow-y-hidden">
      <div className="w-fit flex gap-5 p-5 pb-10 h-full">
        <Boards></Boards>
        <Boards></Boards>
        <div className="w-[300px]">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn w-full bg-slate-200"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            + add new board
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

export default Dashboard;
