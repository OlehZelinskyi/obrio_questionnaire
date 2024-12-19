import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <Button>
        <Link href="/questionnaire">Start questionnaire</Link>
      </Button>
    </main>
  );
}
