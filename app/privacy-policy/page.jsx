import { ArrowLeft, Database, Lock, ShieldCheck, UserCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy | Lotus Gold Company",
  description: "Privacy policy and KYC compliance details for Lotus Gold Company.",
};

const myLogo = '/lotus-logo.png';

const privacyItems = [
  {
    title: 'Information We Collect',
    text: 'To process gold transactions, we are legally required to collect certain personal identification documents. This includes, but is not limited to:',
    points: [
      'Government-issued ID (Aadhaar Card, Voter ID, Passport)',
      'PAN Card',
      'Recent passport-sized photographs',
      'Bank account details for NEFT/RTGS transfers',
    ],
  },
  {
    title: 'How We Use Your Information',
    text: 'We use the collected information solely for the purpose of:',
    points: [
      'Verifying your identity as required by local laws.',
      'Processing your gold valuation, exchange, or sale.',
      'Transferring funds securely to your bank account.',
      'Maintaining transaction records for taxation and compliance audits.',
    ],
  },
  {
    title: 'Data Security and Sharing',
    text: 'We implement strict physical, electronic, and procedural safeguards to protect your data. Your personal documents are securely stored and will never be sold, rented, or shared with third parties for marketing purposes. We only share information with government authorities when legally required to do so for tax or law enforcement purposes.',
  },
  {
    title: 'KYC and AML Compliance',
    text: "Lotus Gold Company operates in strict adherence to India's Know Your Customer (KYC) and Anti-Money Laundering (AML) regulations. By using our services, you consent to the mandatory verification of your identity and the reporting of transactions as mandated by the law.",
  },
  {
    title: 'Contact Us',
    text: 'If you have any questions regarding this Privacy Policy, please contact us at support@lotusgoldcompany.com or visit our branch at Devaraja Mohalla, Mysuru.',
  },
];

export default function PrivacyPolicy() {
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
              <ShieldCheck size={16} className="text-lotus-gold" />
              Customer Privacy
            </div>

            <h1 className="mb-4 text-4xl md:text-5xl font-serif font-bold tracking-tight text-lotus-dark">
              Privacy Policy
            </h1>
            <p className="max-w-3xl text-lg font-medium leading-relaxed text-gray-600">
              At Lotus Gold Company, we are committed to protecting the privacy and security of your
              personal information when you use our services in compliance with KYC and AML regulations.
            </p>
          </div>

          <div className="grid gap-5">
            {privacyItems.map((item) => (
              <section key={item.title} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lotus-light/5 text-lotus-dark">
                    <Lock size={20} />
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
                <Database size={28} className="text-lotus-gold" />
              </div>
              <h2 className="mb-3 text-xl font-bold">Limited Use</h2>
              <p className="text-base leading-relaxed text-white/80">
                Customer records are used for identity verification, payments, taxation, and compliance audits only.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1A0510] to-lotus-dark p-8 text-white shadow-xl">
              <div className="bg-lotus-gold/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <UserCheck size={28} className="text-lotus-gold" />
              </div>
              <h2 className="mb-3 text-xl font-bold">No Data Selling</h2>
              <p className="text-base leading-relaxed text-white/80">
                Personal documents are not sold, rented, or shared with third parties for marketing purposes.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
