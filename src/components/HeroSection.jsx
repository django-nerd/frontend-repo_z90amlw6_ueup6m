import { Music, MapPin, Star, Users, MessageSquare } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-indigo-600 via-violet-600 to-fuchsia-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm backdrop-blur">
              <Music className="h-4 w-4" />
              <span>Introducing JamLink — Book musicians or find your next jam</span>
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              Discover. Book. Jam.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90">
              A marketplace built for live performers. Hire for gigs and parties, or connect with artists nearby for spontaneous collaborations.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur border border-white/10">
                <MapPin className="h-5 w-5" />
                <p className="mt-2 font-semibold">Regional Discovery</p>
                <p className="text-white/80">Find artists around your city and beyond.</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur border border-white/10">
                <Users className="h-5 w-5" />
                <p className="mt-2 font-semibold">Jam Collaborations</p>
                <p className="text-white/80">Post or respond to jam calls in minutes.</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur border border-white/10">
                <Star className="h-5 w-5" />
                <p className="mt-2 font-semibold">Verified Reviews</p>
                <p className="text-white/80">Book confidently with ratings and badges.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#search"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-indigo-700 px-5 py-3 font-semibold shadow hover:shadow-md transition"
              >
                Find Musicians
              </a>
              <a
                href="#listings"
                className="inline-flex items-center gap-2 rounded-lg bg-white/15 text-white px-5 py-3 font-semibold border border-white/20 hover:bg-white/20 transition"
              >
                <MessageSquare className="h-4 w-4" />
                Post a Jam Call
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl bg-white/10 border border-white/10 p-1">
              <div className="rounded-xl overflow-hidden bg-black/40 aspect-[4/3] flex items-center justify-center">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://videos.pexels.com/video-files/1044426/1044426-uhd_2560_1440_30fps.mp4"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="rounded-xl bg-white/10 border border-white/20 backdrop-blur px-4 py-3">
                <p className="text-xs uppercase tracking-wider text-white/70">Popular right now</p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-white/20" />
                  <div>
                    <p className="text-sm font-semibold">Indie Acoustic Trio</p>
                    <p className="text-xs text-white/80">Bengaluru • 4.9 rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
