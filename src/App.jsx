import { useState } from "react";
import HeroSection from "./components/HeroSection";
import SearchFilters from "./components/SearchFilters";
import ListingGrid from "./components/ListingGrid";
import CTASection from "./components/CTASection";

function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-extrabold text-xl tracking-tight">
          <span className="text-indigo-600">Jam</span>
          <span className="text-gray-900">Link</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#search" className="text-gray-600 hover:text-gray-900">Discover</a>
          <a href="#listings" className="text-gray-600 hover:text-gray-900">Top Picks</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">For Artists</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900">Sign in</button>
          <button className="text-sm font-semibold bg-indigo-600 text-white px-3 py-1.5 rounded-md hover:bg-indigo-700">Create Listing</button>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  const [filters, setFilters] = useState(null);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <HeroSection />
      <SearchFilters onSearch={setFilters} />
      <ListingGrid key={JSON.stringify(filters)} />
      <CTASection />
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} JamLink — the marketplace for musicians and live performers.
          </p>
        </div>
      </footer>
    </div>
  );
}
