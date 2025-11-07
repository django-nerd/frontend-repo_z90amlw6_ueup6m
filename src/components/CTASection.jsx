import { ShieldCheck, CreditCard, MessageSquare } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border p-6 shadow-sm">
          <ShieldCheck className="h-6 w-6 text-emerald-600" />
          <h3 className="mt-3 font-semibold text-lg">Verified & Secure</h3>
          <p className="mt-1 text-gray-600">Ratings, ID checks, and dispute resolution keep the community safe.</p>
        </div>
        <div className="rounded-2xl border p-6 shadow-sm">
          <CreditCard className="h-6 w-6 text-indigo-600" />
          <h3 className="mt-3 font-semibold text-lg">Easy Payments</h3>
          <p className="mt-1 text-gray-600">Book with UPI, cards, or wallets. Automatic splits with JamLink commission.</p>
        </div>
        <div className="rounded-2xl border p-6 shadow-sm">
          <MessageSquare className="h-6 w-6 text-fuchsia-600" />
          <h3 className="mt-3 font-semibold text-lg">Built-in Chat</h3>
          <p className="mt-1 text-gray-600">Negotiate, share setlists, and lock logistics right inside the app.</p>
        </div>
      </div>
    </section>
  );
}
