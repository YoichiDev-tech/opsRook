import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "OpsRook-VI is a fictional portfolio project and does not accept demo requests." },
    { status: 410 }
  );
}
