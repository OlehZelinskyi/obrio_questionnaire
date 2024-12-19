"use client";

import { addAnswer } from "@/app/redux/slices/questionnaire";
import { Input, SCREEN_TYPE } from "@/app/types";
import { useDispatch } from "react-redux";
import InputBuilder from "./input-builder";

const QuestionnaireInputs = ({
  inputs,
  screenType,
  screenId,
  question,
}: {
  inputs: Input[];
  screenType: SCREEN_TYPE;
  screenId: string;
  question: string;
}) => {
  const dispatch = useDispatch();

  const saveAnswer = (value: unknown) => {
    dispatch(addAnswer({ id: screenId, value, question }));
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
