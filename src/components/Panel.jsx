import classNames from "classnames";

const Panel = ({ children, className, ...rest }) => {
  const classes = classNames(
    "border shadow w-full p-3 rounded bg-white",
    className
  );
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Panel;
