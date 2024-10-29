import React from "react";
import Hedder from "./components/Hedder";
import Sidebar from "./components/Sidebar";
import Routing from "./Routes/Routing";
const App = () => {
  return (
    <div className="w-full h-screen grid grid-cols-12 grid-rows-8 overflow-hidden">
      <div className="w-full h-auto row-span-1 col-span-12 ">
        <Hedder />
      </div>
      <div className="flex col-span-12 row-span-11  ">
        <div className="w-[17%] h-auto ">
          <Sidebar />
        </div>
        <div className="w-[83%] h-auto bg-white flex justify-center items-center">
          <Routing />
        </div>
      </div>
    </div>
  );
};

export default App;
