import LogoIcon from "@/app/assets/logo";
import { Theme } from "@/app/types";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = ({ theme, back }: { theme?: Theme; back: string | null }) => {
  return (
    <header className="flex items-center justify-between h-14">
      {back ? (
        <Button variant="link" asChild className="p-2">
          <Link href={back}>
            <ChevronLeft />
          </Link>
        </Button>
      ) : (
        <span> </span>
      )}
      <LogoIcon theme={theme} />
      <span> </span>
    </header>
  );
};

export default Header;
