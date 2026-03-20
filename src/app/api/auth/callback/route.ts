import { type NextRequest, NextResponse } from "next/server";
import { generateTokenPair } from "@/lib/auth/jwt";
import { setAuthCookies } from "@/lib/auth/cookies";
import { isAllowedEmail } from "@/lib/auth";
import { validateOAuthState } from "../sign-in/route";

const BASE_URL = process.env.APP_URL || "http://localhost:3010";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    const error = searchParams.get("error");

    if (error) {
      return NextResponse.redirect(`${BASE_URL}/login?error=${encodeURIComponent(error)}`);
    }

    if (!state || !validateOAuthState(state)) {
      return NextResponse.redirect(`${BASE_URL}/login?error=InvalidState`);
    }

    if (!code) {
      return NextResponse.redirect(`${BASE_URL}/login?error=NoCode`);
    }

    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      return NextResponse.redirect(`${BASE_URL}/login?error=OAuthNotConfigured`);
    }

    // Exchange code for Google tokens
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        grant_type: "authorization_code",
        redirect_uri: `${BASE_URL}/api/auth/callback`,
      }),
    });

    if (!tokenResponse.ok) {
      console.error("Token exchange failed:", await tokenResponse.text());
      return NextResponse.redirect(`${BASE_URL}/login?error=TokenExchangeFailed`);
    }

    const tokenData = await tokenResponse.json();

    // Get user info from Google
    const userResponse = await fetch(
      `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${tokenData.access_token}`
    );

    if (!userResponse.ok) {
      return NextResponse.redirect(`${BASE_URL}/login?error=UserInfoFailed`);
    }

    const googleUser = await userResponse.json();

    // Check allowed email whitelist
    if (!googleUser.email || !isAllowedEmail(googleUser.email)) {
      return NextResponse.redirect(`${BASE_URL}/denied`);
    }

    // Generate JWT tokens
    const tokens = generateTokenPair({
      id: googleUser.id,
      email: googleUser.email,
      name: googleUser.name || "",
      image: googleUser.picture,
    });

    await setAuthCookies(tokens.accessToken, tokens.refreshToken);

    return NextResponse.redirect(`${BASE_URL}/`);
  } catch (error) {
    console.error("OAuth callback error:", error);
    return NextResponse.redirect(`${BASE_URL}/login?error=AuthFailed`);
  }
}
