import { Text } from "./text";
import { cva, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        primary: "bg-green-light text-green-dark",
        secondary: "bg-pink-light text-pink-dark",
      },
      size: {
        sm: "py-0.5 px-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

interface BadgeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {}
export function Badge({
  variant,
  size,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text variant="body-sm-bold">{children}</Text>
    </div>
  );
}
