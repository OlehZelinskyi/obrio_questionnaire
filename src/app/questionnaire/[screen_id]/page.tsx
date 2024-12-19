import fs from "fs";
import path from "path";

import { Questionnaire, Screen } from "@/app/types";
import ScreenContent from "@/components/our/screen-content";

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

  return <ScreenContent id={screenId} screen={data} />;
}
