"use server";

import { cookies } from "next/headers";

export const deleteSession = async () => {
  const cookieStore = await cookies();

  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
  cookieStore.delete("session");
  cookieStore.delete("rememberMe");
};

export const createSession = async (
  accessToken: string,
  refreshToken: string,
  userData?: any
) => {
  const cookieStore = await cookies();

  const sessionData = {
    token: accessToken,
    refreshToken: refreshToken,
    user: userData,
    createdAt: new Date().toISOString(),
  };

  cookieStore.set("session", JSON.stringify(sessionData), { 
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  cookieStore.set("accessToken", accessToken, { 
    maxAge: 60 * 15,
    path: "/",
  });

  cookieStore.set("refreshToken", refreshToken, { 
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
};

