import { Icon } from "./icon";
import { classMerge } from "../utils/classMerge";

interface ButtonProps extends React.ComponentProps<"button"> {
  icon: React.FC<React.ComponentProps<"svg">>;
  variant?: "primary" | "secondary" | "tertiary";
}

export function ButtonIcon({
  icon: IconComponent,
  variant = "primary",
  disabled,
  className,
  ...props
}: ButtonProps) {
  const buttonIconVariants = {
    variant: {
      primary: "bg-green-base hover:bg-green-dark",
      secondary: "bg-gray-200 hover:bg-pink-base",
      tertiary: "bg-transparent hover:bg-gray-200",
    },
  };
  const buttonIconIconVariants = {
    variant: {
      primary: "fill-white",
      secondary: "fill-pink-base group-hover:fill-white",
      tertiary: "fill-gray-300 group-hover:fill-gray-400",
    },
  };

  return (
    <button
      className={classMerge([
        "h-6 w-6 p-1 inline-flex items-center justify-center rounded cursor-pointer transition group",
        buttonIconVariants.variant[variant],
        disabled && "opacity-50 pointer-events-none",
        className,
      ])}
      {...props}
    >
      <Icon
        svg={IconComponent}
        className={classMerge([
          "transition h-4 w-4",
          buttonIconIconVariants.variant[variant],
        ])}
      ></Icon>
    </button> 
  );
}
