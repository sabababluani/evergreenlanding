"use client";

import { parseISO, format } from "date-fns";
import { useState, useEffect } from "react";
import { ArrowLeft, Check, ChevronDown, CalendarDays } from "lucide-react";

import { cn } from "@/app/lib/utils";
import type { Country } from "@/app/api/types/countries";
import type { Language } from "@/app/api/types/languages";
import { postRegistration } from "@/app/api/auth/postRegistration";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { useRouter } from "next/navigation";
import Link from "next/link";

interface RegistrationFormProps {
  countries: Country[];
  languages: Language[];
  detectedCountryCode: string | null;
}

const registerSchema = z.object({
  firstName: z.string().min(1, "Vorname ist erforderlich"),
  lastName: z.string().min(1, "Nachname ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  username: z.string().min(3, "Benutzername muss mindestens 3 Zeichen lang sein"),
  password: z.string().min(8, "Passwort muss mindestens 8 Zeichen lang sein"),
  phoneNumber: z.string().min(1, "Telefonnummer ist erforderlich"),
  telephone: z.string().optional(),
  country: z.string().min(1, "Land ist erforderlich"),
  language: z.string().min(1, "Sprache ist erforderlich"),
  address: z.string().min(1, "Adresse ist erforderlich"),
  dateOfBirth: z.string().min(1, "Geburtsdatum ist erforderlich"),
});

type FormData = z.infer<typeof registerSchema>;

const labelClass = "text-[#0B2B1D]";
const inputClass =
  "border-[#0B2B1D]/20 text-[#0B2B1D] placeholder:text-[#4A4A4A]/60 focus:border-[#0B2B1D] focus:ring-[#0B2B1D]/20 rounded-xl";
const outlineBtnClass =
  "w-full justify-between bg-white border-[#0B2B1D]/20 text-[#0B2B1D] hover:bg-[#FCF8ED] focus:border-[#0B2B1D] rounded-xl";
const popoverContentClass =
  "w-(--radix-popover-trigger-width) p-0 bg-white border-[#0B2B1D]/10 text-[#0B2B1D]";
const commandItemClass =
  "cursor-pointer hover:bg-[#FCF8ED] text-[#0B2B1D] data-[selected=true]:bg-[#FCF8ED]";

export default function RegistrationForm({
  countries,
  languages,
  detectedCountryCode,
}: RegistrationFormProps) {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [countrySearch, setCountrySearch] = useState("");
  const [languageSearch, setLanguageSearch] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

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
      if (matched) setValue("country", matched.code);
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
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
      if (age < 18) {
        setError("Sie müssen mindestens 18 Jahre alt sein, um sich zu registrieren.");
        return;
      }
    }

    const response = await postRegistration(data);
    if (response?.errors) {
      setError("Bei der Registrierung ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
      return;
    }
    router.push("/login");
  };

  const filteredCountries = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.code.toLowerCase().includes(countrySearch.toLowerCase()),
  );

  const filteredLanguages = languages.filter(
    (l) =>
      l.name.toLowerCase().includes(languageSearch.toLowerCase()) ||
      l.code.toLowerCase().includes(languageSearch.toLowerCase()),
  );

  const handleCountrySelect = (code: string) => {
    setValue("country", code);
    setCountrySearch("");
    setShowCountryDropdown(false);
  };

  const handleLanguageSelect = (code: string) => {
    setValue("language", code);
    setLanguageSearch("");
    setShowLanguageDropdown(false);
  };

  const selectedCountry = countries.find((c) => c.code === watchedCountry);
  const selectedLanguage = languages.find((l) => l.code === watchedLanguage);
  const dateOfBirthDate = watchedDateOfBirth ? parseISO(watchedDateOfBirth) : undefined;

  return (
    <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center bg-white overflow-y-auto relative z-10">
      <Card className="w-full max-w-xl mx-auto bg-white border border-[#0B2B1D]/10 shadow-sm text-[#0B2B1D] rounded-[30px]">
        <CardHeader className="pb-4">
          <Link
            href="/"
            className="inline-flex items-center text-[#4A4A4A] hover:text-[#0B2B1D] mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Zurück zur Startseite
          </Link>
          <CardTitle className="text-3xl font-serif text-[#0B2B1D] text-center">
            Konto erstellen
          </CardTitle>
          <p className="text-[#4A4A4A] text-center">
            Starte noch heute mit Evergreen
          </p>
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
                <Label htmlFor="firstName" className={labelClass}>Vorname</Label>
                <Input id="firstName" type="text" {...register("firstName")} placeholder="Geben Sie Ihren Vornamen ein" disabled={isSubmitting} className={inputClass} />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className={labelClass}>Nachname</Label>
                <Input id="lastName" type="text" {...register("lastName")} placeholder="Geben Sie Ihren Nachnamen ein" disabled={isSubmitting} className={inputClass} />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className={labelClass}>E-Mail</Label>
              <Input id="email" type="email" {...register("email")} placeholder="Geben Sie Ihre E-Mail ein" disabled={isSubmitting} className={inputClass} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="username" className={labelClass}>Benutzername</Label>
              <Input id="username" type="text" {...register("username")} placeholder="Wählen Sie einen Benutzernamen" disabled={isSubmitting} className={inputClass} />
              {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className={labelClass}>Passwort</Label>
              <Input id="password" type="password" {...register("password")} placeholder="Erstellen Sie ein Passwort" disabled={isSubmitting} className={inputClass} />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className={labelClass}>Telefonnummer</Label>
              <Input id="phoneNumber" type="tel" {...register("phoneNumber")} placeholder="Geben Sie Ihre Telefonnummer ein" disabled={isSubmitting} className={inputClass} />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="country" className={labelClass}>Land</Label>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <Popover open={showCountryDropdown} onOpenChange={setShowCountryDropdown}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" role="combobox" aria-expanded={showCountryDropdown} className={outlineBtnClass} disabled={isSubmitting}>
                        {selectedCountry ? selectedCountry.name : <span className="text-[#4A4A4A]/60">Wählen Sie Ihr Land</span>}
                        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className={popoverContentClass}>
                      <Command className="bg-white text-[#0B2B1D]">
                        <CommandInput placeholder="Länder suchen..." value={countrySearch} onValueChange={setCountrySearch} className="border-[#0B2B1D]/10 text-[#0B2B1D] placeholder:text-[#4A4A4A]/60" />
                        <CommandList className="max-h-60 overflow-y-auto">
                          <CommandEmpty className="text-[#4A4A4A]">Kein Land gefunden.</CommandEmpty>
                          <CommandGroup>
                            {filteredCountries.map((country) => (
                              <CommandItem key={country.code} value={country.name} onSelect={() => handleCountrySelect(country.code)} className={commandItemClass}>
                                <Check className={cn("mr-2 h-4 w-4", field.value === country.code ? "opacity-100" : "opacity-0")} />
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
              {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="language" className={labelClass}>Sprache</Label>
              <Controller
                name="language"
                control={control}
                render={({ field }) => (
                  <Popover open={showLanguageDropdown} onOpenChange={setShowLanguageDropdown}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" role="combobox" aria-expanded={showLanguageDropdown} className={outlineBtnClass} disabled={isSubmitting}>
                        <span className={selectedLanguage ? "text-[#0B2B1D]" : "text-[#4A4A4A]/60"}>
                          {selectedLanguage ? selectedLanguage.name : "Wählen Sie Ihre Sprache"}
                        </span>
                        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className={popoverContentClass}>
                      <Command className="bg-white text-[#0B2B1D]">
                        <CommandInput placeholder="Sprachen suchen..." value={languageSearch} onValueChange={setLanguageSearch} className="border-[#0B2B1D]/10 text-[#0B2B1D] placeholder:text-[#4A4A4A]/60" />
                        <CommandList className="max-h-60 overflow-y-auto">
                          <CommandEmpty className="text-[#4A4A4A]">Keine Sprache gefunden.</CommandEmpty>
                          <CommandGroup>
                            {filteredLanguages
                              .sort((a, b) => {
                                const order = ["en", "de"];
                                const iA = order.indexOf(a.code);
                                const iB = order.indexOf(b.code);
                                if (iA !== -1 || iB !== -1) {
                                  return (iA === -1 ? Infinity : iA) - (iB === -1 ? Infinity : iB);
                                }
                                return a.name.localeCompare(b.name);
                              })
                              .map((language) => (
                                <CommandItem key={language.code} value={language.name} onSelect={() => handleLanguageSelect(language.code)} className={commandItemClass}>
                                  <Check className={cn("mr-2 h-4 w-4", field.value === language.code ? "opacity-100" : "opacity-0")} />
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
              {errors.language && <p className="text-red-500 text-sm">{errors.language.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="address" className={labelClass}>Adresse</Label>
              <Input id="address" type="text" {...register("address")} placeholder="Adresse eingeben" disabled={isSubmitting} className={inputClass} />
              {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth" className={labelClass}>Geburtsdatum</Label>
              <Controller
                name="dateOfBirth"
                control={control}
                render={({ field }) => (
                  <Popover open={showDatePicker} onOpenChange={setShowDatePicker}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn(outlineBtnClass, "justify-start", !field.value && "text-[#4A4A4A]/60")} disabled={isSubmitting}>
                        <CalendarDays className="mr-2 size-4" />
                        {field.value ? format(dateOfBirthDate!, "PPP") : <span>Datum auswählen</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0 bg-white border-[#0B2B1D]/10 shadow-lg" align="start">
                      <Calendar mode="single" selected={dateOfBirthDate} onSelect={handleDateSelect} captionLayout="dropdown" startMonth={new Date(1900, 0)} endMonth={new Date(new Date().getFullYear(), 0)} />
                    </PopoverContent>
                  </Popover>
                )}
              />
              {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>}
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full bg-[#FF931E] hover:bg-[#e6841a] text-[#0B2B1D] font-bold py-3 rounded-full transition-all shadow-sm">
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#0B2B1D] mr-2"></div>
                  Konto wird erstellt...
                </div>
              ) : "Konto erstellen"}
            </Button>
          </form>
          <p className="text-center text-[#4A4A4A] mt-4">
            Haben Sie bereits ein Konto?{" "}
            <Link
              href="/login"
              className="text-[#B36B2F] hover:text-[#8a5224] hover:underline font-semibold transition-colors"
            >
              Anmelden
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}