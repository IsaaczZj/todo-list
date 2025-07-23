import React from "react";
import { classMerge } from "../utils/classMerge";

// export const textVariants = cva("font-sans text-gray-400", {
//   variants: {
//     variant: {
//       "body-sm-bold": "text-sm leading-5 font-semibold",
//       "body-md": "text-base leading-6 font-normal",
//       "body-md-bold": "text-base leading-6 font-semibold",
//     },
//   },
//   defaultVariants: {
//     variant: "body-md",
//   },
// });

interface TextProps {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
  variant?: "body-sm-bold" | "body-md" | "body-md-bold";
}

export function Text({
  as = "span",
  variant = "body-md",
  className,
  children,
  ...props
}: TextProps) {
  const textVariants = {
    variants: {
      "body-sm-bold": "text-sm leading-5 font-semibold",
      "body-md": "text-base leading-6 font-normal",
      "body-md-bold": "text-base leading-6 font-semibold",
    },
  };

  return React.createElement(
    as,
    {
      className: classMerge([textVariants.variants[variant], className]),
      ...props,
    },
    children
  );
}
