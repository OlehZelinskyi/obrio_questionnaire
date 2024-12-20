"use server";

import { Questionnaire } from "@/app/types";
import fs from "fs";
import path from "path";

export const fetchQuestionnaire = async (): Promise<Questionnaire> => {
  const filePath = path.join(process.cwd(), "public", "questionnaire.json");

  const fileContent = await fs.promises.readFile(filePath, "utf-8");

  const questionnaireJSON: Questionnaire = JSON.parse(fileContent);

  return questionnaireJSON;
};
