import { Screen } from "@/app/types";
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
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/questionnaire/${screenId}`
  );
  const data: Screen = await response.json();

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
        />
        <section className="max-w-[360px] mx-auto flex flex-col items-center p-5 text-center">
          {children}
        </section>
      </article>
    </main>
  );
}
