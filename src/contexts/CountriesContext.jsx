import React, { createContext, useState } from "react";

export const CountriesContext = createContext();

function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const filteredCountries = countries.filter((i) => {
    return i.name.common.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <CountriesContext.Provider
      value={{
        countries,
        setCountries,
        loading,
        setLoading,
        error,
        setError,
        search,
        setSearch,
        filteredCountries,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}
export default CountriesProvider;
