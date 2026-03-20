export { getSession } from "./session";
export type { Session } from "./session";
export { setAuthCookies, getAuthCookies, clearAuthCookies } from "./cookies";
export { generateTokenPair, verifyAccessToken, verifyRefreshToken } from "./jwt";
export type { TokenPayload } from "./jwt";

const ALLOWED_EMAILS = [
  "v101developer@gmail.com",
  "gokulkannant99@gmail.com",
  "nikolateslat800@gmail.com",
  "vismayadinesh2@gmail.com",
];

export function isAllowedEmail(email: string): boolean {
  return ALLOWED_EMAILS.includes(email.toLowerCase());
}
