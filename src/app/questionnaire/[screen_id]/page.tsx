import fs from "fs";
import path from "path";

import { Questionnaire, Screen } from "@/app/types";
import QuestionnaireInputs from "@/components/our/questionnaire-inputs";

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "public", "questionnaire.json");

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const questionnaireJSON: Questionnaire = JSON.parse(fileContent);

  return Object.keys(questionnaireJSON.screens).map((screenId) => ({
    screen_id: screenId,
  }));
}

export default async function ScreenPage({
  params,
}: {
  params: { screen_id: string };
}) {
  const screenId = (await params).screen_id;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/questionnaire/${screenId}`
  );
  const data: Screen = await response.json();

  return (
    <>
      <h1 className="text-2xl leading-7 font-bold mb-5">{data.question}</h1>
      {Boolean(data.tip) && (
        <p className="text-sm leading-6 font-normal mb-10">{data.tip}</p>
      )}
      <QuestionnaireInputs
        inputs={data.inputs}
        screenType={data.screenType}
        screenId={screenId}
      />
    </>
  );
}
