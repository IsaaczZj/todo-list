interface CardProps extends React.ComponentProps<"div"> {}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={`p-5 border border-solid border-gray-200 rounded-lg bg-white shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
