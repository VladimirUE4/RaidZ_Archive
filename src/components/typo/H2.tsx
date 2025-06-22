import { HTMLHeadingElementProps } from "@/types/globals";

const H2 = ({ children, className, ...props }: HTMLHeadingElementProps) => {
  return (
    <h2
      className={`scroll-m-20 text-7xl font-custom tracking-tight transition-colors first:mt-0 ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default H2;
