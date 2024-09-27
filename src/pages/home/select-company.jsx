import React, { useEffect, useState } from "react";
import { Button } from "../../components/common/button";
import { LabelInput } from "../../components/common/label-input";
import { LabelSelect } from "../../components/common/select";
import { getCollegeGroupName } from "../../api/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SelectCompnay = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedCollegeIndex, setSelectedCollegeIndex] = useState(-1);
  const [isDefault, setIsDefault] = useState(false);

  const getData = async () => {
    toast.dismiss(); // Clear any existing toasts
    const loadingToast = toast.loading("Fetching Data..."); // Show loading toast

    try {
      const data = await getCollegeGroupName("MasterDatabase", "8839248138");

      if (data) {
        setData(data);
        toast.dismiss(loadingToast);
      } else {
        toast.error("No data found");
      }
    } catch (error) {
      toast.error("Error fetching data");
      console.error(error);
    } finally {
      toast.dismiss(loadingToast);
    }
  };

  useEffect(() => {
    getData(); // Fetch data on component mount
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

      localStorage.setItem("isDefaultCollege", isDefault);
      localStorage.setItem("defaultCollegeName", collegeName);
      localStorage.setItem("defaultCollegeServerName", collegeServerName);
      navigate("/home");
    }
  };

  return (
    <div className="bg-primary h-screen flex flex-col justify-between">
      <section className="grid place-items-center h-full">
        <h2 className="font-extrabold text-[7vh] text-secondary">SPEGI</h2>
      </section>
      <section className="min-h-[70%] rounded-t-[4vh] bg-secondary p-4">
        <div className="text-center">
          <label className="font-semibold text-[3vh]">Hi, Romesh Jain</label>
          <p className="text-textSecondary mt-2">Select College/Institute</p>
        </div>
        <div>
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
        </div>
        <div className="mt-8">
          <Button label={"Continue"} clickHandler={handleContinue} />
        </div>
      </section>
    </div>
  );
};

export default SelectCompnay;
