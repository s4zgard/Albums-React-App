import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const ExpandableList = ({ header, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="mb-2 border rounded ">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-rows items-center justify-between gap-x-2">
          {header}
        </div>
        <div className="cursor-pointer text-lg" onClick={handleExpanded}>
          {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {isExpanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
};

export default ExpandableList;
