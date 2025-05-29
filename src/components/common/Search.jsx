import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
const suggestions = [
  "Kakune restau, paris...",
  "Kakunexy delux, rome...",
  "Kakune, new york...",
  "Kikune, Dakar plateau...",
  "restaurant, hotel,  singapore...",
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredSuggestions = suggestions.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleSelectSuggestion = (suggestion) => {
    setQuery(suggestion);
    setShowSuggestions(false);
  };

  const handleCloseSuggestions = () => {
    setShowSuggestions(false);
  };

  return (
    <div className="relative max-w-md mx-auto mt-8">
      <div className="w-auto flex items-center border border-gray-300 rounded-full shadow-sm overflow-hidden">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          className="flex-1 px-3 py-3 outline-none w-full border-r border-gray-300 max-w-xl"
        />
       
        <input
          type="text"
          placeholder="Country..."
          value={query}
          onChange={handleInputChange}
          className="flex-1 px-2 py-3 outline-none border-l border-gray-300  max-w-xl"
        />
        <button
          onClick={handleCloseSuggestions}
          className="p-3 text-center font-bold text-gray-400 hover:text-gray-600 bg-blue-500 text-white w-10 h-10 mr-2 my-1 rounded-full transition-colors duration-200 hover:bg-blue-700"
        >
        <GoSearch />
        </button>
      </div>

      {showSuggestions && query && (
        <div className="absolute left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion, index) => (
              <div
                key={index}
                onClick={() => handleSelectSuggestion(suggestion)}
                className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-100"
              >
                <span role="img" aria-label="icon">
                  🍽
                </span>
                <span>{suggestion}</span>
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;