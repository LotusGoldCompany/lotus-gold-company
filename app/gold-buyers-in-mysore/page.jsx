import { MapPin, SearchCheck, ShieldCheck, Banknote, Phone, ArrowRight, Home, Star } from 'lucide-react';
import Link from 'next/link';
import WhatsAppButton from '../../src/components/WhatsAppButton';

export const metadata = {
  title: "Top Rated Gold Buyers in Mysore | Instant Cash for Gold",
  description: "Looking for the best gold buyers in Mysore? Lotus Gold Company offers instant cash for gold, transparent computer testing, and release of pledged gold. Visit our Devaraja Mohalla branch today.",
  alternates: {
    canonical: "https://lotusgoldcompany.com/gold-buyers-in-mysore",
  }
};

export default function GoldBuyersMysore() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FDF8EE] overflow-x-hidden">
      {/* SIMPLE NAVBAR */}
      <nav className="bg-white/95 backdrop-blur-md px-6 py-4 fixed w-full top-0 left-0 shadow-sm border-b border-gray-100 z-50 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <img src="/lotus-logo.avif" alt="Lotus Gold Company" width={160} height={64} className="h-10 md:h-16 w-auto object-contain transform scale-[2.5] md:scale-[2.5] origin-left image-render-crisp" />
          </Link>
          <div className="flex items-center gap-4">
            <a href="tel:+919945077757" className="bg-lotus-gold text-lotus-dark font-bold px-6 py-2.5 rounded-lg hover:bg-[#f5c35b] transition-all shadow-[0_0_15px_rgba(232,177,62,0.4)] flex items-center gap-2 cursor-pointer">
              <Phone size={18} /> Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* SEO HERO SECTION */}
      <main className="pt-36 pb-20 bg-[#1A0510] text-white relative overflow-hidden flex items-center">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-lotus-light rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[50%] bg-lotus-gold rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <MapPin size={14} className="text-lotus-gold" />
            <span className="text-lotus-gold font-sans font-medium tracking-[0.2em] text-[10px] uppercase">Located in Mysuru</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(191,149,63,0.3)] mb-6">
            Trusted Gold Buyers in Mysore
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            Get the highest market value for your old or pledged gold. Experience 100% transparent computer testing and instant cash payouts at Mysore's premier gold buying destination.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <a href="tel:+919945077757" className="bg-gradient-to-r from-lotus-gold to-[#f5c35b] text-lotus-dark font-black px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(232,177,62,0.4)] flex items-center gap-2 cursor-pointer">
               Get Free Valuation <ArrowRight size={20} />
            </a>
            <Link href="/" className="bg-white/5 border border-white/20 backdrop-blur-md text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2 cursor-pointer">
              <Home size={20} /> Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* WHY CHOOSE US - SEO FOCUSED */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-lotus-dark mb-4">Why Sell Your Gold to Us?</h2>
            <p className="text-gray-600 text-lg">As the leading gold buyers in Mysore, we ensure a seamless and honest process.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-lotus-gold/20 p-4 rounded-full mb-6">
                <SearchCheck size={32} className="text-lotus-dark" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Live Market Rates</h3>
              <p className="text-gray-600">We offer the best value based on real-time international gold prices. No guessing, just honest valuation.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-lotus-gold/20 p-4 rounded-full mb-6">
                <ShieldCheck size={32} className="text-lotus-dark" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Computer Testing</h3>
              <p className="text-gray-600">Your gold is 100% safe. We use non-destructive German XRF machines to accurately check purity in front of you.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-lotus-gold/20 p-4 rounded-full mb-6">
                <Banknote size={32} className="text-lotus-dark" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Cash Payment</h3>
              <p className="text-gray-600">Walk in with gold, walk out with cash or immediate bank transfer via IMPS/NEFT without any delays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-white px-6 border-y border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center text-lotus-gold mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <h2 className="text-3xl font-serif font-bold text-lotus-dark mb-6">"Best Place to Sell Gold in Mysore"</h2>
          <p className="text-xl text-gray-600 italic mb-8">"I visited multiple shops in Mysore but Lotus Gold Company gave me the highest price for my old jewelry. The computer testing was transparent and I received instant cash. Highly recommended!"</p>
          <p className="font-bold text-gray-900">— Verified Customer Review</p>
        </div>
      </section>

      {/* MAPS & LOCATION */}
      <section className="py-20 bg-[#FDF8EE] px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-lotus-dark">Visit Our Mysore Branch</h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              Centrally located in Devaraja Mohalla, we are easily accessible from anywhere in Mysore. Drop by for a free consultation.
            </p>
            <div className="flex items-start gap-4 pt-4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="bg-lotus-gold/20 p-3 rounded-full mt-1">
                <MapPin size={24} className="text-lotus-dark" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Lotus Gold Company</h4>
                <p className="text-gray-600">Hompu Complex, Devaraja Mohalla</p>
                <p className="text-gray-600">Mysuru, Karnataka 570001</p>
                <p className="text-gray-600 mt-2 font-bold text-lotus-dark flex items-center gap-2"><Phone size={14}/> +91 99450 77757</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7796.205001702663!2d76.6488985!3d12.3088837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf71006badafdb%3A0xf73ac58aea239eab!2sHompu%20complex!5e0!3m2!1sen!2sin!4v1777228055696!5m2!1sen!2sin"
              title="Lotus Gold Company location in Mysore"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A0510] text-white/70 py-8 px-6 text-center text-sm border-t border-lotus-gold/20">
        <p>&copy; {new Date().getFullYear()} Lotus Gold Company. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
