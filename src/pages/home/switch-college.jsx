import { LabelInput } from "../../components/common/label-input";
import { LabelSelect } from "../../components/common/select";
import { CollegeData } from "../../data/collegeData";

const SwitchCollege = () => {
  return (
    <div className="mb-6 h-[85vh] flex flex-col justify-between">
      <header className="">
        <h2 className="text-[3vh] text-center font-semibold border-b-[.2px] border-gray-400 pb-3">
          Switch College
        </h2>
      </header>

      <main className="mt-4 h-full">
        <LabelInput
          label={"Group"}
          type={"text"}
          name={"number"}
          value={"Ratlam"}
          readonly={true}
          // inputHandler={handleUserInput}
          lengthLimit={10}
          // value={userDetails.number}
        />
        <LabelSelect label={"College"} options={CollegeData} />
        <div className="flex items-center gap-3 justify-end mt-4 text-[2.5vh]">
          <div className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="hidden peer" />

            <div className="w-6 h-6 bg-white border-2 border-gray-400 rounded-md flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
              <svg
                className="hidden w-4 h-4 text-white peer-checked:block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <span className="text-gray-700">Set as default</span>
          </div>
        </div>
      </main>

      <footer>
        <button className="flex items-center gap-3 justify-center rounded-xl text-[2.5vh] bg-primary text-white text-center border-2 border-gray-300 w-full font-semibold p-2">
          Save
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </footer>
    </div>
  );
};
export default SwitchCollege;
