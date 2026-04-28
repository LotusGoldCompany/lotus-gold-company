import { ArrowLeft, CheckCircle, FileText, Scale, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Terms & Conditions | Lotus Gold Company",
  description: "Terms and conditions, legal information, and compliance policies for Lotus Gold Company.",
};

const myLogo = '/lotus-logo.png';

const termItems = [
  {
    title: 'General Conditions',
    text: 'Lotus Gold Company operates strictly as a buyer of old/used gold and provider of pledged gold release services. We do not sell gold bullion or coins directly to retail customers unless specified otherwise. All transactions are subject to market conditions and management approval.',
  },
  {
    title: 'Ownership and Legal Age',
    text: 'By offering gold to Lotus Gold Company, you legally declare that:',
    points: [
      'You are at least 18 years of age.',
      'You are the absolute legal owner of the items, or you have legal authorization to sell or pledge them.',
      'The items are free from any liens, encumbrances, or legal disputes, unless explicitly stated for pledge release services.',
    ],
  },
  {
    title: 'Valuation and Testing',
    text: 'We use non-destructive computer testing machines to estimate the purity of your gold. However, in rare instances where deeper testing is required, minor scratching or stone removal may be necessary. By handing over your items, you consent to these evaluation procedures. The valuation provided is based on live market rates at the exact time of testing and is subject to immediate change.',
  },
  {
    title: 'Finality of Transaction',
    text: 'Once a price is agreed upon and payment is transferred via Cash, IMPS, NEFT, or RTGS, the transaction is final. Lotus Gold Company assumes immediate ownership of the gold, and items cannot be returned or refunded under any circumstances.',
  },
  {
    title: 'Releasing Pledged Gold',
    text: 'For pledge release services, we require full transparency regarding the outstanding loan amount. Our executives will accompany you to the respective financial institution. You are responsible for any penalties, processing fees, or hidden charges imposed by your bank or financier during the closure of the loan.',
  },
  {
    title: 'Amendments',
    text: 'Lotus Gold Company reserves the right to modify these Terms & Conditions at any time. Any changes will be updated on this website and will take immediate effect.',
  },
];

export default function Terms() {
  return (
    <main className="min-h-screen bg-[#FDF8EE] font-sans text-gray-800">
      <header className="bg-[#1A0510] px-6 py-5 text-white shadow-lg border-b border-lotus-gold/20">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <img src={myLogo} alt="Lotus Gold Company" className="h-10 md:h-12 w-auto object-contain transform scale-[2.5] origin-left image-render-crisp" />
            <span className="text-lg md:text-xl font-black uppercase tracking-widest drop-shadow-md ml-6 md:ml-10">
              <span className="text-white">LOTUS </span>
              <span className="text-lotus-gold drop-shadow-[0_0_10px_rgba(232,177,62,0.3)]">GOLD COMPANY</span>
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white/80 transition hover:border-lotus-gold hover:text-lotus-gold hover:bg-white/5"
          >
            <ArrowLeft size={16} />
            Home
          </Link>
        </div>
      </header>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 rounded-[2rem] border border-lotus-gold/20 bg-white p-8 md:p-12 shadow-[0_10px_35px_rgba(26,6,15,0.04)]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-lotus-gold/10 px-4 py-2 text-sm font-black uppercase tracking-widest text-lotus-dark">
              <FileText size={16} className="text-lotus-gold" />
              Legal Information
            </div>

            <h1 className="mb-4 text-4xl md:text-5xl font-serif font-bold tracking-tight text-lotus-dark">
              Terms & Conditions
            </h1>
            <p className="max-w-3xl text-lg font-medium leading-relaxed text-gray-600">
              Welcome to Lotus Gold Company. By using our services, you agree to comply with and
              be bound by the following terms and conditions. Please review them carefully.
            </p>
          </div>

          <div className="grid gap-5">
            {termItems.map((item) => (
              <section key={item.title} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lotus-light/5 text-lotus-dark">
                    <CheckCircle size={20} />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
                </div>
                <p className="leading-relaxed text-gray-600 font-medium">{item.text}</p>
                {item.points && (
                  <ul className="mt-4 space-y-3 leading-relaxed text-gray-600 font-medium">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 items-start">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-lotus-gold" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1A0510] to-lotus-dark p-8 text-white shadow-xl">
              <div className="bg-lotus-gold/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Scale size={28} className="text-lotus-gold" />
              </div>
              <h2 className="mb-3 text-xl font-bold">Transparent Process</h2>
              <p className="text-base leading-relaxed text-white/80">
                Valuation is based on live market rates at the exact time of testing and may change immediately.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1A0510] to-lotus-dark p-8 text-white shadow-xl">
              <div className="bg-lotus-gold/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={28} className="text-lotus-gold" />
              </div>
              <h2 className="mb-3 text-xl font-bold">Customer Safety</h2>
              <p className="text-base leading-relaxed text-white/80">
                Transactions are completed only after ownership, legal age, and service details are verified.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
