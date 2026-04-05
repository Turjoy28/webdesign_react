const TextareaField = ({ label, id, name, placeholder, rows = 5 }) => {
  return (
    <label htmlFor={id} className="block space-y-2">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="input-control resize-none"
      />
    </label>
  );
};

export default TextareaField;
