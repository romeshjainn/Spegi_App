export const LabelInput = ({
  name,
  type,
  label,
  placeholder,
  inputHandler,
  lengthLimit,
  value,
  readonly,
}) => {
  return (
    <div className=" flex flex-col gap-2">
      <label className="font-medium">{label}</label>
      <input
        className="rounded-xl border border-primary font-semibold p-4"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => {
          let inputValue = e.target.value.toString();
          if (inputValue.length <= lengthLimit || inputValue === "") {
            inputHandler(e);
          }
        }}
        maxLength={lengthLimit}
        value={value}
        readOnly={readonly}
      />
    </div>
  );
};
