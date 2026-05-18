"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { useForm } from "react-hook-form";
import z from "zod";
import { ArrowLeft } from "lucide-react";

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

import Link from "next/link";

const DASHBOARD_BASE_URL = process.env.NEXT_PUBLIC_DASHBOARD_BASE_URL;

const redirectToDashboard = (language: string, authkey: string) => {
  window.location.href = `${DASHBOARD_BASE_URL}/${language}/confirm-auth?authkey=${authkey}`;
};

const LoginCard = () => {
  const language = "de";
  const [error, setError] = useState("");

  const loginSchema = z.object({
    emailOrUsername: z
      .string()
      .email("Ungültiges E-Mail-Format")
      .or(z.string().min(3, "Benutzername ist zu kurz")),

    password: z
      .string()
      .min(8, "Passwort muss mindestens 8 Zeichen lang sein"),
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
      setError(
        "Anmeldung fehlgeschlagen, bitte versuche es erneut",
      );
      return;
    }

    const responseForDirect = await postLoginForRedirect();
    const authkey = responseForDirect.data;

    if (authkey) {
      redirectToDashboard(language, authkey);
    } else {
      setError(
        "Login-Weiterleitung fehlgeschlagen, bitte versuche es erneut",
      );
    }
  };

  return (
    <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center bg-white text-[#0B2B1D]">
      <Link
        href="/"
        className="inline-flex items-center text-[#4A4A4A] hover:text-[#0B2B1D] transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Zurück zur Startseite
      </Link>

      <Card className="w-full bg-white border border-[#0B2B1D]/10 shadow-sm text-[#0B2B1D] rounded-[30px]">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-serif text-[#0B2B1D]">
            Anmelden
          </CardTitle>

          <CardDescription className="text-[#4A4A4A]">
            Willkommen zurück bei Evergreen
          </CardDescription>
        </CardHeader>

        <CardContent>
          {error && (
            <div className="p-3 mb-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="emailOrUsername"
                className="text-[#0B2B1D]"
              >
                E-Mail oder Benutzername
              </Label>

              <Input
                id="emailOrUsername"
                type="text"
                {...register("emailOrUsername")}
                placeholder="E-Mail-Adresse eingeben"
                disabled={isSubmitting}
                className="border-[#0B2B1D]/20 text-[#0B2B1D] placeholder:text-[#4A4A4A]/60 focus:border-[#0B2B1D] focus:ring-[#0B2B1D]/20 rounded-xl"
              />

              {errors.emailOrUsername && (
                <p className="text-red-500 text-sm">
                  {errors.emailOrUsername.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#0B2B1D]">
                Passwort
              </Label>

              <Input
                id="password"
                type="password"
                {...register("password")}
                placeholder="Passwort eingeben"
                disabled={isSubmitting}
                className="border-[#0B2B1D]/20 text-[#0B2B1D] placeholder:text-[#4A4A4A]/60 focus:border-[#0B2B1D] focus:ring-[#0B2B1D]/20 rounded-xl"
              />

              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FF931E] hover:bg-[#e6841a] text-[#0B2B1D] font-bold py-3 rounded-full transition-all shadow-sm"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#0B2B1D] mr-2"></div>
                  Anmeldung läuft...
                </div>
              ) : (
                "Anmelden"
              )}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="text-center flex flex-col">
          <p className="text-[#4A4A4A]">
            Noch kein Konto?{" "}
            <Link
              href="/register"
              className="text-[#B36B2F] hover:text-[#8a5224] hover:underline font-semibold transition-colors"
            >
              Jetzt registrieren
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginCard;