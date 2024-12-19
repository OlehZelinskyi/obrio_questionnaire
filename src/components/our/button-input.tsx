"use client";

import { Input } from "@/app/types";
import { getInputNext } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Option from "./option";

const ButtonInput = ({
  inputs,
  saveAnswer,
}: {
  inputs: Input[];
  saveAnswer: (value: unknown) => void;
}) => {
  const router = useRouter();

  const getClickHandler: (input: Input) => () => void = (input) => async () => {
    const nextValue = await getInputNext(input.next);

    if (input.value) {
      saveAnswer(input.value);
    }

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
