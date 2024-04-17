import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("https://zerodue-backend.onrender.com");
  const json = await response.json();
  console.log(json);
  return NextResponse.json(json);
}
