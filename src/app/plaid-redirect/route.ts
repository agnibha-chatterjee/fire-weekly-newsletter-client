import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  return Response.json({ done: "yes" });
};

export const POST = async (req: NextRequest) => {
  const a = await req.json();
  console.log("I RAN, POST", a);
  return Response.json({ done: "yes" });
};
