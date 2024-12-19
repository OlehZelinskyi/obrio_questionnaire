import { Input, SCREEN_TYPE } from "@/app/types";
import ButtonInput from "./button-input";
import MultipleAnswerInput from "./multiple-answer-input";
import OneAnswerInput from "./one-answer-input";

const InputBuilder = ({
  inputs,
  screenType,
  saveAnswer,
  getSavedValue,
}: {
  inputs: Input[];
  screenType: SCREEN_TYPE;
  saveAnswer: (value: unknown) => void;
  getSavedValue: () => unknown;
}) => {
  return {
    [SCREEN_TYPE.ONE_ANSWER]: (
      <OneAnswerInput
        inputs={inputs}
        saveAnswer={saveAnswer}
        getSavedValue={getSavedValue}
      />
    ),
    [SCREEN_TYPE.BUTTON]: (
      <ButtonInput inputs={inputs} saveAnswer={saveAnswer} />
    ),
    [SCREEN_TYPE.MULTIPLE_ANSWER]: (
      <MultipleAnswerInput
        inputs={inputs}
        saveAnswer={saveAnswer}
        getSavedValue={getSavedValue as () => unknown[] | undefined}
      />
    ),
  }[screenType];
};

export default InputBuilder;
