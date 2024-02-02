"use server";

/**
 * Fetches data for all countries from the REST Countries API.
 * @returns {Promise<{ props: { data: any } }>} The data for all countries.
 */
export async function RestCountriesData() {
  const url = `https://restcountries.com/v3.1/all?fields=name,population,flags,population,region,capital,flag,flags,cca3`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    console.error(error);
  }
}

/**
 * Fetches data for a specific country from the REST Countries API.
 * @param {string} name - The name of the country.
 * @returns {Promise<{ props: { data: any } }>} The data for the specific country.
 */
export async function RestCountryDetails({ name }: { name: string }) {
  const url = `https://restcountries.com/v3.1/alpha/${name}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    console.error(error);
  }
}
