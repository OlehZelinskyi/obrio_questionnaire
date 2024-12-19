import Results from "@/components/our/results";

export default async function ResultsPage() {
  return (
    <>
      <h1 className="text-2xl leading-7 font-bold mb-5">Results</h1>
      <p className="text-sm leading-6 font-normal mb-10">
        Here are the data, that you have answered in questionnaire:
      </p>
      <Results />
    </>
  );
}
