import { Input, SCREEN_TYPE } from "@/app/types";
import ButtonInput from "./button-input";
import MultipleAnswerInput from "./multiple-answer-input";
import OneAnswerInput from "./one-answer-input";

const InputBuilder = ({
  inputs,
  screenType,
  saveAnswer,
}: {
  inputs: Input[];
  screenType: SCREEN_TYPE;
  saveAnswer: (value: unknown) => void;
}) => {
  return {
    [SCREEN_TYPE.ONE_ANSWER]: (
      <OneAnswerInput inputs={inputs} saveAnswer={saveAnswer} />
    ),
    [SCREEN_TYPE.BUTTON]: (
      <ButtonInput inputs={inputs} saveAnswer={saveAnswer} />
    ),
    [SCREEN_TYPE.MULTIPLE_ANSWER]: (
      <MultipleAnswerInput inputs={inputs} saveAnswer={saveAnswer} />
    ),
  }[screenType];
};

export default InputBuilder;
