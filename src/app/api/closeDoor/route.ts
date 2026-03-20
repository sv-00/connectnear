import { getSession, isAllowedEmail } from "@/lib/auth";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isAllowedEmail(session.user.email)) {
    return NextResponse.json({ error: "Access denied" }, { status: 403 });
  }

  try {
    const { status } = await axios.get("https://nfc.connectnear.me/L");
    if (status === 200) {
      return NextResponse.json({ message: "Door Closed" }, { status: 200 });
    }
    return NextResponse.json({ message: "Door Closing Failed" }, { status: 500 });
  } catch {
    return NextResponse.json({ message: "Door Closing Failed" }, { status: 500 });
  }
}
