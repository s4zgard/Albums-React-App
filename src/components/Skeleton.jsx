import classNames from "classnames";

const Skeleton = ({ times, className }) => {
  const outerDiv = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    className
  );
  const innerDiv = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200"
  );
  const boxes = [];

  for (let i = 0; i < times; i++) {
    boxes.push(
      <div key={i} className={outerDiv}>
        <div className={innerDiv} />
      </div>
    );
  }
  return boxes;
};

export default Skeleton;
