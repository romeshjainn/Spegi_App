import { DetailsCard } from "../../components/home/detailsCard";

const Home = () => {
  return (
    <div className=" flex flex-col justify-between">
      <main className="h-full">
        <section className="py-3 flex items-center justify-between mr-4">
          <div>
            <h2 className="text-[3vh] text-[#6c6565] font-medium">Hello</h2>
            <p className="text-[4vh] font-semibold">Romesh Jain</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8 text-gray-800"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
              clipRule="evenodd"
            />
          </svg>
        </section>
        <div className="mb-6 mt-2 px-4 p-2 flex items-center justify-center border-y-[.1111px] min-h-[100px] rounded-xl bg-primary border-gray-700 py-3">
          <h2 className="text-[2.4vh] text-start text-white font-semibold">
            Rk College Of Technologies & Management
          </h2>
        </div>

        <section className="flex flex-col gap-5 mt-4 h-full">
          <DetailsCard navigateTo="/income" label={"Income"} bgColor={""} />
          <DetailsCard
            navigateTo="/expense"
            label={"Expense"}
            bgColor={""}
            iconColor={"red"}
          />
          <DetailsCard navigateTo="/enquiry" label={"Enquiry"} bgColor={""} />
          <DetailsCard
            navigateTo="/admissions"
            label={"Admissions"}
            bgColor={""}
          />
        </section>

        {/* <section className="flex flex-col gap-3 mt-4">
          <div className="rounded-xl h-[60px] p-3 py-8 flex justify-between items-center border-2 border-primary">
            <h2 className="text-[2.9vh] text-gray-700 font-bold">₹ 2,00,000</h2>
            <label className="font-medium text-[2.4vh] w-[40%] text-center text-secondary px-2 rounded-xl bg-green-700">
              Income
            </label>
          </div>
          <div className="rounded-xl h-[60px] p-3 py-8 flex justify-between items-center border-2 border-primary">
            <h2 className="text-[2.9vh] text-gray-700 font-bold">₹ 2,00,000</h2>
            <label className="font-medium text-[2.4vh] w-[40%] text-center text-secondary px-2 rounded-xl bg-red-700">
              Expenses
            </label>
          </div>
          <div className="rounded-xl h-[60px] p-3 py-8 flex justify-between items-center border-2 border-primary">
            <h2 className="text-[2.9vh] text-gray-700 font-bold">₹ 2,00,000</h2>
            <label className="font-medium text-[2.4vh] w-[40%] text-center text-secondary px-2 rounded-xl bg-blue-700">
              Admission
            </label>
          </div>
          <div className="rounded-xl h-[60px] p-3 py-8 flex justify-between items-center border-2 border-primary">
            <h2 className="text-[2.9vh] text-gray-700 font-bold">₹ 2,00,000</h2>
            <label className="font-medium text-[2.4vh] w-[40%] text-center text-secondary px-2 rounded-xl bg-purple-700">
              Inquiry
            </label>
          </div>
        </section> */}
        {/* <section className="flex flex-col gap-3">
          <DashboardCards
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8 text-green-700"
              >
                <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                <path
                  fillRule="evenodd"
                  d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
                  clipRule="evenodd"
                />
                <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
              </svg>
            }
            label={"Income"}
            symbol={"₹"}
            value={"20000"}
          />
          <DashboardCards
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8 text-red-700"
              >
                <path
                  fillRule="evenodd"
                  d="M3.75 3.375c0-1.036.84-1.875 1.875-1.875H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375Zm10.5 1.875a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Zm-3.75 5.56c0-1.336-1.616-2.005-2.56-1.06l-.22.22a.75.75 0 0 0 1.06 1.06l.22-.22v1.94h-.75a.75.75 0 0 0 0 1.5H9v3c0 .671.307 1.453 1.068 1.815a4.5 4.5 0 0 0 5.993-2.123c.233-.487.14-1-.136-1.37A1.459 1.459 0 0 0 14.757 15h-.507a.75.75 0 0 0 0 1.5h.349a2.999 2.999 0 0 1-3.887 1.21c-.091-.043-.212-.186-.212-.46v-3h5.25a.75.75 0 1 0 0-1.5H10.5v-1.94Z"
                  clipRule="evenodd"
                />
              </svg>
            }
            label={"Expense"}
            symbol={"₹"}
            value={"20000"}
          />
          <DashboardCards
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8 text-blue-700"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z"
                  clipRule="evenodd"
                />
              </svg>
            }
            label={"Admission"}
            value={"30"}
          />
          <DashboardCards
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8 text-purple-700"
              >
                <path
                  fillRule="evenodd"
                  d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            }
            label={"Enquiry"}
            value={"200"}
          />
        </section> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

//    <DashboardCards
//         color={"#eaeaea"}
//         label={"Income"}
//         symbol={"₹"}
//         value={"20000"}
//       />
//       <DashboardCards
//         color={"#eaeaea"}
//         label={"Expense"}
//         symbol={"₹"}
//         value={"20000"}
//       />
//       <DashboardCards
//         color={"#eaeaea"}
//         label={"Enquiry"}
//         symbol={""}
//         value={"20000"}
//       />
//       <DashboardCards
//         color={"#eaeaea"}
//         label={"Admission"}
//         symbol={""}
//         value={"20000"}
//       />
