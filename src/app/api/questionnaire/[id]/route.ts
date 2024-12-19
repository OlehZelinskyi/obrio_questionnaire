import { Questionnaire } from "@/app/types";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const filePath = path.join(process.cwd(), "public", "questionnaire.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const jsonData: Questionnaire = JSON.parse(fileContent);

  const item = jsonData.screens[params.id];

  if (!item) return NextResponse.json({});

  return NextResponse.json(item);
}
