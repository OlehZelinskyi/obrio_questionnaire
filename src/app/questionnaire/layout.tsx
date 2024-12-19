import SaveSchemaService from "@/components/our/save-schema-service";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/questionnaire`
  );
  const data = await response.json();

  return (
    <>
      <SaveSchemaService data={data} />
      {children}
    </>
  );
}
