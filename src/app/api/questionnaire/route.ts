import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "questionnaire.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const jsonData = JSON.parse(fileContent);

  if (!jsonData) return NextResponse.json({});

  return NextResponse.json(jsonData);
}
