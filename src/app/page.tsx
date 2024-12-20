import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <Button className="p-0 min-h-10 min-w-64">
        <Link
          className="h-full flex items-center justify-center grow"
          href="/questionnaire"
        >
          Start questionnaire
        </Link>
      </Button>
    </main>
  );
}
