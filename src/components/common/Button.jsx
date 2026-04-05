const variants = {
  primary:
    "bg-slate-900 text-white hover:-translate-y-0.5 hover:bg-slate-800",
  outline:
    "border border-slate-300 bg-transparent text-slate-900 hover:border-lime-500 hover:text-lime-600",
  ghost: "bg-slate-100 text-slate-900 hover:bg-slate-200",
};

const Button = ({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) => {
  const classes = [
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition duration-300",
    variants[variant] ?? variants.primary,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
