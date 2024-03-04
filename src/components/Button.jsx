import classNames from "classnames";
import { GoSync } from "react-icons/go";
const Button = ({
  children,
  className,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  loading,
  ...rest
}) => {
  const classes = classNames(
    "px-3 py-1.5 border rounded flex items-center gap-x-1",

    className,
    {
      "opacity-80": loading,
      "bg-blue-500 text-white border border-blue-500": primary && !outline,
      "bg-white text-blue-500 border border-blue-500": primary && outline,
      "bg-gray-500 text-white border border-gray-500": secondary && !outline,
      "bg-white text-gray-500 border border-gray-500": secondary && outline,
      "bg-green-500 text-white border border-green-500": success && !outline,
      "bg-white text-green-500 border border-green-500": success && outline,
      "bg-yellow-500 text-white border border-yellow-500": warning && !outline,
      "bg-white text-yellow-500 border border-yellow-500": warning && outline,
      "bg-red-500 text-white border border-red-500": danger && !outline,
      "bg-white text-red-500 border border-red-500": danger && outline,
      "rounded-full": rounded,
    }
  );
  return (
    <button {...rest} disabled={loading} className={classes}>
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  );
};

export default Button;
