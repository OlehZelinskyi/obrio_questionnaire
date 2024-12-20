import { Questionnaire, Screen } from "@/app/types";
import ScreenContent from "@/components/our/screen-content";
import { fetchQuestionnaire } from "@/lib/fetch-questionnaire";

export async function generateStaticParams() {
  const questionnaireJSON: Questionnaire = await fetchQuestionnaire();

  return Object.keys(questionnaireJSON.screens).map((screenId) => ({
    screen_id: screenId,
  }));
}

export default async function ScreenPage({
  params,
}: {
  params: Promise<{ screen_id: string }>;
}) {
  const screenId = (await params).screen_id;
  const questionnaireJSON: Questionnaire = await fetchQuestionnaire();

  const data: Screen = questionnaireJSON.screens[screenId];

  return <ScreenContent id={screenId} screen={data} />;
}
