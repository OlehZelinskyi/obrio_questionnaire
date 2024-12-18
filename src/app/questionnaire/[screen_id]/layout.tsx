import { Questionnaire } from "@/app/types";
import Header from "@/components/our/header";
import { cn } from "@/lib/utils";

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { screen_id: string };
}>) {
  const screenId = (await params).screen_id;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/questionnaire`
  );
  const data: Questionnaire = await response.json();
  const screenData = data.screens[screenId];

  return (
    <main
      className={cn(
        screenData.theme === "dark" ? "bg-night text-white" : "bg-pink-100",
        "w-full h-full"
      )}
    >
      <article className="h-full mx-auto px-2 container">
        <Header theme={screenData.theme} />
        <section className="max-w-[360px] mx-auto">{children}</section>
      </article>
    </main>
  );
}
