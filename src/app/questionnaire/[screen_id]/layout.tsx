import { Questionnaire } from "@/app/types";

import Header from "@/components/our/header";
import { fetchQuestionnaire } from "@/lib/fetch-questionnaire";
import { cn } from "@/lib/utils";

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ screen_id: string }>;
}>) {
  const screenId = (await params).screen_id;

  const questionnaireJSON: Questionnaire = await fetchQuestionnaire();

  const data = questionnaireJSON.screens[screenId];

  return (
    <main
      className={cn(
        data.theme === "dark"
          ? "bg-night text-background tracking-tight"
          : "bg-[#FFF0F0]",
        "w-full min-h-full"
      )}
    >
      <article className="mx-auto px-2 container">
        <Header
          theme={data.theme}
          back={data.back && `/questionnaire/${data.back}`}
          screenId={screenId}
        />
        <section className="max-w-[360px] mx-auto flex flex-col items-center p-5 text-center">
          {children}
        </section>
      </article>
    </main>
  );
}
