import type { Country } from "@/app/api/types/countries"

interface RestCountriesResponse {
  cca2: string
  name: {
    common: string
  }
}

export async function getCountries(): Promise<{ success: boolean; data: Country[] }> {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,cca2", {
    })

    if (!response.ok) {
      throw new Error("Failed to fetch countries")
    }

    const data: RestCountriesResponse[] = await response.json()

    const countries: Country[] = data
      .map((country: RestCountriesResponse) => ({
        code: country.cca2,
        name: country.name.common,
      }))
      .sort((a: Country, b: Country) => a.name.localeCompare(b.name))

    return {
      success: true,
      data: countries,
    }
  } catch (error) {
    return {
      success: true,
      data: [
        { code: "US", name: "United States" },
        { code: "GB", name: "United Kingdom" },
        { code: "CA", name: "Canada" },
        { code: "AU", name: "Australia" },
        { code: "DE", name: "Germany" },
        { code: "FR", name: "France" },
        { code: "ES", name: "Spain" },
        { code: "IT", name: "Italy" },
      ],
    }
  }
}
