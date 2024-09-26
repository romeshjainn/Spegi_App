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
        // onChange={(e) => handleSelect(e.target.value)}
        defaultValue={value}
        onChange={(e) => handleSelect(e)}
        // const selectedIndex = e.target.selectedIndex - 1; // Adjust for "Select" option
        // const selectedKey = options[selectedIndex]?.[valueKey];
        // console.log("Selected Index:", selectedIndex);
        // console.log("Selected Key:", selectedKey);
      >
        <option value="">Select {label}</option>
        {options.map((item, index) => (
          <option key={index} value={item[valueKey]}>
            {item[nameKey]}
          </option>
        ))}
      </select>
    </div>
  );
};
