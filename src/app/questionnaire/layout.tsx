import SaveSchemaService from "@/components/our/save-schema-service";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SaveSchemaService />
      {children}
    </>
  );
}
