import { useNavigate } from "react-router-dom";

export const DetailsCard = ({ bgColor, iconColor, label, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundColor: bgColor ? bgColor : "#fff" }}
      className="min-h-] border-2 border-black p-[2px] rounded-[5vh] flex justify-between items-center px-2"
      onClick={() => navigate(`/${navigateTo}`)}
    >
      <div className="bg-primary rounded-full h-16 aspect-square grid place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-10 text-[#008000]"
          style={{ color: iconColor ? iconColor : "#008000" }}
        >
          <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
          <path
            fillRule="evenodd"
            d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
            clipRule="evenodd"
          />
          <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
        </svg>
      </div>
      <div className="px-4 h-full w-full leading-1">
        <h2 className="text- text-[4vh]  font-semibold">₹20,000</h2>
        <p className="text- text-[2vh]">{label}</p>
      </div>
      <div className="mr-6 text-">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="16"
          // height="16"
          fill="currentColor"
          className="size-16 bi bi-arrow-right-short"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
          />
        </svg>
      </div>
    </div>
  );
};
