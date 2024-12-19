"use client";

import { Screen } from "@/app/types";
import { getTokenReplacements, replaceTokens } from "@/lib/utils";
import { useEffect, useState } from "react";
import QuestionnaireInputs from "./questionnaire-inputs";

const ScreenContent = ({ screen, id }: { screen: Screen; id: string }) => {
  const [formattedQuestion, setFormattedQuestion] = useState(screen.question);

  useEffect(() => {
    const replacements = getTokenReplacements(screen);

    setFormattedQuestion(replaceTokens(screen.question, replacements));
  }, [screen]);

  return (
    <>
      <h1 className="text-2xl leading-7 font-bold mb-5">{formattedQuestion}</h1>
      {Boolean(screen.tip) && (
        <p className="text-sm leading-6 font-normal mb-10">{screen.tip}</p>
      )}
      <QuestionnaireInputs
        inputs={screen.inputs}
        screenType={screen.screenType}
        screenId={id}
        question={formattedQuestion}
      />
    </>
  );
};

export default ScreenContent;
