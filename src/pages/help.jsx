import React from "react";
import { Accordion } from "../components/common/accordion";
import { Faqs } from "../data/faq";

const Help = () => {
  return (
    <div className="flex flex-col h-[85vh] justify-between relative">
      <header className="mb-6">
        <h2 className="text-[3vh] text-center font-semibold border-b-[.2px] border-gray-400 pb-3">
          Help
        </h2>
      </header>
      <main className="h-full mt-2 overflow-scroll ">
        <div className="flex flex-col gap-4">
          {Faqs.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Accordion label={item.label} details={item.details} />
              </React.Fragment>
            );
          })}
        </div>
      </main>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        // className="size-16 fill-white bg-primary  rounded-full p-2"
        // className="size-14 fill-primary absolute bottom-8 right-8"
        className="size-14 fill-white bg-primary  rounded-full p-2 absolute bottom-8 right-8"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Help;
