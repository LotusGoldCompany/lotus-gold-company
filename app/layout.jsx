import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  metadataBase: new URL("https://lotusgoldcompany.com"),
  title: "Lotus Gold Company | Best Gold Buyer in Mysuru | Sell Gold & Release Pledged Gold",
  description: "Lotus Gold Company in Devaraja Mohalla, Mysuru — Sell gold, release pledged gold from bank loans, and get instant cash at live market rates. Computer-tested purity. No hidden charges. Trusted since 2006. Call +91 99450 77757.",
  keywords: [
    "sell gold mysore", "sell gold mysuru", "gold buyer mysore",
    "release pledged gold mysore", "gold loan release mysore",
    "instant cash for gold mysuru", "best gold rate mysuru",
    "gold exchange mysore", "computer gold testing mysore",
    "gold company devaraja mohalla", "lotus gold company",
    "gold buyers near me mysore", "gold valuation mysore",
    "sell old gold jewelry mysore", "highest gold rate mysuru",
    "gold buying company mysore karnataka"
  ],
  authors: [
    { name: "Lotus Gold Company", url: "https://lotusgoldcompany.com" },
    { name: "Anthony Jude", url: "https://anthonyjude.vercel.app" }
  ],
  creator: "Lotus Gold Company",
  publisher: "Lotus Gold Company",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    canonical: "https://lotusgoldcompany.com",
  },
  openGraph: {
    title: "Lotus Gold Company | Best Gold Buyer in Mysuru",
    description: "Sell gold, release pledged gold, get instant cash at live market rates. Honest computer testing. No hidden charges. Mysuru's most trusted gold buyer since 2006.",
    url: "https://lotusgoldcompany.com",
    siteName: "Lotus Gold Company",
    images: [
      {
        url: "/favicon.png",
        width: 800,
        height: 600,
        alt: "Lotus Gold Company - Mysuru's Most Trusted Gold Buyer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus Gold Company | Best Gold Buyer in Mysuru",
    description: "Sell gold & release pledged gold at live market rates. Honest computer testing. No hidden charges. Call +91 99450 77757.",
    images: ["/favicon.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "kWvi9vXgpsmfx3pw5Vd0wTh7QDTjZRXSz4phhE6aHl8",
  },
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://lotusgoldcompany.com",
  "name": "Lotus Gold Company",
  "alternateName": "Lotus Gold",
  "description": "Mysuru's most trusted gold buying and valuation company. We help you sell gold, release pledged gold from bank loans, and get instant cash at live market rates using advanced computer testing. No hidden charges since 2006.",
  "url": "https://lotusgoldcompany.com",
  "telephone": "+919945077757",
  "email": "support@lotusgoldcompany.com",
  "foundingDate": "2006",
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Bank Transfer, IMPS, RTGS, NEFT",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hompu Complex, Devaraja Mohalla, Behind Chandramoulashwara Temple",
    "addressLocality": "Mysuru",
    "addressRegion": "Karnataka",
    "postalCode": "570001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.3088837",
    "longitude": "76.6488985"
  },
  "hasMap": "https://maps.google.com/?q=Hompu+Complex+Devaraja+Mohalla+Mysuru",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "19:00"
    }
  ],
  "sameAs": [
    "https://www.justdial.com/Mysore/LOTUS-GOLD-COMPANY-Behind-Chandramoulashwara-Temple-Devaraja-Mohalla/0821PX821-X821-260307163047-Y3F8_BZDET",
    "https://www.instagram.com/lotusgoldcompany/",
    "https://www.facebook.com/profile.php?id=61576416442085"
  ],
  "image": [
    "https://lotusgoldcompany.com/lotus-logo.png",
    "https://lotusgoldcompany.com/favicon.png"
  ],
  "logo": "https://lotusgoldcompany.com/lotus-logo.png",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "200",
    "bestRating": "5",
    "worstRating": "1"
  },
  "serviceArea": {
    "@type": "City",
    "name": "Mysuru",
    "sameAs": "https://en.wikipedia.org/wiki/Mysore"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Gold Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sell Gold for Instant Cash",
          "description": "Get instant spot cash for old or unused gold jewelry at live market rates with transparent computer testing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Release Pledged Gold from Bank Loans",
          "description": "We come to the bank with you, pay off your gold loan, and give you the remaining balance in cash."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gold Exchange",
          "description": "Exchange old gold jewelry at accurate valuations to buy new gold designs."
        }
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-594BVZZB');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-594BVZZB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Analytics />
        <SpeedInsights />

        {/* Developer Portfolio Badge */}
        <a 
          href="https://anthonyjude.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-5 left-5 z-[999] flex items-center gap-2 bg-[#000000] text-white p-1.5 rounded-full shadow-2xl border border-white/10 group hover:scale-105 hover:bg-[#111111] transition-all duration-300"
          title="Developer Portfolio"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-900 to-gray-700 flex items-center justify-center font-bold text-xs tracking-wider border border-white/5 group-hover:border-white/20 transition-colors">
            AJ
          </div>
          <span className="text-[10px] font-bold tracking-widest uppercase overflow-hidden max-w-0 group-hover:max-w-[250px] group-hover:pr-3 group-hover:pl-1 transition-all duration-500 whitespace-nowrap opacity-0 group-hover:opacity-100 text-white/80">
            Developed & Maintained by AJ
          </span>
        </a>
      </body>
    </html>
  );
}
