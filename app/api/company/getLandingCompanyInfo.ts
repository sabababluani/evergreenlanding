"use server";

import { EnvCompanyInfo } from "@/app/api/const/company";
import { LandingCompanyInfo } from "@/app/api/types/company";
import { apiFetcher } from "@/app/api/utils";

const getLandingCompanyInfo = async (): Promise<LandingCompanyInfo> => {
  const response = await apiFetcher<{ data: LandingCompanyInfo }>(
    "api/landing-company-info",
    {
      headers: {
        "X-Secret-Key": process.env.TRANSLATOR_X_SECRET_KEY!,
      },
    },
    process.env.TRANSLATOR_API_URL
  );

  return response.data?.data ?? EnvCompanyInfo;
};

export default getLandingCompanyInfo;
