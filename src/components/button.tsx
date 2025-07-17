import { cva, type VariantProps } from "class-variance-authority";
import { Icon } from "./icon";
import { Text } from "./text";

export const buttonVariants = cva(
  "flex items-center justify-center cursor-pointer transition rounded-lg group gap-2 ",
  {
    variants: {
      variant: {
        primary: "bg-gray-200 hover:bg-pink-light",
      },
      size: {
        md: "h-14 py-4 px-5 ",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  }
);

export const buttonIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-pink-base",
    },
    size: {
      md: "w-5 h-5 ",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon?: React.FC<React.ComponentProps<"svg">>;
}

export function Button({
  variant,
  size,
  disabled,
  children,
  className,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, disabled, size, className })}
      {...props}
      disabled
    >
      {IconComponent && (
        <Icon
          svg={IconComponent}
          className={buttonIconVariants({ variant, size })}
        />
      )}
      <Text variant="body-md-bold" className="text-gray-400">
        {children}
      </Text>
    </button>
  );
}
