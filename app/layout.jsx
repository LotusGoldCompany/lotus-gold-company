import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  metadataBase: new URL("https://lotusgoldcompany.com"),
  title: "Lotus Gold Company | Best Gold Buyer | Sell Gold & Release Pledged Gold",
  description: "Lotus Gold Company in Devaraja Mohalla — Sell gold, release pledged gold from bank loans, and get instant cash at live market rates. Computer-tested purity. No hidden charges. Trusted since 2006. Call +91 99450 77757.",
  keywords: [
    "sell gold mysore", "gold buyers in mysore",
    "release pledged gold mysore", "gold loan release mysore",
    "instant cash for gold mysore", "best gold rate mysore",
    "gold exchange mysore", "computer gold testing mysore",
    "gold company devaraja mohalla", "lotus gold company",
    "gold buyers near me mysore", "gold valuation mysore",
    "sell old gold jewelry mysore", "highest gold rate mysore",
    "gold buying company mysore karnataka", "trusted gold buyers",
    "top rated gold buyers mysore"
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
    languages: {
      'en-IN': 'https://lotusgoldcompany.com',
      'kn-IN': 'https://lotusgoldcompany.com',
    },
  },
  openGraph: {
    title: "Lotus Gold Company | Best Gold Buyer",
    description: "Sell gold, release pledged gold, get instant cash at live market rates. Honest computer testing. No hidden charges. Most trusted gold buyer since 2006.",
    url: "https://lotusgoldcompany.com",
    siteName: "Lotus Gold Company",
    images: [
      {
        url: "https://lotusgoldcompany.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lotus Gold Company - Most Trusted Gold Buyer Since 2006 | Sell Gold & Release Pledged Gold",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus Gold Company | #1 Trusted Gold Buyer",
    description: "Sell gold & release pledged gold at live market rates. Honest computer testing. No hidden charges. Call +91 99450 77757.",
    images: ["https://lotusgoldcompany.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.avif",
    apple: "/favicon.avif",
  },
  verification: {
    google: "kWvi9vXgpsmfx3pw5Vd0wTh7QDTjZRXSz4phhE6aHl8",
  },
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "FinancialService"],
  "@id": "https://lotusgoldcompany.com",
  "name": "Lotus Gold Company",
  "alternateName": ["Lotus Gold", "Lotus Gold Mysuru", "Lotus Gold Mysore"],
  "description": "Mysuru's most trusted gold buying and valuation company. We help you sell gold, release pledged gold from bank loans, and get instant cash at live market rates using advanced computer testing. No hidden charges since 2006.",
  "url": "https://lotusgoldcompany.com",
  "telephone": "+919945077757",
  "email": "support@lotusgoldcompany.com",
  "foundingDate": "2006",
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Bank Transfer, IMPS, RTGS, NEFT",
  "openingHours": ["Mo-Sa 10:00-19:00"],
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
  "areaServed": [
    { "@type": "City", "name": "Mysuru", "sameAs": "https://en.wikipedia.org/wiki/Mysore" },
    { "@type": "City", "name": "Mysore" },
    { "@type": "State", "name": "Karnataka" }
  ],
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
    "https://lotusgoldcompany.com/og-image.png",
    "https://lotusgoldcompany.com/lotus-logo.avif"
  ],
  "logo": {
    "@type": "ImageObject",
    "url": "https://lotusgoldcompany.com/lotus-logo.avif",
    "width": 400,
    "height": 160
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "200",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Mageshwari" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "I am very happy with my experience at Lotus Gold Company. I released my pledged gold and sold it here, and the process was quick, transparent, and hassle-free.",
      "datePublished": "2025-03-13"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Arvindh" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Very good service from Lotus Gold Company they help me retrieve my gold from a gold loan and also assisted in selling it at a very good price.",
      "datePublished": "2025-03-12"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Jude" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "The deal was transparent, got value as expected as online gold price. I appreciate Mr Rajesh. Thank you.",
      "datePublished": "2025-03-28"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Gold Services in Mysuru",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sell Gold for Instant Cash in Mysuru",
          "description": "Get instant spot cash for old or unused gold jewelry at live market rates with transparent computer testing. Serving Mysuru since 2006."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Release Pledged Gold from Bank Loans in Mysuru",
          "description": "We come to the bank with you, pay off your gold loan, and give you the remaining balance in cash. Available across all banks in Mysuru."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Free Gold Valuation in Mysuru",
          "description": "Get a free, accurate valuation of your gold using advanced XRF computer testing before you decide to sell."
        }
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* FAQPage Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What documents do I need to bring to sell gold?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To keep things safe and legal, please bring your valid Government ID (Aadhaar Card, Voter ID, or Passport) and your PAN Card. We may also ask for one passport-sized photo."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do you test my gold? Will it be damaged?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Your gold is 100% safe. We use advanced computer testing machines that check the purity of your gold without melting, rubbing, or damaging it in any way."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I get my money?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We pay you instantly! You can choose Cash (up to legal limits), or we can transfer it directly to your bank account via IMPS, RTGS, or NEFT."
                  }
                },
                {
                  "@type": "Question",
                  "name": "My gold is stuck in a bank loan. Can you help me?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, this is our specialty! Our staff will go to the bank with you, pay off your pending loan, and then give you the remaining cash value of your gold."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you buy old or broken gold jewelry?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we buy all types of gold — old jewelry, broken chains, bent bangles, single earrings, coins, and even gold bars. As long as it's genuine gold, we'll buy it at the live market rate."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between 22K and 24K gold?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "24K gold is 99.9% pure gold, usually in the form of coins or bars. 22K gold is 91.6% pure and is commonly used in Indian jewelry. We test and buy both, and the price is adjusted based on actual purity."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you charge any hidden fees or deductions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely not. We have zero hidden charges. The rate we quote based on your gold's purity is the rate you get — no making charges, no processing fees, no deductions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is the gold price calculated?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use the live international gold rate, convert it to INR using the current exchange rate, and then adjust for purity (e.g., 22K, 24K) and weight in grams. Everything is calculated right in front of you."
                  }
                }
              ]
            })
          }}
        />
        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://lotusgoldcompany.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://lotusgoldcompany.com/#services"
                }
              ]
            })
          }}
        />
        {/* WebSite Schema for Google Sitelinks Searchbox */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Lotus Gold Company",
              "url": "https://lotusgoldcompany.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://lotusgoldcompany.com/?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
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

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-546NYG1LLC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-546NYG1LLC');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-594BVZZB');`}
        </Script>

      </body>
    </html>
  );
}
