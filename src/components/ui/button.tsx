import { Icon } from "./icon";
import { Text } from "./text";
import { classMerge } from "../../utils/classMerge";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "primary";
  size?: "md";
  icon?: React.FC<React.ComponentProps<"svg">>;
}

export function Button({
  variant = "primary",
  size = "md",
  disabled,
  children,
  className,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  const buttonVariants = {
    variants: {
      primary: "bg-gray-200 hover:bg-pink-light",
    },
    size: {
      md: "h-14 py-4 px-5 ",
    },
  };

  const buttonIconVariants = {
    variants: {
      primary: "fill-pink-base",
    },
    size: {
      md: "w-5 h-5",
    },
  };

  return (
    <button
      className={classMerge([
        "flex items-center justify-center cursor-pointer transition rounded-lg group gap-2 ",
        buttonVariants.variants[variant],
        buttonVariants.size[size],
        disabled && "opacity-50 pointer-events-none",
        className,
      ])}
      {...props}
      disabled={disabled}
    >
      {IconComponent && (
        <Icon
          svg={IconComponent}
          className={classMerge([
            buttonIconVariants.variants[variant],
            buttonIconVariants.size[size],
          ])}
        />
      )}
      <Text variant="body-md-bold" className="text-gray-400">
        {children}
      </Text>
    </button>
  );
}
