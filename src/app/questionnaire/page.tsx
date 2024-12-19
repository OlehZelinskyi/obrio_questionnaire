import { redirect } from "next/navigation";
import { Questionnaire } from "../types";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/questionnaire`
  );
  const data: Questionnaire = await response.json();

  const entry = data.entry;

  redirect(`/questionnaire/${entry}`);
}
