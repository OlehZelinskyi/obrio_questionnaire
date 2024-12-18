import { Input, SCREEN_TYPE } from "@/app/types";
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
    [SCREEN_TYPE.BUTTON]: <OneAnswerInput inputs={inputs} />,
    [SCREEN_TYPE.MULTIPLE_ANSWER]: <OneAnswerInput inputs={inputs} />,
  }[screenType];
};

export default InputBuilder;
