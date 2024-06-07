'use client'
import React, { useState } from "react";
import { Sheet } from 'react-modal-sheet';
import Catagory from "./Catagory";

interface PopupProps {
  setUp: (value: boolean) => void;
  up: boolean;
}

export type WorkStatus = "Default" | "PartTime" | "FullTime";

const Popup: React.FC<PopupProps> = ({ setUp, up }) => {
  const [reset, setReset] = useState<number>(0);
  const [timework, setTimework] = useState<WorkStatus>("Default");

  function ResetAll_Item() {
    setReset(0);
    setTimework("Default");
  }

  return (
    <Sheet isOpen={!up} onClose={() => setUp(true)} snapPoints={[750,400, 0]}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content >
          <div className="flex justify-between items-center pr-5 pl-5 w-full h-[10%]">
            <h1 className="text-xl">Filter</h1>
            <span className="text-xl text-orange-500" onClick={ResetAll_Item}>Reset</span>
          </div>
          <div className="flex justify-start items-start h-[70%] bg-white overflow-scroll">
            <Catagory setReset={setReset} reset={reset} setTimework={setTimework} timework={timework} />
          </div>
          <div className=" h-[20%] flex border-t-2 justify-center items-center">
            <button onClick={() => setUp(!up)} className="p-5 Cato w-10/12 rounded-2xl text-white">Done</button>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};

export default Popup;
