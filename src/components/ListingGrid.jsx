import { Star, MapPin, IndianRupee, Play } from "lucide-react";

const sampleListings = [
  {
    id: 1,
    title: "Acoustic Duo for Cafes & Weddings",
    location: "Mumbai",
    price: "₹15k–₹25k",
    rating: 4.9,
    media: "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    tags: ["Acoustic", "Pop", "English"],
  },
  {
    id: 2,
    title: "Bollywood Covers Band",
    location: "Delhi NCR",
    price: "₹25k–₹40k",
    rating: 4.8,
    media: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    tags: ["Bollywood", "Hindi", "Dance"],
  },
  {
    id: 3,
    title: "Techno DJ for Clubs & Private Parties",
    location: "Bengaluru",
    price: "₹20k–₹35k",
    rating: 4.7,
    media: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    tags: ["EDM", "Techno", "Club"],
  },
];

export default function ListingGrid() {
  return (
    <section id="listings" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Musicians & Bands</h2>
          <a href="#" className="text-indigo-600 font-medium hover:underline">
            See all
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleListings.map((item) => (
            <article key={item.id} className="group rounded-xl bg-white border shadow-sm overflow-hidden">
              <div className="relative">
                <img src={item.media} alt={item.title} className="h-48 w-full object-cover" />
                <button className="absolute bottom-3 left-3 inline-flex items-center gap-1 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur">
                  <Play className="h-3 w-3" /> Preview
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold group-hover:text-indigo-600 transition">{item.title}</h3>
                <div className="mt-1 flex items-center gap-3 text-sm text-gray-600">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {item.location}</span>
                  <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 text-yellow-500" /> {item.rating}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1 text-sm font-medium text-indigo-700">
                    <IndianRupee className="h-4 w-4" /> {item.price}
                  </div>
                  <button className="text-sm font-semibold text-white bg-indigo-600 px-3 py-1.5 rounded-md hover:bg-indigo-700">
                    Book
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
