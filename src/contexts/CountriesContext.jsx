import React, { createContext, useState } from "react";

export const CountriesContext = createContext();

function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const filteredCountries = countries.filter((i) => {
    return (
      i.name.common.toLowerCase().includes(search.toLowerCase()) &&
      i.region.includes(filter)
    );
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
        filter,
        setFilter,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}
export default CountriesProvider;
