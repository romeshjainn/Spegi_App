export const Button = ({ label, isClicked, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className="bg-primary w-full text-white rounded-xl p-3 font-semibold"
      {...(isClicked && { disabled: true })} // Add disabled only if isClicked is true
    >
      {label}
    </button>
  );
};
