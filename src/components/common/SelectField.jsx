const SelectField = ({ label, id, name, options }) => {
  return (
    <label htmlFor={id} className="block space-y-2">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <select id={id} name={name} className="input-control">
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-white text-slate-900">
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectField;
