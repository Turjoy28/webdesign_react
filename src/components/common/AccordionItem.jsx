const AccordionItem = ({ title, content, isOpen, onClick, children }) => {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-slate-900">{title}</span>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-lg text-lime-600">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="pb-5 text-sm leading-7 text-slate-600">
          {children ?? <p>{content}</p>}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
