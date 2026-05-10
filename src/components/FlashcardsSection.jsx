"use client";

import React from "react";
import { FileText, Coins, Microscope, Banknote, Unlock } from "lucide-react";

const cards = [
  {
    image: "/stuck-in-bank-loan.avif",
    title: "Release Gold",
    description: "We help pay off your gold loans",
    label: "Bank Loan Relief",
    year: "Instant Payout",
    icon: <Unlock className="w-10 h-10" />,
  },
  {
    image: "/document-creative.avif",
    title: "Documents",
    description: "We handle every form",
    label: "Hassle-Free Process",
    year: "Since 2006",
    icon: <FileText className="w-10 h-10" />,
  },
  {
    image: "/gold-bar.avif",
    title: "Gold Rates",
    description: "Highest value, guaranteed",
    label: "Best Market Price",
    year: "Daily Rates",
    icon: <Coins className="w-10 h-10" />,
  },
  {
    image: "/gold-creative.avif",
    title: "Testing",
    description: "Computer-verified purity",
    label: "Precision Testing",
    year: "Advanced Tech",
    icon: <Microscope className="w-10 h-10" />,
  },
  {
    image: "/need-cash-today.avif",
    title: "Cash Out",
    description: "Same-day payouts",
    label: "Instant Settlement",
    year: "No Delays",
    icon: <Banknote className="w-10 h-10" />,
  },
];

function CinematicCard({
  image,
  title,
  description,
  label,
  year,
  icon,
}) {
  // Check if image has baked-in text to avoid mobile clutter
  const hasBakedInText = title === "Release Gold";

  return (
    <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#1A0510] shadow-[0_20px_50px_rgba(26,5,16,0.15)] w-full flex flex-col justify-end aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={`${title} - ${description} | Lotus Gold Company`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
        />
        {/* Fine Grain Overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6-dark.png')]"></div>
      </div>
      
      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0208] via-[#1A0510]/40 to-transparent opacity-70 lg:opacity-0 transition-opacity duration-700 group-hover:opacity-95 pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col h-full p-6 sm:p-8 lg:p-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700">
        
        {/* Top Badges - Ultra subtle whisper labels */}
        <div className="flex justify-between items-start w-full transform lg:-translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-700 delay-100">
          <span className="text-[7px] lg:text-[10px] uppercase tracking-[0.3em] font-black text-white/20 lg:text-white/40 group-hover:text-white/90 drop-shadow-md">
            {label}
          </span>
          <span className="text-[7px] lg:text-[10px] uppercase tracking-[0.3em] font-black text-[#E8B13E]/20 lg:text-[#E8B13E]/40 group-hover:text-[#E8B13E] text-right ml-2 drop-shadow-md">
            {year}
          </span>
        </div>

        {/* Bottom Content Area */}
        <div className="mt-auto transform lg:translate-y-8 lg:group-hover:translate-y-0 transition-all duration-700 delay-75">
          <div className="mb-2 lg:mb-5 text-[#E8B13E] drop-shadow-[0_2px_15px_rgba(232,177,62,0.5)] scale-[0.6] lg:scale-110 origin-left transition-transform duration-500">
            {icon}
          </div>
          
          {/* Hide title on mobile if the image already has huge baked-in text */}
          <h3 className={`text-[11px] lg:text-4xl font-black uppercase tracking-[0.2em] lg:tracking-tighter font-serif text-white/90 lg:text-white mb-1 lg:mb-4 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] ${hasBakedInText ? 'hidden lg:block' : 'block'}`}>
            {title}
          </h3>
          
          <p className="hidden lg:block font-serif italic text-base text-white/70 line-clamp-2 max-w-[90%]">
            {description}
          </p>
        </div>

      </div>

      {/* Decorative Gold Inner Glow - Reveal on Hover */}
      <div className="absolute inset-0 border-[1px] border-lotus-gold/0 group-hover:border-lotus-gold/20 rounded-[2.5rem] transition-all duration-700 pointer-events-none m-3"></div>
    </div>
  );
}

export default function FlashcardsSection() {
  return (
    <section className="w-full bg-[#FDF8EE] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Staggered Masonry-style Grid for breathing room */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-12">
          {cards.map((card, i) => (
            <div key={i} className={`flex ${i % 3 === 1 ? 'lg:translate-y-12' : i % 3 === 2 ? 'lg:-translate-y-6' : ''} transition-transform duration-1000`}>
              <CinematicCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
