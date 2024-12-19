import { cn } from "@/lib/utils";
import * as React from "react";
import { Button, ButtonProps } from "../ui/button";

const Option = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <Button
        className={cn("w-full h-16 rounded-xl", className)}
        variant="stone"
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
