import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export const IncomePage = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  return (
    <div className="bg-primary h-screen flex flex-col justify-between">
      <section className="grid place-items-center h-full">
        <div>
          <h2 className="font-extrabold text-[7vh] text-secondary">
            Rs. 20,000
          </h2>
        </div>
      </section>
      <section className="min-h-[70%] rounded-t-[4vh] bg-secondary p-4 ">
        <div className="text-center mt-2">
          <label className="font-semibold text-[2.2vh]">
            Select Time Period
          </label>
          <div className="border-2 border-black mt-2 rounded-xl p-3 ">
            <Datepicker
              value={value}
              onChange={(newValue) => setValue(newValue)}
              showShortcuts={true}
              primaryColor={"gray"}
              inputClassName={
                "bg-white outline-none w-full font-semibold text-primary"
              }
            />
          </div>
        </div>
      </section>
    </div>

    // <div className="h-screen p-6 bg-white">
    //   <header className="text-center mb-4 text-green-700 text-[3.4vh] font-semibold">
    //     <h2>Income</h2>
    //   </header>
    //   <main className="">
    //     <div className="mt-3">
    //       <label className="font-semibold text-[2.2vh]">Select Time Period</label>
    //       <div className="border-2 border-black mt-1 rounded-xl p-3 ">
    //         <Datepicker
    //           value={value}
    //           onChange={(newValue) => setValue(newValue)}
    //           showShortcuts={true}
    //           primaryColor={"gray"}
    //           inputClassName={
    //             "bg-white outline-none w-full font-semibold text-primary"
    //           }
    //         />
    //       </div>
    //     </div>
    //   </main>
    // </div>
  );
};
