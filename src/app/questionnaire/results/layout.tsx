import Header from "@/components/our/header";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={"bg-night text-background tracking-tight w-full min-h-full"}
    >
      <article className="mx-auto px-2 container">
        <Header theme="dark" />
        <section className="max-w-[450px] mx-auto flex flex-col items-center p-5 text-center">
          {children}
        </section>
      </article>
    </main>
  );
}
