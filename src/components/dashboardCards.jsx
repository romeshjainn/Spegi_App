export const DashboardCards = ({ icon, label, value, color, symbol }) => {
  return (
    <div className="bg-[#dedede] flex gap-4 items-center rounded-md w-full p-3">
      {icon}

      <section className="leading-2">
        <h2 className="text-[2.9vh] font-semibold">{label}</h2>
        <p className="text-[2.4vh] font-semibold">
          {symbol} {value}
        </p>
      </section>
    </div>
  );
};
