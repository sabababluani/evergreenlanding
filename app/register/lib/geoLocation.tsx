export async function detectUserCountry(): Promise<string | null> {
  try {
    const res = await fetch("https://ipapi.co/json/");
    if (!res.ok) return null;

    const locationData = await res.json();
    return locationData?.country_code || null;
  } catch (error) {
    return null;
  }
}
