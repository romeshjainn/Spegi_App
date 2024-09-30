import { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { formatDatesObject } from "../../utils/formatDatePickerDate";
import { getIncomePageData } from "../../api/api";
import toast from "react-hot-toast";
import { toWords } from "../../utils/toWords";

export const IncomePage = () => {
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
  const [incomeData, setIncomeData] = useState(0);

  const fetchData = async (dateRange) => {
    toast.dismiss();
    toast.loading("Fetching Data");
    try {
      const dbName = localStorage.getItem("collegeDbName");
      const data = await getIncomePageData(dbName, dateRange);

      toast.dismiss();
      if (data?.success) {
        setIncomeData(data?.incomeData[0]?.totalIncome.toFixed(2));
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
          <h2 className="font-extrabold text-[6vh] text-secondary">
            Rs. {incomeData || 0}
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
        </div>

        <div className="mt-4 font-semibold">
          {toWords.convert(parseFloat(incomeData))}
        </div>
      </section>
    </div>
  );
};
