const Checkbox = ({ label, name, checked, onChange }) => (
  <div className="flex items-center">
    <input
      type="checkbox"
      name={name}
      checked={checked}
      className="mr-2 w-4 h-4"
      onChange={onChange}
    />
    <label>{label}</label>
  </div>
);

export default Checkbox;
