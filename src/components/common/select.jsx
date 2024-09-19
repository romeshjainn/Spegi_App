export const LabelSelect = ({
  name,
  type,
  label,
  placeholder,
  inputHandler,
  lengthLimit,
  value,
  options,
}) => {
  return (
    <div className="mt-6 flex flex-col gap-2">
      <label className="font-medium">{label}</label>
      <select
        className="rounded-xl border border-primary font-semibold p-4"
        type={type}
        name={name}
      >
        <option value="">Select {label}</option>

        {options.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
