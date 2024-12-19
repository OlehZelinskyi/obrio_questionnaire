import { cn } from "@/lib/utils";
import * as React from "react";
import { Button, ButtonProps } from "../ui/button";

const Option = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { chosen?: boolean }
>(({ children, className, chosen, ...rest }, ref) => {
  return (
    <Button
      className={cn("w-full h-16 rounded-xl", className)}
      variant={chosen ? "night" : "stone"}
      ref={ref}
      {...rest}
    >
      {children}
    </Button>
  );
});

Option.displayName = "Option";

export default Option;
