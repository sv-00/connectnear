import { NextResponse } from "next/server";
import { getAuthCookies, setAuthCookies } from "@/lib/auth/cookies";
import { verifyRefreshToken, generateAccessToken } from "@/lib/auth/jwt";

export async function POST() {
  try {
    const { refreshToken } = await getAuthCookies();

    if (!refreshToken) {
      return NextResponse.json({ error: "No refresh token" }, { status: 401 });
    }

    const payload = verifyRefreshToken(refreshToken);
    if (!payload) {
      return NextResponse.json({ error: "Invalid refresh token" }, { status: 401 });
    }

    const newAccessToken = generateAccessToken({
      id: payload.id,
      email: payload.email || "",
      name: payload.name || "",
      image: payload.image,
    });

    await setAuthCookies(newAccessToken, refreshToken);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Refresh error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
