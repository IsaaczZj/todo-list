import { cva, type VariantProps } from "class-variance-authority";
import { Icon } from "./icon";

export const buttonIconVariants = cva(
  "h-6 w-6 p-1 inline-flex items-center justify-center rounded cursor-pointer transition group",
  {
    variants: {
      variant: {
        primary: "bg-green-base hover:bg-green-dark",
        secondary: "bg-gray-200 hover:bg-pink-base",
        tertiary: "bg-transparent hover:bg-gray-200",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      disabled: false,
    },
  }
);

export const buttonIconIconVariants = cva("transition h-4 w-4", {
  variants: {
    variant: {
      primary: "fill-white",
      secondary: "fill-pink-base group-hover:fill-white",
      tertiary: "fill-gray-300 group-hover:fill-gray-400",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "disabled">,
    VariantProps<typeof buttonIconVariants> {
  icon: React.FC<React.ComponentProps<"svg">>;
}

export function ButtonIcon({
  icon: IconComponent,
  variant,
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonIconVariants({ variant, className, disabled })}
      {...props}
    >
      <Icon
        svg={IconComponent}
        className={buttonIconIconVariants({ variant, className })}
      ></Icon>
    </button>
  );
}
