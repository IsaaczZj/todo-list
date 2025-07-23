import type React from "react";
import { classMerge } from "../utils/classMerge";

interface IconProps extends React.ComponentProps<"svg"> {
  animate?: boolean;
  svg: React.FC<React.ComponentProps<"svg">>;
}

export function Icon({
  svg: SvgComponent,
  animate = false,
  className,
  ...props
}: IconProps) {
  const iconVariants = {
    variant: {
      animate: {
        false: "",
        true: "animate-spin",
      },
    },
  };
  return (
    <SvgComponent
      {...props}
      className={classMerge([
        iconVariants.variant.animate[animate ? "true" : "false"],
        className,
      ])}
    />
  );
}
