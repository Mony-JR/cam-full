import { useState } from "react";
import Catagory from "./Catagory";

interface PopupProps {
  setUp: (value: boolean) => void;
  up: boolean;
}

export type WorkStatus = "Default" | "PartTime" | "FullTime";
const Popup: React.FC<PopupProps> = ({ setUp, up }) => {

  const [reset,setReset]=useState<number>(0)
  const [timework,setTimework]=useState<WorkStatus>("Default")

  function ResetAll_Item(){
    setReset(0)
    setTimework("Default")
  }

  return (
    <div className={`w-[99%] fixed bottom-0 shadow-2xl z-20 ${up ? 'h-[0]' : 'h-[100%]'}`}>
      <div onClick={() => setUp(!up)} className="w-full  h-[10%]"></div>
      <div className={`w-full h-[100%] bg-white flex-col border-t-2 rounded-[20px] ${up ? 'hidden' : 'flex'}`}>
         <div className="flex justify-between items-center pr-5 pl-5 w-full h-[10%]">
          <h1 className="text-xl" >Filter</h1>
          <span  className="text-xl text-orange-500 " onClick={ResetAll_Item} >Reset</span>
         </div>
         <div className="flex justify-start items-start h-[70%] bg-white overflow-scroll ">
          <Catagory setReset={setReset} reset={reset} setTimework={setTimework} timework={timework} />
         </div>
         <div className=" mb-20 h-[20%] flex border-t-2 justify-center items-center ">
          <button onClick={()=>setUp(!up)} className="p-5 Cato w-10/12 rounded-2xl text-white ">Done</button>

         </div>
      </div>
    </div>
  );
};

export default Popup;
