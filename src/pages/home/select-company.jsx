import { Button } from "../../components/common/button";
import { LabelInput } from "../../components/common/label-input";
import { LabelSelect } from "../../components/common/select";
import { CollegeData } from "../../data/collegeData";
import { useNavigate } from "react-router-dom";

const SelectCompnay = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-primary h-screen flex flex-col justify-between">
      <section className="grid place-items-center h-full">
        <h2 className="font-extrabold text-[7vh] text-secondary">SPEGI</h2>
      </section>
      <section className="min-h-[70%] rounded-t-[4vh] bg-secondary p-4 ">
        <div className="text-center">
          <label className="font-semibold text-[3vh]">Hi, Romesh Jain</label>
          <p className="text-textSecondary mt-2">Select College/Institute</p>
        </div>
        <div>
          <LabelInput
            label={"Group"}
            type={"text"}
            name={"number"}
            value={"Ratlam"}
            // inputHandler={handleUserInput}
            lengthLimit={10}
            // value={userDetails.number}
          />
          <LabelSelect label={"College"} options={CollegeData} />
          <div className="flex items-center gap-3 justify-end mt-4 text-[2.5vh]">
            <label className="flex items-center space-x-2 cursor-pointer">
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
            </label>
          </div>
        </div>
        <div className="mt-8">
          <Button label={"Continue"} clickHandler={() => navigate("/home")} />
        </div>
      </section>
    </div>
  );
};

export default SelectCompnay;
