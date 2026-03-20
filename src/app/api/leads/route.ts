import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { phone } = await req.json();

    if (!phone || typeof phone !== "string" || phone.length < 10) {
      return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
    }

    const cleaned = phone.replace(/\D/g, "");

    await db.lead.create({
      data: { phone: cleaned },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead creation failed:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
