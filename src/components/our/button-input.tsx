"use client";

import { Input } from "@/app/types";
import { getInputNext } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Option from "./option";

const ButtonInput = ({ inputs }: { inputs: Input[] }) => {
  const router = useRouter();

  const getClickHandler: (input: Input) => () => void = (input) => async () => {
    console.log("clicked: ", input.value);
    const nextValue = await getInputNext(input.next);

    router.push(nextValue);
  };

  const input = inputs[0];

  if (!input) return null;

  return (
    <section className="w-full">
      <Option onClick={getClickHandler(input)}>{input.label}</Option>
    </section>
  );
};

export default ButtonInput;
