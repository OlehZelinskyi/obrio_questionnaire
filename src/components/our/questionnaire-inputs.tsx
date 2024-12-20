"use client";

import { addAnswer } from "@/app/redux/slices/questionnaire";
import { RootState } from "@/app/redux/store";
import { Input, SCREEN_TYPE } from "@/app/types";
import { useDispatch, useSelector } from "react-redux";
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
  const answers = useSelector((state: RootState) => state.answers);

  const saveAnswer = (value: unknown) => {
    dispatch(addAnswer({ id: screenId, value, question }));
  };

  const getSavedValue = () => {
    return answers[screenId]?.value;
  };

  return (
    <InputBuilder
      inputs={inputs}
      screenType={screenType}
      saveAnswer={saveAnswer}
      getSavedValue={getSavedValue}
    />
  );
};

export default QuestionnaireInputs;
