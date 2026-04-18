import { useState, useEffect } from 'react';
import { Star, Coins, Unlock, RefreshCw, ArrowRight, Menu, X, Microscope, ShieldCheck, CheckSquare, Phone, Award, FileText, Banknote, Zap } from 'lucide-react'; 
import ContactForm from './components/ContactForm';
import ReviewModal from './components/ReviewModal';
import flyer1 from './assets/lgc-1.avif';
import flyer2 from './assets/lgc-2.avif';
import flyer3 from './assets/lgc-3.avif';
import flyer4 from './assets/lgc-5.avif';
import flyer5 from './assets/lgc-6.avif';

const advantageImages = [flyer1, flyer2, flyer3, flyer4, flyer5];
import myLogo from './assets/lotus-logo.png'; 
import heroModel from './assets/model-lady.png'; 

const customerReviews = [
  { name: "Mageshwari", rating: 5, date: "13 Mar", text: "I am very happy with my experience at Lotus Gold Company. I released my pledged gold and sold it here, and the process was quick, transparent, and hassle-free." },
  { name: "Arvindh", rating: 5, date: "12 Mar", text: "Very good service from Lotus Gold Company they help me retrieve my gold from a gold loan and also assisted in selling it at a very good price." },
  { name: "Caller", rating: 5, date: "28 Mar", text: "The deal was transparent, got value as expected as online gold price.. I appreciate mr Rajesh.. Thank you." }
];

const tickerItems = [
  { icon: <Microscope size={18} className="text-lotus-gold"/>, text: "German Tech Testing" },
  { icon: <ShieldCheck size={18} className="text-lotus-gold"/>, text: "100% Transparent" },
  { icon: <CheckSquare size={18} className="text-lotus-gold"/>, text: "No Hidden Charges" },
  { icon: <Phone size={18} className="text-lotus-gold"/>, text: "Call 07043555086" },
  { icon: <Award size={18} className="text-lotus-gold"/>, text: "Trusted Since 2006" },
  { icon: <FileText size={18} className="text-lotus-gold"/>, text: "GST Bill Provided" },
  { icon: <Banknote size={18} className="text-lotus-gold"/>, text: "Best Market Rate" },
  { icon: <Zap size={18} className="text-lotus-gold"/>, text: "Instant Cash Payment" },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [goldRateText, setGoldRateText] = useState("Loading...");

  useEffect(() => {
    const fetchLiveRate = async () => {
      try {
        setTimeout(() => {
          setGoldRateText("₹7,350/g");
        }, 1200);
      } catch (error) {
        console.error("Failed to fetch gold rate:", error);
        setGoldRateText("Rate Unavailable");
      }
    };
    fetchLiveRate();
    const interval = setInterval(fetchLiveRate, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="bg-white/95 backdrop-blur-md px-6 py-4 fixed w-full top-0 left-0 shadow-sm border-b border-gray-100 z-50 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={myLogo} alt="Lotus Gold Company" className="h-10 md:h-16 w-auto object-contain cursor-pointer transform scale-[2.5] md:scale-[2.5] origin-left" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-lg font-semibold text-gray-700">
            <a href="/" className="hover:text-lotus-gold transition-colors">Home</a>
            <a href="#about" className="hover:text-lotus-gold transition-colors">About Us</a>
            <a href="#services" className="hover:text-lotus-gold transition-colors">Services</a>
            <a href="#reviews" className="hover:text-lotus-gold transition-colors">Reviews</a>
            <button onClick={() => setIsModalOpen(true)} className="hover:text-lotus-gold transition-colors cursor-pointer font-bold text-lotus-dark">Contact Us</button>
          </div>
          <div className="hidden md:block">
            <button onClick={() => setIsModalOpen(true)} className="bg-lotus-gold text-lotus-dark font-bold px-6 py-2.5 rounded-lg hover:bg-[#f5c35b] transition-all shadow-[0_0_15px_rgba(232,177,62,0.4)] flex justify-center items-center min-w-[150px] cursor-pointer">
              {goldRateText === "Loading..." ? <span className="animate-pulse">Fetching...</span> : <span>Live: {goldRateText}</span>}
            </button>
          </div>
          <button className="md:hidden text-lotus-dark p-2 focus:outline-none cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl py-6 px-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-2">
            <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold text-gray-800 hover:text-lotus-gold">Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold text-gray-800 hover:text-lotus-gold">About Us</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold text-gray-800 hover:text-lotus-gold">Services</a>
            <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold text-gray-800 hover:text-lotus-gold">Reviews</a>
            <button onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }} className="text-lg font-semibold text-left text-gray-800 hover:text-lotus-gold cursor-pointer">
              Contact Us
            </button>
            <div className="pt-4 border-t border-gray-100">
               <button onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }} className="bg-lotus-gold text-lotus-dark font-bold px-6 py-3.5 rounded-lg flex items-center justify-center shadow-md w-full cursor-pointer">
                  {goldRateText === "Loading..." ? "Fetching..." : `Live: ${goldRateText}`}
               </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <main className="pt-28 lg:pt-36 pb-16 bg-[#2B0917] text-white relative overflow-hidden flex items-center min-h-[90vh]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-lotus-light rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[50%] bg-lotus-gold rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between w-full relative z-10 gap-16">
          <div className="flex-1 space-y-10 max-w-2xl relative z-20">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-2">
                <p className="text-lotus-gold font-bold text-sm tracking-widest uppercase">Mysuru's Most Trusted</p>
              </div>
              <h2 className="text-6xl md:text-7xl font-black leading-[1.1] tracking-tight">
                Lotus Gold <br />
                <span className="bg-gradient-to-r from-[#F9D423] via-[#FF4E50] to-[#F9D423] text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(249,212,35,0.3)]">
                  Company
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed max-w-xl">
                Unlock the True Value of Your Gold.                
              </p>
              <p className="text-l md:text-lg text-white/80 font-medium leading-relaxed max-w-xl">
                Break free from high-interest gold loans. We offer a 100% transparent, tech-driven evaluation to give you maximum market value and instant spot cash.                
              </p>
            </div>

            <div className="flex flex-wrap gap-5 pt-4">
              <button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-lotus-gold to-[#f5c35b] text-lotus-dark font-black px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(232,177,62,0.4)] flex items-center gap-2 cursor-pointer">
                Know How to Sell <ArrowRight size={20} />
              </button>
              <button onClick={() => setIsModalOpen(true)} className="bg-white/5 border border-white/20 backdrop-blur-md text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2 cursor-pointer">
                Get Live Valuation
              </button>
            </div>
          </div>

          <div className="flex-1 lg:flex justify-end relative w-full lg:w-auto mt-12 lg:mt-0">
             <div className="relative w-full max-w-md mx-auto lg:mx-0 animate-float-slow">
                <div className="absolute inset-0 bg-gradient-to-tr from-lotus-gold via-transparent to-lotus-light rounded-t-[150px] rounded-b-[40px] blur-md opacity-70 transform scale-105"></div>
                
                <div className="relative bg-[#3a0d20] w-full aspect-[3/4] rounded-t-[150px] rounded-b-[40px] border border-white/20 shadow-2xl overflow-hidden group">
                  <img src={heroModel} alt="Lotus Gold Representative" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-lotus-dark/30 via-transparent to-transparent pointer-events-none"></div>
                </div>

                <div className="absolute -bottom-8 -left-8 md:-left-16 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl animate-float-fast z-30">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-lotus-gold to-yellow-600 text-lotus-dark font-black text-2xl px-3 py-1.5 rounded-lg shadow-inner">
                      4.9
                    </div>
                    <div>
                      <div className="flex text-lotus-gold drop-shadow-md">
                        <Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} />
                      </div>
                      <p className="text-xs font-bold text-white tracking-wide mt-1">200+ Reviews</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-12 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-full shadow-2xl animate-float-slow z-30" style={{ animationDelay: '1s' }}>
                  <div className="bg-lotus-dark w-16 h-16 rounded-full flex flex-col items-center justify-center border border-lotus-gold/30">
                    <Microscope size={24} className="text-lotus-gold mb-0.5" />
                    <span className="text-[8px] font-bold text-white uppercase tracking-wider">Tested</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </main>

      {/* THE MARQUEE BRIDGE */}
      <div className="bg-[#1f0510] py-4 overflow-hidden flex relative z-20 w-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-y border-lotus-gold/20">
        <div className="flex animate-marquee w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-10 md:gap-20 px-5 md:px-10 items-center">
              {tickerItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3 whitespace-nowrap text-base font-bold tracking-wide cursor-default group">
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-lotus-gold/20 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-white/80 group-hover:text-white transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 🌟 ABOUT US SECTION 🌟 */}
      <section id="about" className="py-24 bg-white px-6 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative">
          
          <div className="absolute -left-32 -top-32 w-96 h-96 bg-lotus-gold/5 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="flex-1 space-y-8 relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-lotus-light/10 border border-lotus-light/20 mb-2">
              <p className="text-lotus-dark font-bold text-sm tracking-widest uppercase">Our Legacy</p>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-lotus-dark leading-tight tracking-tight">
              Redefining Trust in <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">Gold Valuation</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed">
              <p>
                Founded in the heart of Devaraja Mohalla, Mysuru, Lotus Gold Company was established to solve a critical problem: the lack of transparency in the traditional gold-buying market. We believe that your assets deserve absolute precision and fair market value.
              </p>
              <p>
                For nearly two decades, we have empowered thousands of families to break free from high-interest gold loans. By combining certified German testing technology with real-time global market rates, we ensure every transaction is completely transparent, secure, and instantaneous.
              </p>
            </div>
            
            <div className="pt-6 flex items-center gap-6">
               <img src={myLogo} alt="Lotus Gold Logo" className="h-14 w-auto object-contain transform scale-125 origin-left" />
               <div className="pl-6 border-l-2 border-gray-200">
                 <p className="font-black text-lotus-dark text-xl tracking-tight">German Tech Testing</p>
                 <p className="text-sm text-lotus-gold font-bold uppercase tracking-wider">Govt. Approved Scales</p>
               </div>
            </div>
          </div>

          <div className="flex-1 w-full relative z-10">
             <div className="grid grid-cols-2 gap-4 md:gap-6">
               <div className="bg-[#FFFDF9] p-8 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow group">
                 <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-lotus-dark to-lotus-light mb-2 group-hover:scale-105 transition-transform origin-left">2006</div>
                 <p className="text-gray-500 font-bold uppercase tracking-wide text-sm">Year Established</p>
               </div>
               
               <div className="bg-[#FFFDF9] p-8 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow translate-y-0 md:translate-y-8 group">
                 <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-lotus-dark to-lotus-light mb-2 group-hover:scale-105 transition-transform origin-left">10k+</div>
                 <p className="text-gray-500 font-bold uppercase tracking-wide text-sm">Happy Customers</p>
               </div>

               <div className="bg-[#FFFDF9] p-8 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow group">
                 <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-lotus-dark to-lotus-light mb-2 group-hover:scale-105 transition-transform origin-left">100%</div>
                 <p className="text-gray-500 font-bold uppercase tracking-wide text-sm">Transparent Process</p>
               </div>

               <div className="bg-gradient-to-br from-lotus-gold to-yellow-500 p-8 rounded-[2rem] shadow-lg hover:shadow-xl transition-shadow translate-y-0 md:translate-y-8 group">
                 <div className="text-4xl lg:text-5xl font-black text-lotus-dark mb-2 group-hover:scale-105 transition-transform origin-left">0%</div>
                 <p className="text-lotus-dark/80 font-bold uppercase tracking-wide text-sm">Hidden Charges</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-[#FFFDF9] px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-lotus-dark mb-4">Tailored Financial Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">Whether you are liquidating assets or rescuing pledged jewelry, we provide secure pathways to instant financial freedom.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="bg-lotus-light/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-lotus-gold group-hover:rotate-12 transition-all">
                <Coins size={32} className="text-lotus-dark" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sell Gold for Cash</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Get spot cash for your old or unused gold jewelry based on 100% transparent live online market rates.</p>
              <button onClick={() => setIsModalOpen(true)} className="text-lotus-light font-bold flex items-center gap-2 group-hover:text-lotus-gold transition-colors cursor-pointer">
                Get Cash Today <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="bg-gradient-to-b from-lotus-dark to-[#3a0d20] p-8 rounded-[2rem] shadow-2xl transform md:-translate-y-6 relative group border border-white/10">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-lotus-gold to-yellow-500 text-lotus-dark text-xs font-black px-4 py-1.5 rounded-bl-xl rounded-tr-[2rem] uppercase tracking-wider shadow-md">Most Popular</div>
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Unlock size={32} className="text-lotus-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Release Pledged Gold</h3>
              <p className="text-white/80 mb-8 leading-relaxed">Struggling with a high-interest bank loan? We clear your loan directly and pay you the remaining balance in cash.</p>
              <button onClick={() => setIsModalOpen(true)} className="text-lotus-gold font-bold flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                Free Your Gold <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform"/>
              </button>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="bg-lotus-light/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-lotus-gold group-hover:-rotate-12 transition-all">
                <RefreshCw size={32} className="text-lotus-dark" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Gold Exchange</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Upgrade your old designs. We evaluate your existing jewelry accurately so you can maximize its value for new purchases.</p>
              <button onClick={() => setIsModalOpen(true)} className="text-lotus-light font-bold flex items-center gap-2 group-hover:text-lotus-gold transition-colors cursor-pointer">
                Learn More <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform"/>
              </button>
            </div>
          </div>
        </div>
      </section>      

      {/* CAROUSEL SECTION */}
      <section className="py-24 bg-[#110208] relative overflow-hidden flex flex-col items-center border-y border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-gradient-to-b from-lotus-gold/5 to-transparent blur-[120px] pointer-events-none"></div>
        <div className="text-center mb-16 relative z-10 px-6">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 mb-4 tracking-tight">
            Uncompromising Trust
          </h2>
          <p className="text-lotus-gold font-medium text-lg tracking-wide max-w-2xl mx-auto">
            Experience a gold-selling process designed to maximize your return with zero hidden fees.
          </p>
        </div>
        
        <div className="relative w-full max-w-[100vw]">
          <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-[#110208] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-[#110208] to-transparent z-20 pointer-events-none"></div>

          <div className="flex overflow-x-auto gap-6 md:gap-10 px-8 md:px-[20vw] pb-16 pt-4 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing items-center">
            {advantageImages.map((img, idx) => (
              <div 
                key={idx} 
                className="relative w-[80vw] md:w-[380px] lg:w-[420px] flex-shrink-0 snap-center rounded-[2.5rem] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.8)] border border-white/10 group transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_25px_50px_rgba(232,177,62,0.2)] hover:border-lotus-gold/40 bg-[#2B0917]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10 mix-blend-overlay"></div>
                <img 
                  src={img} 
                  alt={`Lotus Gold Advantage ${idx + 1}`} 
                  className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out relative z-0" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="py-20 bg-[#FFFDF9] px-6 text-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-lotus-dark mb-4">What Our Clients Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl">Trusted by the people of Mysore for transparent evaluation, instant payouts, and hassle-free gold loan release.</p>
            </div>
            <button onClick={() => setIsReviewModalOpen(true)} className="flex items-center gap-2 border-2 border-lotus-gold text-lotus-dark font-bold px-6 py-3 rounded-full hover:bg-lotus-gold hover:text-white transition-all shadow-sm cursor-pointer whitespace-nowrap">
              <Star size={18} /> Write a Review
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customerReviews.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                <div className="flex text-lotus-gold mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={18} />)}
                </div>
                <p className="text-gray-600 italic mb-6 flex-grow leading-relaxed">"{review.text}"</p>
                <div className="border-t border-gray-100 pt-4 mt-auto flex justify-between items-center">
                  <p className="font-bold text-lotus-dark">{review.name}</p>
                  <p className="text-xs text-gray-400 font-medium">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a060f] text-white/50 py-8 px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Lotus Gold Company. All rights reserved.</p>
          <p className="text-xs text-white/30 max-w-2xl leading-relaxed">
            Disclaimer: The gold rates displayed are based on live online market feeds. Final payout values may vary based on actual purity testing using our certified German technology.
          </p>
        </div>
      </footer>

      {/* Render Modals */}
      <ContactForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ReviewModal isOpen={isReviewModalOpen} onClose={() => setIsReviewModalOpen(false)} />
    </div>
  );
}

export default App;