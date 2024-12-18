import * as React from "react";
import { ReactNode } from "react";
import { Button, ButtonProps } from "../ui/button";

const Option = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...rest }: { children?: ReactNode }, ref) => {
    return (
      <Button
        className="w-full h-16 rounded-xl bg-button text-foreground border !shadow-button text-black text-sm hover:bg-night hover:text-[#FBFBFF] transition-none whitespace-normal"
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
