import { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { formatDatesObject } from "../../utils/formatDatePickerDate";
import { getAdmissionPageData } from "../../api/api";
import toast from "react-hot-toast";

export const AdmissionsPage = () => {
  const currentDate = new Date();

  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const [value, setValue] = useState({
    startDate: startOfMonth,
    endDate: endOfMonth,
  });
  const [admissionData, setAdmissionData] = useState(0);

  const fetchData = async (dateRange) => {
    toast.dismiss();
    toast.loading("Fetching Data");
    try {
      const dbName = localStorage.getItem("collegeDbName");
      const data = await getAdmissionPageData(dbName, dateRange);

      toast.dismiss();
      if (data?.success) {
        setAdmissionData(data?.admissionData[0].AdmissionData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const dateRange = formatDatesObject(value);
    fetchData(dateRange);
  }, [value]);
  return (
    <div className="bg-primary h-screen flex flex-col justify-between">
      <section className="grid place-items-center h-full">
        <div>
          {/* <h2 className="font-extrabold text-[5vh] text-secondary"> */}
          <h2 className="font-extrabold text-[7vh] text-secondary">
            {admissionData || 0}
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
              useRange={false}
              separator="to"
              displayFormat="DD-MMM-YYYY"
              onChange={(newValue) => setValue(newValue)}
              showShortcuts={true}
              primaryColor={"gray"}
              inputClassName={
                "bg-white outline-none w-full font-semibold text-primary"
              }
            />
          </div>

          {/* <div className="mt-3 max-h-[50vh] flex flex-col gap-3 py-x3 overflow-scroll ">
            {admissionData?.length ? (
              admissionData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-2 border-2 border-black rounded-md"
                  >
                    <p className="w-1/2 text-start p-2 font-semibold">
                      {item?.COURSE_NAME}
                    </p>
                    <p className="w-1/2 text-start p-2">
                      {item?.TOTALENQUIRIES}
                    </p>
                  </div>
                );
              })
            ) : (
              <div className="flex flex-col justify-center items-center min-h-[40vh] text-primary font-semibold text-[3.2vh]">
                No Data Available
                <span className="text-[2.3vh]">Between The Selected Dates</span>
              </div>
            )}
          </div> */}
        </div>
      </section>
    </div>
  );
};
