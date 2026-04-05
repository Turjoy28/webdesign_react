const InputField = ({ label, id, name, type = "text", placeholder }) => {
  return (
    <label htmlFor={id} className="block space-y-2">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input-control"
      />
    </label>
  );
};

export default InputField;
