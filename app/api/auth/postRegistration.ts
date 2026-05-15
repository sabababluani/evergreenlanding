"use server";

import type { RegisterUserData, RegisterResponse } from "@/app/api/types/auth";
import { apiFetcher } from "../utils";

export const postRegistration = async (userData: RegisterUserData) => {
  const response = await apiFetcher<RegisterResponse>(
    "identity/api/clients/create-client-via-web",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        domain: process.env.DOMAIN_HOST || "",
      },
      body: JSON.stringify(userData),
      noAuth: true,
      fallbackErrorMessages: {
        400: "Invalid registration data provided",
        409: "User with this email or username already exists",
        500: "Registration service temporarily unavailable",
      },
    },
  );

  return response;
};
