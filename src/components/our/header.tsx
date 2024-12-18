import LogoIcon from "@/app/assets/logo";
import { Theme } from "@/app/types";
import { ChevronLeft } from "lucide-react";

const Header = ({ theme }: { theme?: Theme }) => {
  return (
    <header className="flex items-center justify-between h-14">
      <ChevronLeft />
      <LogoIcon theme={theme} />
      <span> </span>
    </header>
  );
};

export default Header;
