import fs from "fs";
import path from "path";

import { Questionnaire } from "@/app/types";

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "public", "questionnaire.json");

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const questionnaireJSON: Questionnaire = JSON.parse(fileContent);

  return Object.keys(questionnaireJSON.screens).map((screenId) => ({
    screen_id: screenId,
  }));
}

export default function Screen({ params }: { params: { screen_id: string } }) {
  return <main>Screen {params.screen_id}</main>;
}
