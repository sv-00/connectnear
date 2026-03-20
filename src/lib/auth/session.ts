import { getAuthCookies } from "./cookies";
import { verifyAccessToken, verifyRefreshToken, type TokenPayload } from "./jwt";

export interface Session {
  user: {
    id: string;
    email: string;
    name: string;
    image?: string;
  };
}

export async function getSession(): Promise<Session | null> {
  const { accessToken, refreshToken } = await getAuthCookies();

  if (accessToken) {
    const payload = verifyAccessToken(accessToken);
    if (payload) return toSession(payload);
  }

  if (refreshToken) {
    const refreshPayload = verifyRefreshToken(refreshToken);
    if (refreshPayload) {
      return toSession({
        id: refreshPayload.id,
        email: refreshPayload.email || "",
        name: refreshPayload.name || "",
        image: refreshPayload.image,
      });
    }
  }

  return null;
}

function toSession(payload: Pick<TokenPayload, "id" | "email" | "name" | "image">): Session {
  return {
    user: {
      id: payload.id,
      email: payload.email,
      name: payload.name,
      image: payload.image,
    },
  };
}
