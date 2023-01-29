import React from "react";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const Homepage = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => {
        return res.json();
      })
      .then((data) => setData(data.msg));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mx-auto m-0 p-0 bg-violet-200 h-screen w-full">
      <div className="flex flex-col items-center  bg-white w-[600px] rounded-md ">
        <div className="">
          <div>
            <p className="p-4 m-4 font-bold text-3xl text-center font-mono">
              Task Manager
            </p>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter task"
              className="p-2 bg-slate-200 rounded-l-sm w-[350px] ml-1 border-2 border-slate-200 font-meduim font-mono"
            />
            <button className="text-center px-4 py-2 bg-blue-500 rounded-r-sm w-[120px] text-white hover:bg-blue-600">
              Submit
            </button>
          </div>
        </div>

        <div className="flex flex-row mt-12">
          <div className="bg-slate-300 w-[500px] m-4 px-5 flex py-3 rounded-md">
            <p className="grow cursor-pointer font-semibold text-lg font-mono">
              Walk the dog{" "}
            </p>
            <span className="flex-none mx-2 text-center text-lg my-auto cursor-pointer text-blue-800 hover:scale-110 delay-20">
              <FiEdit size={16} />
            </span>
            <span className="flex-none cursor-pointer text-xl my-auto text-red-700 hover:scale-110 delay-20">
              <MdDelete size={19} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
