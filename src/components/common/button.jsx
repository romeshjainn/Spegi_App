export const Button = ({ label, isClicked, clickHandler }) => {
  return (
    <button
      disabled={isClicked ? !isClicked : false}
      onClick={clickHandler}
      className="bg-primary w-full text-white rounded-xl p-3 font-semibold"
    >
      {label}
    </button>
  );
};
