"use client";

import { addAnswer } from "@/app/redux/slices/questionnaire";
import { Input, SCREEN_TYPE } from "@/app/types";
import { useDispatch } from "react-redux";
import InputBuilder from "./input-builder";

const QuestionnaireInputs = ({
  inputs,
  screenType,
  screenId,
}: {
  inputs: Input[];
  screenType: SCREEN_TYPE;
  screenId: string;
}) => {
  const dispatch = useDispatch();

  const saveAnswer = (value: unknown) => {
    dispatch(addAnswer({ key: screenId, value }));
  };

  return (
    <InputBuilder
      inputs={inputs}
      screenType={screenType}
      saveAnswer={saveAnswer}
    />
  );
};

export default QuestionnaireInputs;
