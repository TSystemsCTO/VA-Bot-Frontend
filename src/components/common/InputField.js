const InputField = ({
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  note = "",
}) => (
  <div>
    <label className="text-base">
      {label} {note && <span className="text-xs">{note}</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className="w-full border rounded px-4 py-2 focus:outline-none mt-2"
      onChange={onChange}
    />
  </div>
);

export default InputField;
