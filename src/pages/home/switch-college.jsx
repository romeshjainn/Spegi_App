import toast from "react-hot-toast";
import { LabelInput } from "../../components/common/label-input";
import { LabelSelect } from "../../components/common/select";
import { getCollegeGroupName } from "../../api/api";
import { useEffect, useState } from "react";

const SwitchCollege = () => {
  const [data, setData] = useState([]);
  const [selectedCollegeIndex, setSelectedCollegeIndex] = useState(-1);
  const [isDefault, setIsDefault] = useState(false);

  const getData = async () => {
    toast.dismiss();
    toast.loading("Fetching Data");
    try {
      const data = await getCollegeGroupName("MasterDatabase", "8839248138");
      toast.dismiss();
      if (data) {
        setData(data);
      }
    } catch (error) {
      toast.dismiss();
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCollegeChange = (e) => {
    const collegeIndex = e.target.selectedIndex - 1;
    setSelectedCollegeIndex(collegeIndex);
  };

  const handleCheckboxChange = () => {
    setIsDefault((prevState) => !prevState);
  };

  const handleContinue = () => {
    if (selectedCollegeIndex == -1) {
      toast.error("Please select a college");
    } else {
      const collegeName = data[selectedCollegeIndex]?.College_Name;
      const collegeServerName = data[selectedCollegeIndex]?.ServerName;
      const collegeDbName = data[selectedCollegeIndex]?.DBName;
      console.log(data[selectedCollegeIndex], "data[selectedCollegeIndex]");
      console.log(collegeName, "collegeDbName");
      console.log(collegeServerName, "collegeServerName");
      console.log(collegeDbName, "collegeDbName");

      localStorage.setItem("isDefaultCollege", isDefault);
      localStorage.setItem("defaultCollegeName", collegeName);
      localStorage.setItem("defaultCollegeServerName", collegeServerName);
      localStorage.setItem("collegeDbName", collegeDbName);
      toast.success("Saved");
    }
  };

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
          value={data[0]?.CollegeGroup || ""}
          readonly={true}
          lengthLimit={10}
        />
        <LabelSelect
          label={"College"}
          options={data}
          nameKey={"College_Name"}
          valueKey={"ServerName"}
          value={data[selectedCollegeIndex]?.ServerName}
          handleSelect={handleCollegeChange}
        />

        <div className="flex items-center gap-3 justify-end mt-4 text-[2.5vh]">
          <div className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="hidden peer"
              checked={isDefault}
              onChange={handleCheckboxChange}
            />
            <div
              className={`w-6 h-6 border-2 rounded-md flex items-center justify-center ${
                isDefault
                  ? "bg-blue-500 border-blue-500"
                  : "bg-white border-gray-400"
              }`}
              onClick={handleCheckboxChange}
            >
              {isDefault && (
                <svg
                  className="w-4 h-4 text-white"
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
              )}
            </div>
            <span className="text-gray-700">Set as default</span>
          </div>
        </div>
      </main>

      <footer>
        <button
          onClick={handleContinue}
          className="flex items-center gap-3 justify-center rounded-xl text-[2.5vh] bg-primary text-white text-center border-2 border-gray-300 w-full font-semibold p-2"
        >
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
