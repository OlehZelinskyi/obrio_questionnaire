"use client";

import { Input } from "@/app/types";
import { getInputNext } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Option from "./option";

const OneAnswerInput = ({
  inputs,
  saveAnswer,
}: {
  inputs: Input[];
  saveAnswer: (value: unknown) => void;
}) => {
  const router = useRouter();

  const getClickHandler: (input: Input) => () => Promise<void> =
    (input) => async () => {
      const nextValue = await getInputNext(input.next);

      if (input.value) {
        saveAnswer(input.value);
      }

      router.push(nextValue);
    };
  return (
    <section className="w-full flex flex-col gap-y-5">
      {inputs.map((input, index) => {
        return (
          <Option onClick={getClickHandler(input)} key={index}>
            {input.label}
          </Option>
        );
      })}
    </section>
  );
};

export default OneAnswerInput;
