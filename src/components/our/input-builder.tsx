import { Input, SCREEN_TYPE } from "@/app/types";
import ButtonInput from "./button-input";
import MultipleAnswerInput from "./multiple-answer-input";
import OneAnswerInput from "./one-answer-input";

const InputBuilder = ({
  inputs,
  screenType,
}: {
  inputs: Input[];
  screenType: SCREEN_TYPE;
}) => {
  return {
    [SCREEN_TYPE.ONE_ANSWER]: <OneAnswerInput inputs={inputs} />,
    [SCREEN_TYPE.BUTTON]: <ButtonInput inputs={inputs} />,
    [SCREEN_TYPE.MULTIPLE_ANSWER]: <MultipleAnswerInput inputs={inputs} />,
  }[screenType];
};

export default InputBuilder;
