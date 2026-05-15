"use client";

import { parseISO, format } from "date-fns";
import { useState, useEffect } from "react";
import { ArrowLeft, Check, ChevronDown, CalendarDays } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Country } from "@/app/api/types/countries";
import type { Language } from "@/app/api/types/languages";
import { postRegistration } from "@/app/api/auth/postRegistration";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { Button } from "../../components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../components/ui/command";
import { Calendar } from "../../components/ui/calendar";
import { Link, useRouter } from "@/i18n/navigation";

interface RegistrationFormProps {
  countries: Country[];
  languages: Language[];
  detectedCountryCode: string | null;
}

export default function RegistrationForm({
  countries,
  languages,
  detectedCountryCode,
}: RegistrationFormProps) {
  const router = useRouter();
  const t = useTranslations();

  const [error, setError] = useState<string | null>(null);
  const [countrySearch, setCountrySearch] = useState("");
  const [languageSearch, setLanguageSearch] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const registerSchema = z.object({
    firstName: z.string().min(1, t("register.error.firstName-required")),
    lastName: z.string().min(1, t("register.error.lastName-required")),
    email: z.string().email(t("register.error.email-invalid")),
    username: z.string().min(3, t("register.error.username-min")),
    password: z.string().min(8, t("register.error.password-min")),
    phoneNumber: z.string().min(1, t("register.error.phoneNumber-required")),
    telephone: z.string().optional(),
    country: z.string().min(1, t("register.error.country-required")),
    language: z.string().min(1, t("register.error.language-required")),
    address: z.string().min(1, t("register.error.address-required")),
    dateOfBirth: z.string().min(1, t("register.error.dateOfBirth-required")),
  });

  type FormData = z.infer<typeof registerSchema>;

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      phoneNumber: "",
      telephone: "",
      country: "",
      language: "",
      address: "",
      dateOfBirth: "",
    },
  });

  const watchedCountry = watch("country");
  const watchedLanguage = watch("language");
  const watchedDateOfBirth = watch("dateOfBirth");

  useEffect(() => {
    if (detectedCountryCode) {
      const matched = countries.find((c) => c.code === detectedCountryCode);
      if (matched) {
        setValue("country", matched.code);
      }
    }
  }, [detectedCountryCode, countries, setValue]);

  const handleDateSelect = (date: Date | undefined) => {
    setValue("dateOfBirth", date ? format(date, "yyyy-MM-dd") : "");
    setShowDatePicker(false);
  };

  const onSubmit = async (data: FormData) => {
    setError(null);

    if (data.dateOfBirth) {
      const birthDate = parseISO(data.dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      if (age < 18) {
        setError(t("register.error.too-young"));
        return;
      }
    }

    const response = await postRegistration(data);
    if (response?.errors) {
      setError(t("register.error.unknown-error"));
      return;
    }
    router.push("/login");
  };

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      country.code.toLowerCase().includes(countrySearch.toLowerCase()),
  );

  const filteredLanguages = languages.filter(
    (language) =>
      language.name.toLowerCase().includes(languageSearch.toLowerCase()) ||
      language.code.toLowerCase().includes(languageSearch.toLowerCase()),
  );

  const handleCountrySelect = (countryCode: string) => {
    setValue("country", countryCode);
    setCountrySearch("");
    setShowCountryDropdown(false);
  };

  const handleLanguageSelect = (languageCode: string) => {
    setValue("language", languageCode);
    setLanguageSearch("");
    setShowLanguageDropdown(false);
  };

  const selectedCountry = countries.find((c) => c.code === watchedCountry);
  const selectedLanguage = languages.find((l) => l.code === watchedLanguage);
  const dateOfBirthDate = watchedDateOfBirth
    ? parseISO(watchedDateOfBirth)
    : undefined;

  return (
    <div className="flex-1 flex items-center justify-center p-4 sm:p-8 overflow-y-auto relative z-10">
      <Card className="w-full max-w-md bg-white border border-slate-200 shadow-xl text-slate-900 rounded-2xl">
        <CardHeader className="pb-4">
          <Link
            href={`/`}
            className="inline-flex items-center text-slate-500 hover:text-black mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> {t("register.back")}
          </Link>
          <CardTitle className="text-3xl font-bold text-black text-center">
            {t("register.createAccount")}
          </CardTitle>
          <p className="text-slate-500 text-center">{t("register.subtitle")}</p>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="p-3 mb-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-slate-700">
                  {t("register.firstName")}
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  {...register("firstName")}
                  placeholder={t("register.firstName")}
                  disabled={isSubmitting}
                  className="border-slate-300 text-black placeholder:text-slate-400 focus:border-black focus:ring-black"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-slate-700">
                  {t("register.lastName")}
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  {...register("lastName")}
                  placeholder={t("register.lastName")}
                  disabled={isSubmitting}
                  className="border-slate-300 text-black placeholder:text-slate-400 focus:border-black focus:ring-black"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700">
                {t("register.email")}
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder={t("register.email")}
                disabled={isSubmitting}
                className="border-slate-300 text-black placeholder:text-slate-400 focus:border-black focus:ring-black"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="username" className="text-slate-700">
                {t("register.username")}
              </Label>
              <Input
                id="username"
                type="text"
                {...register("username")}
                placeholder={t("register.username")}
                disabled={isSubmitting}
                className="border-slate-300 text-black placeholder:text-slate-400 focus:border-black focus:ring-black"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700">
                {t("register.password")}
              </Label>
              <Input
                id="password"
                type="password"
                {...register("password")}
                placeholder={t("register.password")}
                disabled={isSubmitting}
                className="border-slate-300 text-black placeholder:text-slate-400 focus:border-black focus:ring-black"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-slate-700">
                {t("register.phoneNumber")}
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                {...register("phoneNumber")}
                placeholder={t("register.phoneNumber")}
                disabled={isSubmitting}
                className="border-slate-300 text-black placeholder:text-slate-400 focus:border-black focus:ring-black"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="country" className="text-slate-700">
                {t("register.country")}
              </Label>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <Popover
                    open={showCountryDropdown}
                    onOpenChange={setShowCountryDropdown}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={showCountryDropdown}
                        className="w-full justify-between bg-white border-slate-300 text-slate-900 hover:bg-slate-50 focus:border-black"
                        disabled={isSubmitting}
                      >
                        {selectedCountry ? (
                          selectedCountry.name
                        ) : (
                          <span className="text-slate-400">
                            {t("register.selectCountry")}
                          </span>
                        )}
                        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-(--radix-popover-trigger-width) p-0 bg-white border-slate-200 text-slate-900">
                      <Command className="bg-white text-slate-900">
                        <CommandInput
                          placeholder={t("register.searchCountries")}
                          value={countrySearch}
                          onValueChange={setCountrySearch}
                          className="border-slate-200 text-black placeholder:text-slate-400"
                        />
                        <CommandList className="max-h-60 overflow-y-auto">
                          <CommandEmpty className="text-slate-500">
                            {t("register.selectCountry")}
                          </CommandEmpty>
                          <CommandGroup>
                            {filteredCountries.map((country) => (
                              <CommandItem
                                key={country.code}
                                value={country.name}
                                onSelect={() =>
                                  handleCountrySelect(country.code)
                                }
                                className="cursor-pointer hover:bg-slate-100 text-slate-900 data-[selected=true]:bg-slate-100"
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    field.value === country.code
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                                {country.name}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                )}
              />
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="language" className="text-slate-700">
                {t("register.language")}
              </Label>
              <Controller
                name="language"
                control={control}
                render={({ field }) => (
                  <Popover
                    open={showLanguageDropdown}
                    onOpenChange={setShowLanguageDropdown}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={showLanguageDropdown}
                        className="w-full justify-between bg-white border-slate-300 text-slate-900 hover:bg-slate-50 focus:border-black"
                        disabled={isSubmitting}
                      >
                        <span
                          className={
                            selectedLanguage
                              ? "text-slate-900"
                              : "text-slate-400"
                          }
                        >
                          {selectedLanguage
                            ? selectedLanguage.name
                            : t("register.selectLanguage")}
                        </span>
                        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-(--radix-popover-trigger-width) p-0 bg-white border-slate-200 text-slate-900">
                      <Command className="bg-white text-slate-900">
                        <CommandInput
                          placeholder="Search languages..."
                          value={languageSearch}
                          onValueChange={setLanguageSearch}
                          className="border-slate-200 text-black placeholder:text-slate-400"
                        />
                        <CommandList className="max-h-60 overflow-y-auto">
                          <CommandEmpty className="text-slate-500">
                            No language found.
                          </CommandEmpty>
                          <CommandGroup>
                            {filteredLanguages
                              .sort((a, b) => {
                                const priorityOrder = ["en", "de"];
                                const indexA = priorityOrder.indexOf(a.code);
                                const indexB = priorityOrder.indexOf(b.code);
                                if (indexA !== -1 || indexB !== -1) {
                                  return (
                                    (indexA === -1
                                      ? Number.POSITIVE_INFINITY
                                      : indexA) -
                                    (indexB === -1
                                      ? Number.POSITIVE_INFINITY
                                      : indexB)
                                  );
                                }
                                return a.name.localeCompare(b.name);
                              })
                              .map((language) => (
                                <CommandItem
                                  key={language.code}
                                  value={language.name}
                                  onSelect={() =>
                                    handleLanguageSelect(language.code)
                                  }
                                  className="cursor-pointer text-slate-900 hover:bg-slate-100 data-[selected=true]:bg-slate-100"
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      field.value === language.code
                                        ? "opacity-100"
                                        : "opacity-0",
                                    )}
                                  />
                                  {language.name}
                                </CommandItem>
                              ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                )}
              />
              {errors.language && (
                <p className="text-red-500 text-sm">
                  {errors.language.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="address" className="text-slate-700">
                {t("register.address")}
              </Label>
              <Input
                id="address"
                type="text"
                {...register("address")}
                placeholder={t("register.address")}
                disabled={isSubmitting}
                className="border-slate-300 text-black placeholder:text-slate-400 focus:border-black focus:ring-black"
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth" className="text-slate-700">
                {t("register.dateOfBirth")}
              </Label>
              <Controller
                name="dateOfBirth"
                control={control}
                render={({ field }) => (
                  <Popover
                    open={showDatePicker}
                    onOpenChange={setShowDatePicker}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal bg-white border-slate-300 text-slate-900 hover:bg-slate-50 focus:border-black",
                          !field.value && "text-slate-400",
                        )}
                        disabled={isSubmitting}
                      >
                        <CalendarDays className="mr-2 size-4" />
                        {field.value ? (
                          format(dateOfBirthDate!, "PPP")
                        ) : (
                          <span>{t("register.pickDate")}</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto overflow-hidden p-0 bg-white/80 backdrop-blur-md border-slate-200 shadow-lg"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={dateOfBirthDate}
                        onSelect={handleDateSelect}
                        captionLayout="dropdown"
                        startMonth={new Date(1900, 0)}
                        endMonth={new Date(new Date().getFullYear(), 0)}
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
              {errors.dateOfBirth && (
                <p className="text-red-500 text-sm">
                  {errors.dateOfBirth.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black hover:bg-slate-900 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {t("register.loading")}
                </div>
              ) : (
                t("register.submit")
              )}
            </Button>
          </form>

          <p className="text-center text-slate-600 mt-4">
            {t("register.alreadyHaveAccount")}{" "}
            <Link
              href={`/login`}
              className="text-black hover:underline font-medium transition-colors"
            >
              {t("register.signIn")}
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
