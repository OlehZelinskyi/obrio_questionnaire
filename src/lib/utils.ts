import { store } from "@/app/redux/store";
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
    "on_depend_condition" in input &&
    "default" in input
  );
}

export async function getDependencyNext(dependKey: string) {
  const screenMeta = store.getState().schema?.screens[dependKey];

  if (!screenMeta) {
    console.error("Error in dependency graph, using key", dependKey);
    return "/";
  }

  const savedValue = store.getState().answers[dependKey];
  const nextScreen = screenMeta.inputs.find(
    (input) => input.value === savedValue?.value
  )?.next;

  if (!screenMeta) {
    console.error("Error in dependency graph, using screen", {
      screenMeta,
      savedValue,
    });
    return "/";
  }

  return (nextScreen as ConditionalNext).on_depend_condition;
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

export function replaceTokens(
  template: string,
  replacements: Record<string, string>
) {
  return template.replace(
    /\{(.*?)\}/g,
    (_, token) => replacements[token] || token
  );
}

export function getTokenReplacements(screen: Screen) {
  if (!screen.tokens) {
    return {};
  }

  const replacementsMap: Record<string, string> = {};

  const tokens = screen.tokens;
  const answers = store.getState().answers;
  const _schema = store.getState().schema;

  for (const key in tokens) {
    const screenId = tokens[key];
    const screen = _schema?.screens[screenId];
    const savedAnswer = answers[screenId];

    if (screen && typeof savedAnswer !== "undefined") {
      const selectedOption = screen.inputs.find(
        (input) => input.value === savedAnswer.value
      );

      if (selectedOption?.tokenizedValue) {
        replacementsMap[key] = selectedOption.tokenizedValue;
      }
    }
  }

  return replacementsMap;
}
