import { ConditionalNext, InputNext, Screen } from "@/app/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function isConditionalNext(input: InputNext): input is ConditionalNext {
  return (
    typeof input === "object" &&
    input !== null &&
    "condition" in input &&
    "next" in input
  );
}

export async function getDependencyNext(dependKey: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/questionnaire/${dependKey}`
  );
  const data: Screen = await response.json();

  // todo: get value from redux.

  return data.inputs[0].next as string;
}

export async function getInputNext(next: InputNext) {
  const basis = "/questionnaire";

  if (typeof next === "string") {
    return basis + "/" + next;
  }

  if (isConditionalNext(next)) {
    return basis + "/" + next.default;
  }

  const dependecyNext = await getDependencyNext(next.depends_on_value);

  return dependecyNext;
}
