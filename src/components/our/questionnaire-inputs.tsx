"use client";

import { addAnswer } from "@/app/redux/slices/questionnaire";
import { store } from "@/app/redux/store";
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

  const getSavedValue = () => {
    const answer = store.getState().answers[screenId];

    return answer?.value;
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
