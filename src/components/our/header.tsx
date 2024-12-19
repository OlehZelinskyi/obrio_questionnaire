"use client";

import LogoIcon from "@/app/assets/logo";
import { clearAnswer } from "@/app/redux/slices/questionnaire";
import { Theme } from "@/app/types";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";

const Header = ({
  theme,
  back,
  screenId,
}: {
  theme?: Theme;
  back?: string | null;
  screenId?: string;
}) => {
  const dispatch = useDispatch();

  const handleBack = () => {
    if (screenId) {
      dispatch(clearAnswer({ id: screenId }));
    }
  };

  return (
    <header className="flex items-center justify-between h-14">
      {back ? (
        <Button variant="link" asChild className="p-2" onClick={handleBack}>
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
