"use client";

import { Input } from "@/app/types";
import { cn, getInputNext } from "@/lib/utils";
import { useRouter } from "next/navigation";
import {
  ChangeEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
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

const MultipleAnswerInput = ({
  inputs,
  saveAnswer,
}: {
  inputs: Input[];
  saveAnswer: (value: unknown) => void;
}) => {
  const router = useRouter();
  const [selected, setSelected] = useState<Record<string, string | undefined>>(
    {}
  );

  const nextValue = useRef<string | null>(null);

  const getChangeHandler: (input: Input) => () => void =
    (input) => async () => {
      setSelected((prev) => ({
        ...prev,
        [input.value as string]: !!prev[input.value as string]
          ? undefined
          : (input.value as string),
      }));
    };

  useEffect(() => {
    // In multi-option variant next url will be the same for every option
    // So we can work with inputs[0]

    async function getNext() {
      const nextInputValue = await getInputNext(inputs[0].next);

      nextValue.current = nextInputValue;
    }

    getNext();
  }, [inputs]);

  const handleProceed = () => {
    if (nextValue.current) {
      saveAnswer(Object.values(selected));

      router.push(nextValue.current);
    }
  };
  const canProceed = !!Object.values(selected).filter(Boolean).length;

  return (
    <div className="flex flex-col">
      <section className="w-full flex flex-col gap-y-5 pr-2 max-h-[400px] overflow-y-auto">
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
      {canProceed && (
        <Option
          variant="default"
          className="max-w-[calc(100%-12px)] mt-5"
          onClick={handleProceed}
        >
          Proceed
        </Option>
      )}
    </div>
  );
};

export default MultipleAnswerInput;
