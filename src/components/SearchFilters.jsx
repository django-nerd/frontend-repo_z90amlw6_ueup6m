import { useState } from "react";
import { MapPin, Guitar, IndianRupee, Users } from "lucide-react";

export default function SearchFilters({ onSearch }) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("any");
  const [type, setType] = useState("any");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.({ query, location, budget, type });
  };

  return (
    <section id="search" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-5 gap-4 p-4 rounded-xl border shadow-sm"
        >
          <div className="col-span-2 flex items-center gap-2 rounded-lg border px-3 py-2">
            <Guitar className="h-4 w-4 text-gray-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search genre, instrument, or artist"
              className="w-full outline-none"
            />
          </div>
          <div className="flex items-center gap-2 rounded-lg border px-3 py-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City or region"
              className="w-full outline-none"
            />
          </div>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="rounded-lg border px-3 py-2"
          >
            <option value="any">Any budget</option>
            <option value="under10k">Under ₹10k</option>
            <option value="10-25k">₹10k–₹25k</option>
            <option value="25-50k">₹25k–₹50k</option>
            <option value="50k+">₹50k+</option>
          </select>
          <div className="flex items-center gap-2 rounded-lg border px-3 py-2">
            <Users className="h-4 w-4 text-gray-500" />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full outline-none"
            >
              <option value="any">Solo/Duo/Band</option>
              <option value="solo">Solo</option>
              <option value="duo">Duo</option>
              <option value="band">Full Band</option>
            </select>
          </div>

          <button
            type="submit"
            className="md:col-span-5 bg-indigo-600 text-white font-semibold rounded-lg py-2 hover:bg-indigo-700"
          >
            Search
          </button>
        </form>

        <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
          <IndianRupee className="h-3 w-3" />
          <span>Posting fee: ₹50 per listing to keep quality high</span>
        </div>
      </div>
    </section>
  );
}
