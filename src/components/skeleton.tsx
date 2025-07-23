import { classMerge } from "../utils/classMerge";

interface SkeletonProps extends React.ComponentProps<"div"> {
  rounded?: "sm" | "lg" | "full";
}

export function Skeleton({ rounded = "lg", className, ...props }: SkeletonProps) {
  const skeletonVariants = {
    rounded: {
      sm: "rounded-sm",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  };
  return (
    <div
      className={classMerge([
        "animate-pulse bg-gray-200 pointer-events-none",
        skeletonVariants.rounded[rounded],
        className,
      ])}
      {...props}
    />
  );
}
