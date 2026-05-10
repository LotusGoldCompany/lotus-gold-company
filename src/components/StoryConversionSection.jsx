"use client";
import { useState, useEffect } from 'react';
import { ArrowRight, Star, Heart, FileText, Banknote, ShieldCheck, Search, ChevronLeft, ChevronRight } from 'lucide-react';

export default function StoryConversionSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    // Slide 1: The Pain Point (Background Image)
    {
      id: "pain-point",
      theme: "dark",
      content: (
        <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-6">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/stuck-in-bank-loan.jpg')" }}
          />
          <div className="absolute inset-0 z-10 bg-black/70 backdrop-blur-[2px]" />
          
          <div className="relative z-20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 tracking-tight text-white drop-shadow-xl">
              Your Gold Should Free You, <span className="text-[#E8B13E]">Not Tie You Down.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed max-w-3xl drop-shadow-md mx-auto">
              Trapped in high-interest bank loans? Your pledged gold holds the key to your financial freedom.
            </p>
          </div>
        </div>
      )
    },
    // Slide 2: The Solution (Split Layout)
    {
      id: "solution",
      theme: "light",
      content: (
        <div className="relative w-full h-full flex items-center justify-center px-6 bg-[#FDF8EE]">
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            {/* Image Left */}
            <div className="w-full md:w-1/2">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 aspect-square md:aspect-[4/5] max-h-[60vh] md:max-h-none">
                <img 
                  src="/document-creative.jpg" 
                  alt="Paperwork and peace of mind" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Text & Timeline Right */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2B0917] leading-tight mb-8">
                We Handle the Paperwork. <br />
                <span className="text-[#E8B13E]">You Get the Peace of Mind.</span>
              </h2>
              <div className="relative border-l-2 border-[#E8B13E]/50 pl-8 space-y-8 ml-2">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-6 h-6 bg-[#E8B13E] rounded-full border-4 border-[#FDF8EE] shadow-md"></div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">1. Assess</h4>
                  <p className="text-gray-600 font-medium">We evaluate your loan details transparently.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-6 h-6 bg-[#E8B13E] rounded-full border-4 border-[#FDF8EE] shadow-md"></div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">2. Release</h4>
                  <p className="text-gray-600 font-medium">We visit the bank, handle paperwork, and clear the loan.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-6 h-6 bg-[#E8B13E] rounded-full border-4 border-[#FDF8EE] shadow-md"></div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">3. Cash Out</h4>
                  <p className="text-gray-600 font-medium">You receive the remaining value in spot cash instantly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 3: The Trust Factor (Split Layout)
    {
      id: "trust",
      theme: "light",
      content: (
        <div className="relative w-full h-full flex items-center justify-center px-6 bg-white">
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            {/* Text Left */}
            <div className="w-full md:w-1/2 flex flex-col justify-center order-last md:order-none">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2B0917] leading-tight mb-6">
                Precision Testing. <br />
                <span className="text-[#E8B13E]">Instant Payouts.</span>
              </h2>
              <p className="text-lg text-gray-600 font-medium mb-8 leading-relaxed">
                Trusted since 2006. We use advanced computer testing to guarantee exact market value for your gold, right in front of your eyes. No guesswork.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-[#FDF8EE] border border-[#E8B13E]/30 text-[#2B0917] px-4 py-2.5 rounded-full font-bold text-sm shadow-sm">
                  <ShieldCheck size={18} className="text-[#E8B13E]" />
                  100% Secure
                </div>
                <div className="flex items-center gap-2 bg-[#FDF8EE] border border-[#E8B13E]/30 text-[#2B0917] px-4 py-2.5 rounded-full font-bold text-sm shadow-sm">
                  <Search size={18} className="text-[#E8B13E]" />
                  Transparent
                </div>
                <div className="flex items-center gap-2 bg-[#FDF8EE] border border-[#E8B13E]/30 text-[#2B0917] px-4 py-2.5 rounded-full font-bold text-sm shadow-sm">
                  <Banknote size={18} className="text-[#E8B13E]" />
                  Instant Cash
                </div>
              </div>
            </div>
            {/* Image Right */}
            <div className="w-full md:w-1/2">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3] md:aspect-square max-h-[60vh] md:max-h-none">
                <img 
                  src="/need-cash-today.jpg" 
                  alt="Computer testing for instant payouts" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 4: The Offer & CTA (Background Image)
    {
      id: "offer",
      theme: "dark",
      content: (
        <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-6">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/gold-bar.jpg')" }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#2B0917]/95 via-[#4B122C]/90 to-[#E8B13E]/40 backdrop-blur-[2px]" />
          
          <div className="relative z-20 max-w-3xl mx-auto">
            <div className="inline-block px-5 py-2 rounded-full bg-[#E8B13E]/20 border border-[#E8B13E] mb-6 backdrop-blur-md">
              <p className="text-[#E8B13E] font-bold text-sm tracking-widest uppercase">Limited Time Offer</p>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-black leading-tight mb-4 tracking-tighter drop-shadow-2xl text-white">
              20% OFF <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B13E] via-[#FCF6BA] to-[#E8B13E]">YOUR FIRST TRANSACTION</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-12 tracking-wide uppercase drop-shadow-md">
              For gold sales & pledged release.
            </p>
            <button 
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#E8B13E] to-[#F3C86B] text-[#2B0917] font-black text-xl px-10 py-5 rounded-full shadow-[0_0_40px_rgba(232,177,62,0.6)] hover:scale-105 transition-all duration-300 animate-[pulse_2s_ease-in-out_infinite] cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
              Claim Your Treasure Now! 
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.95
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.95
      };
    }
  };

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-white border-y border-lotus-gold/20">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {slides[currentSlide].content}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className={`absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full transition-all backdrop-blur-md border ${slides[currentSlide].theme === 'dark' ? 'bg-black/30 text-white hover:bg-[#E8B13E] hover:text-[#2B0917] border-white/20' : 'bg-white/50 text-[#2B0917] hover:bg-[#E8B13E] hover:text-white border-[#2B0917]/20 shadow-md'}`}
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className={`absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full transition-all backdrop-blur-md border ${slides[currentSlide].theme === 'dark' ? 'bg-black/30 text-white hover:bg-[#E8B13E] hover:text-[#2B0917] border-white/20' : 'bg-white/50 text-[#2B0917] hover:bg-[#E8B13E] hover:text-white border-[#2B0917]/20 shadow-md'}`}
      >
        <ChevronRight size={32} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`transition-all duration-300 rounded-full ${currentSlide === index ? 'w-10 h-3 bg-[#E8B13E] shadow-[0_0_10px_rgba(232,177,62,0.8)]' : (slides[currentSlide].theme === 'dark' ? 'w-3 h-3 bg-white/50 hover:bg-white/80' : 'w-3 h-3 bg-[#2B0917]/30 hover:bg-[#2B0917]/60')}`}
          />
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
}
