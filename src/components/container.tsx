import { classMerge } from "../utils/classMerge";

interface ContainerProps extends React.ComponentProps<"div"> {
  size?: "md";
}

export function Container({
  size = "md",
  className,
  children,
  ...props
}: ContainerProps) {
  const containerVariants = {
    size: {
      md: "max-w-xl px-3",
    },
  };
  return (
    <div
      className={classMerge([
        "mx-auto",
        containerVariants.size[size],
        className,
      ])}
    >
      {children}
    </div>
  );
}
