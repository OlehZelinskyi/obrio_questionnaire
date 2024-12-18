"use client";

import { Input } from "@/app/types";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, ReactNode, useState } from "react";
import Option from "./option";

interface CheckboxProps {
  checked?: boolean;
  children: ReactNode;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Checkbox = ({ onChange, children, checked = false }: CheckboxProps) => {
  return (
    <div className="group relative w-full">
      <input
        className="absolute top-0 left-0 bottom-0 right-0 opacity-0 z-10"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <Option
        className={cn(
          "group-hover:bg-night group-hover:text-[#FBFBFF] group-hover:opacity-90",
          checked && "bg-night text-[#FBFBFF]"
        )}
      >
        {children}
      </Option>
    </div>
  );
};

const MultipleAnswerInput = ({ inputs }: { inputs: Input[] }) => {
  const router = useRouter();
  const [selected, setSelected] = useState<Record<string, string | undefined>>(
    {}
  );

  console.log("selected", selected);

  const getChangeHandler: (input: Input) => () => void =
    (input) => async () => {
      setSelected((prev) => ({
        ...prev,
        [input.value as string]: !!prev[input.value as string]
          ? undefined
          : (input.value as string),
      }));

      // const nextValue = await getInputNext(input.next);

      // router.push(nextValue);
    };
  return (
    <section className="w-full flex flex-col gap-y-5">
      {inputs.map((input, index) => {
        return (
          <Checkbox
            checked={!!selected[input.value as string]}
            onChange={getChangeHandler(input)}
            key={index}
          >
            {input.label}
          </Checkbox>
        );
      })}
    </section>
  );
};

export default MultipleAnswerInput;
