import { HTMLHeadingElementProps } from "@/types/globals";

const H1 = ({ children, className, ...props }: HTMLHeadingElementProps) => {
  return (
<h1
  className={`scroll-m-20 text-10xl sm:text-10xl md:text-15xl lg:text-17xl font-custom tracking-tight leading-10 sm:leading-10 md:leading-14 lg:leading-18 ${className}`}
  {...props}
>
  {children}
</h1>

  );
};

export default H1;

