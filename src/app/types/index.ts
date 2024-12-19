export enum SCREEN_TYPE {
  ONE_ANSWER = "ONE_ANSWER",
  BUTTON = "BUTTON",
  MULTIPLE_ANSWER = "MULTIPLE_ANSWER",
}

export type Theme = "dark" | "light";

export type ConditionalNext = {
  default: string;
  on_depend_condition: string;
};

export type DependsOnValue = {
  depends_on_value: string;
};

export type InputNext = string | ConditionalNext | DependsOnValue;

export interface Input {
  label: string;
  value: string | null;
  next: InputNext;
  tokenizedValue?: string;
}

export interface Screen {
  screenType: SCREEN_TYPE;
  question: string;
  tip?: string;
  inputs: Array<Input>;
  back: string | null;
  theme?: Theme;
  tokens?: Record<string, string>;
}

export interface Questionnaire {
  entry: string;
  screens: {
    [screenId: string]: Screen;
  };
}
