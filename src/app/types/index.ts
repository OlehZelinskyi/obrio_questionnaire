export enum SCREEN_TYPE {
  ONE_ANSWER = "ONE_ANSWER",
  BUTTON = "BUTTON",
  MULTIPLE_ANSWER = "MULTIPLE_ANSWER",
}

export type ConditionalNext = {
  default: string;
  on_depend_condition: string;
};

export type DependencyNext = {
  depends_on_value: string;
};

export type InputNext = string | ConditionalNext | DependencyNext;

export interface Input {
  label: string;
  value: string | null;
  next: InputNext;
}

export interface Screen {
  screenType: SCREEN_TYPE;
  question: string;
  tip?: string;
  inputs: Array<Input>;
  back: string | null;
}

export interface Questionnaire {
  entry: string;
  screens: {
    [screenId: string]: Screen;
  };
}
