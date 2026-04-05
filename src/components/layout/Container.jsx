const Container = ({ children, className = "" }) => {
  const classes = ["container-main", className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
};

export default Container;
