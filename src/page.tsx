import React, { useState } from "react";
import axios from "axios";

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [responseData, setResponseData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3001/api/search", { query });
      setResponseData(response.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Error fetching search results:", error.message);
      } else {
        console.error("Unexpected error:", error);
      }
      alert("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#4F83F1] via-[#6A9CF3] to-[#4F83F1]">
    <div className="w-full max-w-2xl px-4">
      <div className="bg-black/20 backdrop-blur-xl rounded-lg shadow-2xl p-6">
        <form onSubmit={handleSearch}>
          <div className="flex items-center gap-2">
            <div className="flex-1 flex items-center bg-white/10 rounded-md px-3 py-2">
              <svg
                className="w-4 h-4 text-gray-300"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                className="w-full bg-transparent border-none outline-none px-3 py-1 text-white placeholder-gray-400"
                placeholder="Enter product idea"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 flex items-center justify-center min-w-[100px]"
              disabled={loading}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                "Search"
              )}
            </button>
          </div>
          </form>
          {responseData && (
            <div className="mt-6 bg-white/5 rounded-md p-4 text-gray-300 text-sm">
              <h3 className="text-lg font-semibold text-white">Search Results:</h3>
              <ul className="list-disc pl-5">
                {responseData.results && responseData.results.map((result: string, index: number) => (
                  <li key={index} className="mb-2 text-white">
                    {result.replace(/[#*]/g, "").replace(/\s*,\s*/g, ", ")}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;



