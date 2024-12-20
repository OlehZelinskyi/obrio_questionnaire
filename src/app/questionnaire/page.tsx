import { fetchQuestionnaire } from "@/lib/fetch-questionnaire";
import { redirect } from "next/navigation";
import { Questionnaire } from "../types";

export default async function Home() {
  const data: Questionnaire = await fetchQuestionnaire();

  const entry = data.entry;

  redirect(`/questionnaire/${entry}`);
}
