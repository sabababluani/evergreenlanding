"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Button } from "react-day-picker";
import { useForm } from "react-hook-form";
import z from "zod";
import { ArrowLeft } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { LoginCredentials } from "@/app/api/types/auth";
import { postLogin } from "@/app/api/auth/postLogin";
import { postLoginForRedirect } from "@/app/api/auth/postLoginForRedirect";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Link } from "@/i18n/navigation";

const DASHBOARD_BASE_URL = process.env.NEXT_PUBLIC_DASHBOARD_BASE_URL;
const redirectToDashboard = (language: string, authkey: string) => {
  window.location.href = `${DASHBOARD_BASE_URL}/${language}/confirm-auth?authkey=${authkey}`;
};

const LoginCard = () => {
  const t = useTranslations();
  const language = useLocale();
  const [error, setError] = useState("");

  const loginSchema = z.object({
    emailOrUsername: z
      .string()
      .email(t("login.validation.emailInvalid"))
      .or(z.string().min(3, t("login.validation.usernameTooShort"))),
    password: z.string().min(1, t("login.validation.passwordTooShort")),
  });

  type FormData = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get("lang");

    if (langParam) {
      const shortCode = langParam.split("-")[0];
      localStorage.setItem("appLanguage", shortCode);
    }
  }, []);

  const onSubmit = async (data: FormData) => {
    setError("");

    const credentials: LoginCredentials = {
      emailOrUsername: data.emailOrUsername,
      password: data.password,
    };

    const response = await postLogin(credentials);

    if (!response.success) {
      setError(t("login.loginFailed"));
      return;
    }

    const responseForDirect = await postLoginForRedirect();
    const authkey = responseForDirect.data;
    if (authkey) {
      redirectToDashboard(language, authkey);
    } else {
      setError(t("login.redirectFailed"));
    }
  };

  return (
    <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center bg-white text-slate-900">
      <Link
        href={`/`}
        className="inline-flex items-center text-slate-500 hover:text-black transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        {t("login.backToHome")}
      </Link>

      <Card className="w-full bg-white border border-slate-200 shadow-xl text-slate-900 rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-black">
            {t("login.signIn")}
          </CardTitle>

          <CardDescription className="text-slate-500">
            {t("login.welcomeBack")}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {error && (
            <div className="p-3 mb-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email / Username */}
            <div className="space-y-2">
              <Label htmlFor="emailOrUsername" className="text-slate-700">
                {t("login.emailOrUsername")}
              </Label>

              <Input
                id="emailOrUsername"
                type="text"
                {...register("emailOrUsername")}
                placeholder={t("login.placemail")}
                disabled={isSubmitting}
                className="border-slate-300 text-black placeholder:text-slate-400 focus:border-black focus:ring-black"
              />

              {errors.emailOrUsername && (
                <p className="text-red-500 text-sm">
                  {errors.emailOrUsername.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700">
                {t("login.password")}
              </Label>

              <Input
                id="password"
                type="password"
                {...register("password")}
                placeholder={t("login.placepass")}
                disabled={isSubmitting}
                className="border-slate-300 text-black placeholder:text-slate-400 focus:border-black focus:ring-black"
              />

              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black hover:bg-slate-900 text-white font-semibold py-3 rounded-lg transition shadow-md"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {t("login.signingIn")}
                </div>
              ) : (
                t("login.signIn")
              )}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="text-center flex flex-col">
          <p className="text-slate-600">
            {t("login.dontHaveAccount")}{" "}
            <Link
              href={`/register`}
              className="text-black hover:underline font-medium transition-colors"
            >
              {t("login.signUp")}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginCard;
