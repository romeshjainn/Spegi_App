export const LabelSelect = ({
  name,
  type,
  label,
  value,
  options = [],
  nameKey = "name",
  valueKey = "value",
  handleSelect,
}) => {
  return (
    <div className="mt-6 flex flex-col gap-2">
      <label className="font-medium">{label}</label>
      <select
        className="rounded-xl border border-primary font-semibold p-4"
        type={type}
        name={name}
        value={value}
        onChange={(e) => handleSelect(e)}
      >
        <option value="">Select {label}</option>
        {options.length &&
          options?.map((item, index) => (
            <option key={index} value={item[valueKey]}>
              {item[nameKey]}
            </option>
          ))}
      </select>
    </div>
  );
};
