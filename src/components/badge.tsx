import { classMerge } from "../utils/classMerge";
import { Text } from "./text";


interface BadgeProps extends React.ComponentProps<"div"> {
  variant?: "primary" | "secondary";
  size?: "sm";
}
export function Badge({
  variant = "primary",
  size = "sm",
  className,
  children,
  ...props
}: BadgeProps) {
  const badgeVariants = {
    variant: {
      primary: "bg-green-light text-green-dark",
      secondary: "bg-pink-light text-pink-dark",
    },
    size: {
      sm: "py-0.5 px-2",
    },
  };

  return (
    <div
      className={classMerge([
        "inline-flex items-center justify-center rounded-full",
        badgeVariants.variant[variant],
        badgeVariants.size[size],
        className,
      ])}
      {...props}
    >
      <Text variant="body-sm-bold">{children}</Text>
    </div>
  );
}
