"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";

const SearchForm: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes realizar la acción que desees con la búsqueda
    console.log("Realizando búsqueda:", searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="w-30 flex items-center">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Buscar..."
        className="w-full  border rounded-full border-gray-900 focus:border-gray-900 hover:border-gray-900 "
      />
      <button type="submit" className="m-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchForm;