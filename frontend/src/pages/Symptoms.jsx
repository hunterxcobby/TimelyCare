import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';

export default function SymptomsPage() {
  const [symptoms, setSymptoms] = useState(['', '', '', '']); // Initialize symptoms state with four empty strings
  const [suggestions, setSuggestions] = useState(Array(4).fill([])); // Initialize suggestions state with an array of empty arrays

  const handleChange = (index, event, { newValue }) => {
    // Update the symptom in the state
    setSymptoms(symptoms.map((symptom, i) => i === index ? newValue : symptom));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(symptoms); // Log the symptoms array when the form is submitted
  };

  const fetchSuggestions = async (index, value) => {
    try {
      const response = await axios.get(`/api/symptoms?q=${value}`);
      const data = response.data;
      setSuggestions(prevSuggestions => {
        const newSuggestions = [...prevSuggestions];
        newSuggestions[index] = data;
        return newSuggestions;
      });
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const getSuggestions = (index, value) => {
    return suggestions[index].filter(suggestion =>
      suggestion.Name.toLowerCase().startsWith(value.trim().toLowerCase())
    );
  };

  const renderSuggestion = (suggestion) => {
    return (
      <div>
        {suggestion.Name}
      </div>
    );
  };

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Symptoms
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Input boxes for symptoms */}
              {symptoms.map((symptom, index) => (
                <div key={index}>
                  <label
                    htmlFor={`symptom-${index}`}
                    className="block text-sm font-medium bg-yellow text-gray-700"
                  >
                    Symptom {index + 1}:
                  </label>
                  <Autosuggest
                    inputProps={{
                      id: `symptom-${index}`,
                      value: symptom,
                      onChange: (event, { newValue }) => handleChange(index, event, { newValue })
                    }}
                    suggestions={getSuggestions(index, symptom)}
                    onSuggestionsFetchRequested={({ value }) => fetchSuggestions(index, value)}
                    onSuggestionsClearRequested={() => setSuggestions(prevSuggestions => {
                      const newSuggestions = [...prevSuggestions];
                      newSuggestions[index] = [];
                      return newSuggestions;
                    })}
                    getSuggestionValue={(suggestion) => suggestion.Name}
                    renderSuggestion={renderSuggestion}
                  />
                </div>
              ))}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-one hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit Symptoms
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
