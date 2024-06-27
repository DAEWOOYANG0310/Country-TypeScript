import axios from "axios";
import { Country } from "../type/CountryType";

export const fetchCountry = async (): Promise<Country[]> => {
  const res = await axios.get("https://restcountries.com/v3.1/all");

  return res.data;
};
