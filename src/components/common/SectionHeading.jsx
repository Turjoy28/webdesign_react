const SectionHeading = ({ label, title, description, className = "" }) => {
  return (
    <div className={["max-w-3xl", className].filter(Boolean).join(" ")}>
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-copy mt-4">{description}</p>}
    </div>
  );
};

export default SectionHeading;
