import { getLanguages } from "@/app/api/languages/getLanguages";
import BenefitPanel from "./components/benefit-panel";
import RegistrationForm from "./components/registration-panel";
import { detectUserCountry } from "./lib/geoLocation";
import { getCountries } from "@/app/api/countries/getCountries";

export default async function RegisterPage() {
  const [countriesResponse, languages, detectedCountryCode] = await Promise.all(
    [getCountries(), getLanguages(), detectUserCountry()],
  );

  const countries =
    countriesResponse.success && countriesResponse.data
      ? countriesResponse.data
      : [];

  return (
    <div className="min-h-screen py-16 bg-white text-black flex flex-col lg:flex-row relative overflow-hidden">
      <RegistrationForm
        countries={countries}
        languages={languages}
        detectedCountryCode={detectedCountryCode}
      />
      <BenefitPanel />
    </div>
  );
}
