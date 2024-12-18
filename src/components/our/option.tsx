import { cn } from "@/lib/utils";
import * as React from "react";
import { Button, ButtonProps } from "../ui/button";

const Option = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <Button
        className={cn(
          "w-full h-16 rounded-xl bg-button text-foreground border !shadow-button text-black text-sm hover:bg-night hover:text-[#FBFBFF] transition-none whitespace-normal",
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </Button>
    );
  }
);

Option.displayName = "Option";

export default Option;
