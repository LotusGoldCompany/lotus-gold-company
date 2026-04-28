"use client";
import { useState, useEffect } from 'react';
import { Star, Coins, Unlock, RefreshCw, ArrowRight, Menu, X, Microscope, ShieldCheck, CheckSquare, Phone, Award, FileText, Banknote, Zap, ChevronDown, MapPin, SearchCheck, CheckCircle2, Activity, Scale } from 'lucide-react';
import ContactForm from '../src/components/ContactForm';
import ReviewModal from '../src/components/ReviewModal';

import WhatsAppButton from '../src/components/WhatsAppButton';
import GoldCalculator from '../src/components/GoldCalculator';

const advantageImages = ['/lgc-1.avif', '/lgc-2.avif', '/lgc-3.avif', '/lgc-5.avif', '/lgc-6.avif'];
const myLogo = '/lotus-logo.png'; 
const heroModel = '/model-lady.png'; 

// BILINGUAL DICTIONARY (ENGLISH / KANNADA)
const translations = {
  en: {
    navHome: "Home", navAbout: "About Us", navServices: "Services", navFaq: "FAQ", navContact: "Contact Us",
    unlockRate: "Unlock Live Rate", fetching: "Fetching...", live: "Live",
    heroSub: "Mysuru's Most Trusted", heroTitle: "Lotus Gold", heroHighlight: "Company",
    heroHead: "Get the Best Price for Your Gold in Mysuru.",
    heroDesc: "We help you release pledged gold from banks and pay instant spot cash. Honest testing, clear pricing, and no hidden fees.",
    btnContact: "Contact Us Now", btnCheckRate: "Check Today's Gold Price",
    reviews: "200+ Happy Customers", tested: "Tested",
    t1: "Computer Testing", t2: "100% Safe & Secure", t3: "No Hidden Charges", t4: "Call +91 99450 77757", t5: "Trusted Since 2006", t6: "GST Bill Provided", t7: "Best Market Rate", t8: "Instant Cash Payment",
    aboutTag: "Our Story", aboutTitle: "A Name You Can Trust in", aboutCity: "Mysuru",
    aboutP1: "Located in Devaraja Mohalla, Lotus Gold Company was started with one simple goal: to give the people of Mysuru a safe, honest, and easy place to sell their gold.",
    aboutP2: "Since 2006, we have helped thousands of families get instant cash for their jewelry or free their gold from high-interest bank loans. We don't guess the price—we use computer testing to give you the exact live market rate for your gold, right in front of your eyes.",
    compTesting: "Computer Testing", accurateScales: "Accurate & Safe Scales",
    est: "Year Established", happy: "Happy Customers", honest: "Honest Process", hidden: "Hidden Charges",
    srvTitle: "How We Can Help You", srvSub: "We provide Mysuru's fastest and safest gold services.",
    srv1: "Sell Gold for Cash", srv1Desc: "Get instant spot cash for your old or unused gold jewelry. We check the purity in front of you and pay today's live market rate.", btnCash: "Get Cash Today",
    popular: "Most Popular", srv2: "Release Pledged Gold", srv2Desc: "Stuck with a bank gold loan? We will come to the bank with you, pay off your loan, and give you the remaining balance in cash.", btnFree: "Free Your Gold",
    srv3: "Gold Exchange", srv3Desc: "Want to upgrade your old designs? We evaluate your existing jewelry accurately so you get the most money to buy new gold.", btnLearn: "Learn More",
    whyTitle: "Why Choose Us?", whySub: "Swipe to see why thousands of families in Mysuru trust Lotus Gold Company.",
    faqTitle: "Frequently Asked Questions", faqSub: "Everything you need to know before visiting our branch.",
    revTitle: "What Our Clients Say", revSub: "Trusted by the people of Mysuru for honest testing, fast payouts, and helpful service.", btnWrite: "Write a Review",
    ftDesc: "Mysuru's most trusted gold valuation and buying company. Experience 100% transparent, tech-driven transactions.",
    ftPhone: "Phone:", ftEmail: "Email:", ftLegal: "Legal Disclaimer", ftLegalDesc: "The gold rates displayed are based on live online market feeds. Final payout values may vary based on actual purity testing using our advanced computer hardware.", ftRights: "All rights reserved."
  },
  kn: {
    navHome: "ಮುಖಪುಟ", navAbout: "ನಮ್ಮ ಬಗ್ಗೆ", navServices: "ಸೇವೆಗಳು", navFaq: "ಪ್ರಶ್ನೋತ್ತರಗಳು", navContact: "ಸಂಪರ್ಕಿಸಿ",
    unlockRate: "ಲೈವ್ ದರ ವೀಕ್ಷಿಸಿ", fetching: "ಪಡೆಯಲಾಗುತ್ತಿದೆ...", live: "ಲೈವ್",
    heroSub: "ಮೈಸೂರಿನ ಅತ್ಯಂತ ನಂಬಿಕಾರ್ಹ", heroTitle: "ಲೋಟಸ್ ಗೋಲ್ಡ್", heroHighlight: "ಕಂಪನಿ",
    heroHead: "ಮೈಸೂರಿನಲ್ಲಿ ನಿಮ್ಮ ಚಿನ್ನಕ್ಕೆ ಉತ್ತಮ ಬೆಲೆ ಪಡೆಯಿರಿ.",
    heroDesc: "ಬ್ಯಾಂಕ್‌ಗಳಲ್ಲಿ ಅಡವಿಟ್ಟಿರುವ ನಿಮ್ಮ ಚಿನ್ನವನ್ನು ಬಿಡಿಸಿ, ತಕ್ಷಣವೇ ನಗದು ಹಣವನ್ನು ಪಡೆಯಲು ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ. ನಿಖರವಾದ ಪರೀಕ್ಷೆ, ಪಾರದರ್ಶಕ ಬೆಲೆ, ಯಾವುದೇ ಗುಪ್ತ ಶುಲ್ಕಗಳಿಲ್ಲ.",
    btnContact: "ಈಗಲೇ ಸಂಪರ್ಕಿಸಿ", btnCheckRate: "ಇಂದಿನ ಚಿನ್ನದ ಬೆಲೆ ಪರಿಶೀಲಿಸಿ",
    reviews: "200+ ಸಂತೃಪ್ತ ಗ್ರಾಹಕರು", tested: "ಪರೀಕ್ಷಿಸಲಾಗಿದೆ",
    t1: "ಕಂಪ್ಯೂಟರ್ ಪರೀಕ್ಷೆ", t2: "100% ಸುರಕ್ಷಿತ", t3: "ಯಾವುದೇ ಗುಪ್ತ ಶುಲ್ಕಗಳಿಲ್ಲ", t4: "ಕರೆ: 99450 77757", t5: "2006 ರಿಂದ ನಂಬಿಕಾರ್ಹ", t6: "GST ಬಿಲ್ ಲಭ್ಯವಿದೆ", t7: "ಉತ್ತಮ ಮಾರುಕಟ್ಟೆ ದರ", t8: "ತಕ್ಷಣದ ನಗದು ಪಾವತಿ",
    
    // UPDATED ABOUT SECTION VARIABLES
    aboutTag: "ನಮ್ಮ ಕಥೆ", 
    aboutCity: "ಮೈಸೂರಿನಲ್ಲಿ",
    aboutTitle: "ನೀವು ನಂಬಬಹುದಾದ ಹೆಸರು", 
    
    aboutP1: "ಮೈಸೂರಿನ ದೇವರಾಜ ಮೊಹಲ್ಲಾದಲ್ಲಿರುವ ಲೋಟಸ್ ಗೋಲ್ಡ್ ಕಂಪನಿಯನ್ನು ಒಂದೇ ಉದ್ದೇಶದಿಂದ ಪ್ರಾರಂಭಿಸಲಾಯಿತು: ಜನರಿಗೆ ತಮ್ಮ ಚಿನ್ನವನ್ನು ಮಾರಾಟ ಮಾಡಲು ಸುರಕ್ಷಿತ, ಪ್ರಾಮಾಣಿಕ ಮತ್ತು ಸುಲಭವಾದ ವ್ಯವಸ್ಥೆಯನ್ನು ಕಲ್ಪಿಸುವುದು.",
    aboutP2: "2006 ರಿಂದ, ಸಾವಿರಾರು ಕುಟುಂಬಗಳಿಗೆ ತಮ್ಮ ಆಭರಣಗಳಿಗೆ ತಕ್ಷಣದ ನಗದು ಪಡೆಯಲು ಮತ್ತು ಅತಿ ಹೆಚ್ಚಿನ ಬಡ್ಡಿಯ ಬ್ಯಾಂಕ್ ಸಾಲದಿಂದ ಚಿನ್ನವನ್ನು ಬಿಡಿಸಲು ನಾವು ಸಹಾಯ ಮಾಡಿದ್ದೇವೆ. ನಾವು ಬೆಲೆಯನ್ನು ಅಂದಾಜು ಮಾಡುವುದಿಲ್ಲ; ಬದಲಾಗಿ, ಸುಧಾರಿತ ಕಂಪ್ಯೂಟರ್ ಪರೀಕ್ಷೆಯ ಮೂಲಕ ನಿಮ್ಮ ಕಣ್ಣೆದುರೇ ನಿಖರವಾದ ಲೈವ್ ಮಾರುಕಟ್ಟೆ ದರವನ್ನು ನೀಡುತ್ತೇವೆ.",
    compTesting: "ಕಂಪ್ಯೂಟರ್ ಪರೀಕ್ಷೆ", accurateScales: "ನಿಖರ ಮತ್ತು ಸುರಕ್ಷಿತ ಮಾಪಕಗಳು",
    est: "ಸ್ಥಾಪನೆಯಾದ ವರ್ಷ", happy: "ಸಂತೃಪ್ತ ಗ್ರಾಹಕರು", honest: "ಪ್ರಾಮಾಣಿಕ ಪ್ರಕ್ರಿಯೆ", hidden: "ಗುಪ್ತ ಶುಲ್ಕಗಳಿಲ್ಲ",
    srvTitle: "ನಾವು ನಿಮಗೆ ಹೇಗೆ ನೆರವಾಗುತ್ತೇವೆ?", srvSub: "ಮೈಸೂರಿನ ಅತ್ಯಂತ ವೇಗವಾದ ಮತ್ತು ಸುರಕ್ಷಿತ ಚಿನ್ನದ ಸೇವೆಗಳನ್ನು ನಾವು ಒದಗಿಸುತ್ತೇವೆ.",
    srv1: "ಚಿನ್ನದ ಮಾರಾಟಕ್ಕೆ ನಗದು", srv1Desc: "ನಿಮ್ಮ ಹಳೆಯ ಅಥವಾ ಬಳಸದ ಚಿನ್ನದ ಆಭರಣಗಳಿಗೆ ತಕ್ಷಣದ ನಗದು ಪಡೆಯಿರಿ. ನಿಮ್ಮ ಮುಂದೆಯೇ ಶುದ್ಧತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ, ಇಂದಿನ ಲೈವ್ ಮಾರುಕಟ್ಟೆ ದರವನ್ನು ಪಾವತಿಸುತ್ತೇವೆ.", btnCash: "ಇಂದೇ ನಗದು ಪಡೆಯಿರಿ",
    popular: "ಅತಿ ಹೆಚ್ಚು ಬೇಡಿಕೆ", srv2: "ಅಡವಿಟ್ಟ ಚಿನ್ನ ಬಿಡಿಸಿ", srv2Desc: "ನಿಮ್ಮ ಚಿನ್ನ ಬ್ಯಾಂಕ್ ಸಾಲದಲ್ಲಿ ಸಿಲುಕಿದೆಯೇ? ನಾವು ನಿಮ್ಮೊಂದಿಗೆ ಬ್ಯಾಂಕ್‌ಗೆ ಬಂದು, ಸಾಲವನ್ನು ತೀರಿಸಿ, ಉಳಿದ ಮೊತ್ತವನ್ನು ನಿಮಗೆ ನಗದು ರೂಪದಲ್ಲಿ ನೀಡುತ್ತೇವೆ.", btnFree: "ನಿಮ್ಮ ಚಿನ್ನವನ್ನು ಮುಕ್ತಗೊಳಿಸಿ",
    srv3: "ಚಿನ್ನದ ವಿನಿಮಯ", srv3Desc: "ಹಳೆಯ ವಿನ್ಯಾಸಗಳನ್ನು ಬದಲಾಯಿಸಲು ಬಯಸುವಿರಾ? ನೀವು ಹೊಸ ಚಿನ್ನವನ್ನು ಖರೀದಿಸಲು ಅನುಕೂಲವಾಗುವಂತೆ ನಿಮ್ಮ ಹಳೆಯ ಆಭರಣಗಳಿಗೆ ಅತ್ಯುತ್ತಮ ಮೌಲ್ಯವನ್ನು ನೀಡುತ್ತೇವೆ.", btnLearn: "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ",
    whyTitle: "ನಮ್ಮನ್ನು ಏಕೆ ಆರಿಸಬೇಕು?", whySub: "ಮೈಸೂರಿನ ಸಾವಿರಾರು ಕುಟುಂಬಗಳು ಲೋಟಸ್ ಗೋಲ್ಡ್ ಕಂಪನಿಯನ್ನು ಏಕೆ ನಂಬುತ್ತಾರೆ ಎಂದು ತಿಳಿಯಿರಿ.",
    faqTitle: "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು", faqSub: "ನಮ್ಮ ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡುವ ಮುನ್ನ ನೀವು ತಿಳಿದುಕೊಳ್ಳಬೇಕಾದ ಪ್ರಮುಖ ಅಂಶಗಳು.",
    revTitle: "ಗ್ರಾಹಕರ ಅನಿಸಿಕೆಗಳು", revSub: "ಪ್ರಾಮಾಣಿಕ ಪರೀಕ್ಷೆ, ತ್ವರಿತ ಪಾವತಿ ಮತ್ತು ಉತ್ತಮ ಸೇವೆಗಾಗಿ ಮೈಸೂರಿನ ಜನರ ನಂಬಿಕೆಗೆ ಪಾತ್ರವಾಗಿದೆ.", btnWrite: "ವಿಮರ್ಶೆ ಬರೆಯಿರಿ",
    ftDesc: "ಮೈಸೂರಿನ ಅತ್ಯಂತ ನಂಬಿಕಾರ್ಹ ಚಿನ್ನ ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಖರೀದಿ ಕಂಪನಿ. 100% ಪಾರದರ್ಶಕ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಆಧಾರಿತ ವಹಿವಾಟುಗಳನ್ನು ಅನುಭವಿಸಿ.",
    ftPhone: "ಫೋನ್:", ftEmail: "ಇಮೇಲ್:", ftLegal: "ಕಾನೂನು ಹಕ್ಕು ನಿರಾಕರಣೆ", ftLegalDesc: "ಇಲ್ಲಿ ಪ್ರದರ್ಶಿಸಲಾದ ಚಿನ್ನದ ದರಗಳು ಲೈವ್ ಆನ್‌ಲೈನ್ ಮಾರುಕಟ್ಟೆಯನ್ನು ಆಧರಿಸಿವೆ. ನಮ್ಮ ಸುಧಾರಿತ ಕಂಪ್ಯೂಟರ್ ಹಾರ್ಡ್‌ವೇರ್ ಬಳಸುವ ನೈಜ ಶುದ್ಧತೆಯ ಪರೀಕ್ಷೆಯ ಆಧಾರದ ಮೇಲೆ ಅಂತಿಮ ಪಾವತಿ ಮೌಲ್ಯವು ಬದಲಾಗಬಹುದು.", ftRights: "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ."
  }
};

const customerReviews = [
  { name: "Mageshwari", rating: 5, date: "13 Mar", text: "I am very happy with my experience at Lotus Gold Company. I released my pledged gold and sold it here, and the process was quick, transparent, and hassle-free." },
  { name: "Arvindh", rating: 5, date: "12 Mar", text: "Very good service from Lotus Gold Company they help me retrieve my gold from a gold loan and also assisted in selling it at a very good price." },
  { name: "Jude", rating: 5, date: "28 Mar", text: "The deal was transparent, got value as expected as online gold price.. I appreciate mr Rajesh.. Thank you." }
];

function App() {

  const [lang, setLang] = useState('en'); // 'en' or 'kn'
  const t = translations[lang]; // Active dictionary

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  
  const [isPriceUnlocked, setIsPriceUnlocked] = useState(false);
  const [goldRateText, setGoldRateText] = useState(t.fetching);
  const [goldRateNumber, setGoldRateNumber] = useState(7350);

  // Dynamic Ticker based on language
  const tickerItems = [
    { icon: <Microscope size={18} className="text-lotus-gold"/>, text: t.t1 },
    { icon: <ShieldCheck size={18} className="text-lotus-gold"/>, text: t.t2 },
    { icon: <CheckSquare size={18} className="text-lotus-gold"/>, text: t.t3 },
    { icon: <Phone size={18} className="text-lotus-gold"/>, text: t.t4 },
    { icon: <Award size={18} className="text-lotus-gold"/>, text: t.t5 },
    { icon: <FileText size={18} className="text-lotus-gold"/>, text: t.t6 },
    { icon: <Banknote size={18} className="text-lotus-gold"/>, text: t.t7 },
    { icon: <Zap size={18} className="text-lotus-gold"/>, text: t.t8 },
  ];

  // Dynamic FAQs based on language
  const faqs = lang === 'en' ? [
    { question: "What documents do I need to bring to sell gold?", answer: "To keep things safe and legal, please bring your valid Government ID (Aadhaar Card, Voter ID, or Passport) and your PAN Card. We may also ask for one passport-sized photo." },
    { question: "How do you test my gold? Will it be damaged?", answer: "Your gold is 100% safe. We use advanced computer testing machines that check the purity of your gold without melting, rubbing, or damaging it in any way." },
    { question: "How do I get my money?", answer: "We pay you instantly! You can choose Cash (up to legal limits), or we can transfer it directly to your bank account via IMPS, RTGS, or NEFT." },
    { question: "My gold is stuck in a bank loan. Can you help me?", answer: "Yes, this is our specialty! Our staff will go to the bank with you, pay off your pending loan, and then give you the remaining cash value of your gold." }
  ] : [
    { question: "ಚಿನ್ನವನ್ನು ಮಾರಾಟ ಮಾಡಲು ನಾನು ಯಾವ ದಾಖಲೆಗಳನ್ನು ತರಬೇಕು?", answer: "ಸುರಕ್ಷತೆ ಮತ್ತು ಕಾನೂನುಬದ್ಧತೆಗಾಗಿ, ದಯವಿಟ್ಟು ನಿಮ್ಮ ಮಾನ್ಯವಾದ ಸರ್ಕಾರಿ ಗುರುತಿನ ಚೀಟಿ (ಆಧಾರ್ ಕಾರ್ಡ್, ವೋಟರ್ ಐಡಿ, ಅಥವಾ ಪಾಸ್‌ಪೋರ್ಟ್) ಮತ್ತು ಪ್ಯಾನ್ ಕಾರ್ಡ್ ತನ್ನಿ." },
    { question: "ನನ್ನ ಚಿನ್ನವನ್ನು ನೀವು ಹೇಗೆ ಪರೀಕ್ಷಿಸುತ್ತೀರಿ? ಅದಕ್ಕೆ ಹಾನಿಯಾಗುತ್ತದೆಯೇ?", answer: "ನಿಮ್ಮ ಚಿನ್ನ 100% ಸುರಕ್ಷಿತವಾಗಿದೆ. ನಾವು ಸುಧಾರಿತ ಕಂಪ್ಯೂಟರ್ ಪರೀಕ್ಷಾ ಯಂತ್ರಗಳನ್ನು ಬಳಸುತ್ತೇವೆ, ಅದು ನಿಮ್ಮ ಚಿನ್ನವನ್ನು ಕರಗಿಸದೆ, ಉಜ್ಜದೆ ಅಥವಾ ಯಾವುದೇ ರೀತಿಯಲ್ಲಿ ಹಾನಿಯಾಗದಂತೆ ಶುದ್ಧತೆಯನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ." },
    { question: "ನನ್ನ ಹಣವನ್ನು ನಾನು ಹೇಗೆ ಪಡೆಯುವುದು?", answer: "ಬೆಲೆ ಒಪ್ಪಿಕೊಂಡ ತಕ್ಷಣವೇ ನಾವು ಪಾವತಿಸುತ್ತೇವೆ! ನೀವು ನಗದು ಪಡೆಯಬಹುದು, ಅಥವಾ ನಾವು ಅದನ್ನು IMPS, RTGS, ಅಥವಾ NEFT ಮೂಲಕ ನೇರವಾಗಿ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ವರ್ಗಾಯಿಸಬಹುದು." },
    { question: "ನನ್ನ ಚಿನ್ನ ಬ್ಯಾಂಕ್ ಸಾಲದಲ್ಲಿ ಸಿಲುಕಿದೆ. ನೀವು ಸಹಾಯ ಮಾಡಬಹುದೇ?", answer: "ಹೌದು! ನಿಮ್ಮ ಚಿನ್ನವು ಬ್ಯಾಂಕ್‌ನಲ್ಲಿದ್ದರೆ, ನಮ್ಮ ಸಿಬ್ಬಂದಿ ನಿಮ್ಮೊಂದಿಗೆ ಬ್ಯಾಂಕ್‌ಗೆ ಬರುತ್ತಾರೆ, ನಿಮ್ಮ ಬಾಕಿ ಸಾಲವನ್ನು ತೀರಿಸುತ್ತಾರೆ ಮತ್ತು ನಿಮ್ಮ ಚಿನ್ನದ ಉಳಿದ ನಗದು ಮೌಲ್ಯವನ್ನು ನಿಮಗೆ ನೀಡುತ್ತಾರೆ." }
  ];

  // UNLIMITED LIVE GOLD API 
  useEffect(() => {
    const fetchLiveRate = async () => {
      try {
        setGoldRateText(translations[lang].fetching);
        const goldRes = await fetch("https://api.gold-api.com/price/XAU");
        if (!goldRes.ok) throw new Error("Gold API offline");
        const goldData = await goldRes.json();
        const priceUsdPerOunce = goldData.price;

        const forexRes = await fetch("https://open.er-api.com/v6/latest/USD");
        if (!forexRes.ok) throw new Error("Forex API offline");
        const forexData = await forexRes.json();
        const inrRate = forexData.rates.INR;

        const priceInrPerOunce = priceUsdPerOunce * inrRate;
        const pricePerGram = Math.round(priceInrPerOunce / 31.1034768);

        setGoldRateText(`₹${pricePerGram.toLocaleString('en-IN')}/g`);
        setGoldRateNumber(pricePerGram);
      } catch (error) {
        console.error("Failed to fetch live rates:", error);
        setGoldRateText("₹7,350/g (Board Rate)");
        setGoldRateNumber(7350);
      }
    };
    fetchLiveRate();
    const interval = setInterval(fetchLiveRate, 300000); 
    return () => clearInterval(interval);
  }, [lang]);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FDF8EE] overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="bg-white/95 backdrop-blur-md px-6 py-4 fixed w-full top-0 left-0 shadow-sm border-b border-gray-100 z-50 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={myLogo} alt="Lotus Gold Company" className="h-10 md:h-16 w-auto object-contain cursor-pointer transform scale-[2.5] md:scale-[2.5] origin-left image-render-crisp" />
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-bold text-gray-700">
            <a href="/" className="hover:text-lotus-gold transition-colors">{t.navHome}</a>
            <a href="#about" className="hover:text-lotus-gold transition-colors">{t.navAbout}</a>
            <a href="#services" className="hover:text-lotus-gold transition-colors">{t.navServices}</a>
            <a href="#faq" className="hover:text-lotus-gold transition-colors">{t.navFaq}</a>
            <button onClick={() => setIsModalOpen(true)} className="hover:text-lotus-gold transition-colors cursor-pointer text-lotus-dark">{t.navContact}</button>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            {/* LANGUAGE TOGGLE SWITCH */}
            <div className="flex items-center bg-gray-100/80 p-1 rounded-full border border-gray-200/50 shadow-inner">
              <button onClick={() => setLang('en')} className={`px-4 py-1.5 rounded-full text-xs font-black tracking-wide transition-all duration-300 ${lang === 'en' ? 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] text-lotus-dark' : 'text-gray-500 hover:text-gray-700'}`}>
                ENG
              </button>
              <button onClick={() => setLang('kn')} className={`px-4 py-1.5 rounded-full text-xs font-black tracking-wide transition-all duration-300 ${lang === 'kn' ? 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] text-lotus-dark' : 'text-gray-500 hover:text-gray-700'}`}>
                ಕನ್ನಡ
              </button>
            </div>

            <button onClick={() => setIsModalOpen(true)} className="bg-lotus-gold text-lotus-dark font-bold px-6 py-2.5 rounded-lg hover:bg-[#f5c35b] transition-all shadow-[0_0_15px_rgba(232,177,62,0.4)] flex justify-center items-center min-w-[150px] cursor-pointer">
              {!isPriceUnlocked ? (
                <span className="flex items-center gap-2"><Unlock size={16} /> {t.unlockRate}</span>
              ) : goldRateText === t.fetching ? (
                <span className="animate-pulse">{t.fetching}</span>
              ) : (
                <span>{t.live}: {goldRateText}</span>
              )}
            </button>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
             {/* MOBILE LANGUAGE TOGGLE */}
            <div className="flex items-center bg-gray-100 p-1 rounded-full shadow-inner">
              <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${lang === 'en' ? 'bg-white shadow-sm text-lotus-dark' : 'text-gray-500'}`}>EN</button>
              <button onClick={() => setLang('kn')} className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${lang === 'kn' ? 'bg-white shadow-sm text-lotus-dark' : 'text-gray-500'}`}>ಕ</button>
            </div>
            <button className="text-lotus-dark focus:outline-none cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl py-6 px-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-2">
            <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-gray-800 hover:text-lotus-gold">{t.navHome}</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-gray-800 hover:text-lotus-gold">{t.navAbout}</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-gray-800 hover:text-lotus-gold">{t.navServices}</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-gray-800 hover:text-lotus-gold">{t.navFaq}</a>
            <button onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }} className="text-lg font-bold text-left text-gray-800 hover:text-lotus-gold cursor-pointer">
              {t.navContact}
            </button>
            <div className="pt-4 border-t border-gray-100">
               <button onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }} className="bg-lotus-gold text-lotus-dark font-bold px-6 py-3.5 rounded-lg flex items-center justify-center shadow-md w-full cursor-pointer">
                  {!isPriceUnlocked ? (
                    <span className="flex items-center gap-2"><Unlock size={18} /> {t.unlockRate}</span>
                  ) : goldRateText === t.fetching ? (
                    t.fetching
                  ) : (
                    `${t.live}: ${goldRateText}`
                  )}
               </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <main className="pt-28 lg:pt-36 pb-16 bg-[#1A0510] text-white relative overflow-hidden flex items-center min-h-[90vh]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-lotus-light rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[50%] bg-lotus-gold rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between w-full relative z-10 gap-16">
          <div className="flex-1 space-y-10 max-w-2xl relative z-20">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-2">
                <p className="text-lotus-gold font-bold text-sm tracking-widest uppercase">{t.heroSub}</p>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] tracking-tight">
                {t.heroTitle} <br />
                <span className="bg-gradient-to-r from-[#F9D423] via-[#FF4E50] to-[#F9D423] text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(249,212,35,0.3)]">
                  {t.heroHighlight}
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed max-w-xl">
                {t.heroHead}
              </p>
              <p className="text-lg text-white/80 font-medium leading-relaxed max-w-xl">
                {t.heroDesc}
              </p>
            </div>

            <div className="flex flex-wrap gap-5 pt-4">
              <button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-lotus-gold to-[#f5c35b] text-lotus-dark font-black px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(232,177,62,0.4)] flex items-center gap-2 cursor-pointer">
                {t.btnContact} <ArrowRight size={20} />
              </button>
              <button onClick={() => setIsModalOpen(true)} className="bg-white/5 border border-white/20 backdrop-blur-md text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2 cursor-pointer">
                {t.btnCheckRate}
              </button>
            </div>
          </div>

          <div className="flex-1 lg:flex justify-end relative w-full lg:w-auto mt-12 lg:mt-0">
             <div className="relative w-full max-w-md mx-auto lg:mx-0 animate-float-slow">
                {/* Background glow behind the lady */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[50%] bg-gradient-to-t from-lotus-gold/50 to-transparent blur-3xl -z-10 rounded-full"></div>
                
                <div className="relative w-full overflow-visible group flex justify-center">
                  <img 
                    src={heroModel} 
                    alt="Lotus Gold Company - Premium Gold Buyer Mysuru" 
                    className="w-full h-auto object-contain object-bottom transform group-hover:scale-[1.03] transition-transform duration-700"
                    style={{ 
                      mixBlendMode: 'screen',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                      maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
                    }}
                  />
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
                      <p className="text-xs font-bold text-white tracking-wide mt-1">{t.reviews}</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-12 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-full shadow-2xl animate-float-slow z-30" style={{ animationDelay: '1s' }}>
                  <div className="bg-lotus-dark w-16 h-16 rounded-full flex flex-col items-center justify-center border border-lotus-gold/30">
                    <Microscope size={24} className="text-lotus-gold mb-0.5" />
                    <span className="text-[8px] font-bold text-white uppercase tracking-wider">{t.tested}</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </main>

      {/* THE MARQUEE BRIDGE */}
      <div className="bg-[#1A0510] py-4 overflow-hidden flex relative z-20 w-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-y border-lotus-gold/20">
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

      {/* CREATIVE CALCULATOR SECTION */}
      <section className="py-24 bg-[#1A0510] px-6 border-y border-lotus-gold/20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-lotus-gold/10 to-transparent blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-lotus-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-lotus-gold/10 border border-lotus-gold/20 mb-2">
              <p className="text-lotus-gold font-bold text-sm tracking-widest uppercase">{t.live}</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              {lang === 'en' ? "Calculate Your Gold's True Value" : "ನಿಮ್ಮ ಚಿನ್ನದ ನೈಜ ಮೌಲ್ಯವನ್ನು ಲೆಕ್ಕಹಾಕಿ"}
            </h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {lang === 'en' 
                ? "Don't guess the price. Use our live market calculator to get an instant estimate of your gold's worth. We guarantee 100% transparency and accurate weighing."
                : "ಬೆಲೆಯನ್ನು ಅಂದಾಜು ಮಾಡಬೇಡಿ. ನಿಮ್ಮ ಚಿನ್ನದ ಮೌಲ್ಯದ ತಕ್ಷಣದ ಅಂದಾಜು ಪಡೆಯಲು ನಮ್ಮ ಲೈವ್ ಮಾರುಕಟ್ಟೆ ಮಾಪಕವನ್ನು ಬಳಸಿ."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
               <div className="bg-white/5 border border-white/10 backdrop-blur-md px-6 py-5 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                 <div className="bg-gradient-to-br from-lotus-gold to-yellow-600 p-3 rounded-full shadow-lg">
                   <Activity size={24} className="text-lotus-dark" />
                 </div>
                 <div className="text-left">
                   <p className="text-white font-bold tracking-wide">{lang === 'en' ? "Live Market Rates" : "ಲೈವ್ ಮಾರುಕಟ್ಟೆ ದರಗಳು"}</p>
                   <p className="text-xs text-lotus-gold mt-1 font-medium">{lang === 'en' ? "Updated every 5 mins" : "ಪ್ರತಿ 5 ನಿಮಿಷಗಳಿಗೊಮ್ಮೆ ನವೀಕರಿಸಲಾಗುತ್ತದೆ"}</p>
                 </div>
               </div>
               <div className="bg-white/5 border border-white/10 backdrop-blur-md px-6 py-5 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                 <div className="bg-gradient-to-br from-lotus-gold to-yellow-600 p-3 rounded-full shadow-lg">
                   <Scale size={24} className="text-lotus-dark" />
                 </div>
                 <div className="text-left">
                   <p className="text-white font-bold tracking-wide">{lang === 'en' ? "Accurate Valuation" : "ನಿಖರ ಮೌಲ್ಯಮಾಪನ"}</p>
                   <p className="text-xs text-lotus-gold mt-1 font-medium">{lang === 'en' ? "No hidden deductions" : "ಯಾವುದೇ ಗುಪ್ತ ಕಡಿತಗಳಿಲ್ಲ"}</p>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="flex-1 w-full lg:max-w-lg mt-8 lg:mt-0">
             <div className="relative group animate-float-slow">
                <div className="absolute -inset-1 bg-gradient-to-r from-lotus-gold to-yellow-600 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-500"></div>
                <div className="relative transform group-hover:-translate-y-2 transition-transform duration-500">
                  <GoldCalculator liveRate={goldRateNumber} lang={lang} />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-24 bg-[#FDF8EE] px-6 border-b border-[#EDE5D0] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative">
          
          <div className="absolute -left-32 -top-32 w-96 h-96 bg-lotus-gold/5 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="flex-1 space-y-8 relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-lotus-light/10 border border-lotus-light/20 mb-2">
              <p className="text-lotus-dark font-bold text-sm tracking-widest uppercase">{t.aboutTag}</p>
            </div>            
           
            {lang === 'en' ? (              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-lotus-dark leading-tight tracking-tight">
                {t.aboutTitle} <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">{t.aboutCity}</span>
              </h2>
            ) : (              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-lotus-dark leading-tight tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">{t.aboutCity}</span> <br className="hidden md:block"/>
                {t.aboutTitle}
              </h2>
            )}
            
            <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed">
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
            </div>
            
            <div className="pt-6 flex items-center gap-6">
               <img src={myLogo} alt="Lotus Gold Logo" className="h-14 w-auto object-contain transform scale-125 origin-left" />
               <div className="pl-6 border-l-2 border-gray-200">
                 <p className="font-black text-lotus-dark text-xl tracking-tight">{t.compTesting}</p>
                 <p className="text-sm text-lotus-gold font-bold uppercase tracking-wider">{t.accurateScales}</p>
               </div>
            </div>
          </div>

          <div className="flex-1 w-full relative z-10">
             <div className="grid grid-cols-2 gap-4 md:gap-6">
               <div className="bg-white p-8 rounded-[2rem] border-l-4 border-lotus-gold border-t border-r border-b border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow group">
                 <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-lotus-dark to-lotus-light mb-2 group-hover:scale-105 transition-transform origin-left">2006</div>
                 <p className="text-gray-500 font-bold uppercase tracking-wide text-sm">{t.est}</p>
               </div>
               
               <div className="bg-white p-8 rounded-[2rem] border-l-4 border-lotus-gold border-t border-r border-b border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow translate-y-0 md:translate-y-8 group">
                 <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-lotus-dark to-lotus-light mb-2 group-hover:scale-105 transition-transform origin-left">10k+</div>
                 <p className="text-gray-500 font-bold uppercase tracking-wide text-sm">{t.happy}</p>
               </div>

               <div className="bg-white p-8 rounded-[2rem] border-l-4 border-lotus-gold border-t border-r border-b border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow group">
                 <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-lotus-dark to-lotus-light mb-2 group-hover:scale-105 transition-transform origin-left">100%</div>
                 <p className="text-gray-500 font-bold uppercase tracking-wide text-sm">{t.honest}</p>
               </div>

               <div className="bg-gradient-to-br from-lotus-gold to-yellow-500 p-8 rounded-[2rem] shadow-lg hover:shadow-xl transition-shadow translate-y-0 md:translate-y-8 group">
                 <div className="text-4xl lg:text-5xl font-black text-lotus-dark mb-2 group-hover:scale-105 transition-transform origin-left">0%</div>
                 <p className="text-lotus-dark/80 font-bold uppercase tracking-wide text-sm">{t.hidden}</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-[#FDF8EE] px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-lotus-dark mb-4">{t.srvTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">{t.srvSub}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="bg-lotus-light/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-lotus-gold group-hover:rotate-12 transition-all">
                <Coins size={32} className="text-lotus-dark" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.srv1}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{t.srv1Desc}</p>
              <button onClick={() => setIsModalOpen(true)} className="text-lotus-light font-bold flex items-center gap-2 group-hover:text-lotus-gold transition-colors cursor-pointer">
                {t.btnCash} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="bg-gradient-to-b from-lotus-dark to-[#1A0510] p-8 rounded-[2rem] shadow-2xl transform md:-translate-y-6 relative group border border-white/10">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-lotus-gold to-yellow-500 text-lotus-dark text-xs font-black px-4 py-1.5 rounded-bl-xl rounded-tr-[2rem] uppercase tracking-wider shadow-md">{t.popular}</div>
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Unlock size={32} className="text-lotus-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{t.srv2}</h3>
              <p className="text-white/80 mb-8 leading-relaxed">{t.srv2Desc}</p>
              <button onClick={() => setIsModalOpen(true)} className="text-lotus-gold font-bold flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                {t.btnFree} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform"/>
              </button>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="bg-lotus-light/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-lotus-gold group-hover:-rotate-12 transition-all">
                <RefreshCw size={32} className="text-lotus-dark" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.srv3}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{t.srv3Desc}</p>
              <button onClick={() => setIsModalOpen(true)} className="text-lotus-light font-bold flex items-center gap-2 group-hover:text-lotus-gold transition-colors cursor-pointer">
                {t.btnLearn} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform"/>
              </button>
            </div>
          </div>
        </div>
      </section>      

      {/* HOW IT WORKS (PROCESS) SECTION */}
      <section className="py-24 bg-[#FDF8EE] px-6 border-b border-[#EDE5D0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-lotus-dark mb-4">
              {lang === 'en' ? "How It Works" : "ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              {lang === 'en' ? "Get instant cash for your gold in 3 simple steps." : "ನಿಮ್ಮ ಚಿನ್ನಕ್ಕೆ ಕೇವಲ 3 ಸರಳ ಹಂತಗಳಲ್ಲಿ ತ್ವರಿತ ನಗದು ಪಡೆಯಿರಿ."}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative mt-8">
            {/* Step 1 */}
            <div className="bg-white rounded-3xl p-8 border border-[#EDE5D0] relative text-center flex flex-col items-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="w-16 h-16 bg-lotus-dark text-white font-black text-2xl flex items-center justify-center rounded-full border-4 border-white shadow-lg -mt-16 mb-6">1</div>
              <MapPin size={40} className="text-lotus-gold mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{lang === 'en' ? "Visit Branch" : "ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ"}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{lang === 'en' ? "Bring your gold and valid ID proofs to our secure Mysuru branch." : "ನಿಮ್ಮ ಚಿನ್ನ ಮತ್ತು ಮಾನ್ಯ ಗುರುತಿನ ಚೀಟಿಗಳೊಂದಿಗೆ ನಮ್ಮ ಮೈಸೂರು ಶಾಖೆಗೆ ಬನ್ನಿ."}</p>
            </div>
            {/* Step 2 */}
            <div className="bg-white rounded-3xl p-8 border border-[#EDE5D0] relative text-center flex flex-col items-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="w-16 h-16 bg-lotus-dark text-white font-black text-2xl flex items-center justify-center rounded-full border-4 border-white shadow-lg -mt-16 mb-6">2</div>
              <SearchCheck size={40} className="text-lotus-gold mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{lang === 'en' ? "Computer Testing" : "ಕಂಪ್ಯೂಟರ್ ಪರೀಕ್ಷೆ"}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{lang === 'en' ? "We test purity accurately without melting or damaging your gold." : "ನಿಮ್ಮ ಚಿನ್ನವನ್ನು ಕರಗಿಸದೆ, ನಿಖರವಾಗಿ ಶುದ್ಧತೆಯನ್ನು ಪರೀಕ್ಷಿಸುತ್ತೇವೆ."}</p>
            </div>
            {/* Step 3 */}
            <div className="bg-white rounded-3xl p-8 border border-[#EDE5D0] relative text-center flex flex-col items-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="w-16 h-16 bg-lotus-dark text-white font-black text-2xl flex items-center justify-center rounded-full border-4 border-white shadow-lg -mt-16 mb-6">3</div>
              <CheckCircle2 size={40} className="text-lotus-gold mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{lang === 'en' ? "Instant Cash" : "ತಕ್ಷಣದ ನಗದು"}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{lang === 'en' ? "Get paid immediately in cash or via direct bank transfer at live rates." : "ಲೈವ್ ದರದಲ್ಲಿ ತಕ್ಷಣ ನಗದು ಅಥವಾ ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆಯ ಮೂಲಕ ಹಣ ಪಡೆಯಿರಿ."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAROUSEL SECTION */}
      <section className="py-24 bg-[#1A0510] relative overflow-hidden flex flex-col items-center border-y border-lotus-gold/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-gradient-to-b from-lotus-gold/5 to-transparent blur-[120px] pointer-events-none"></div>
        <div className="text-center mb-16 relative z-10 px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 mb-4 tracking-tight">
            {t.whyTitle}
          </h2>
          <p className="text-lotus-gold font-medium text-lg tracking-wide max-w-2xl mx-auto">
            {t.whySub}
          </p>
        </div>
        
        <div className="relative w-full max-w-[100vw]">
          <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-[#1A0510] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-[#1A0510] to-transparent z-20 pointer-events-none"></div>

          <div className="flex overflow-x-auto gap-6 md:gap-10 px-8 md:px-[20vw] pb-16 pt-4 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing items-center">
            {advantageImages.map((img, idx) => (
              <div 
                key={idx} 
                className="relative w-[80vw] md:w-[380px] lg:w-[420px] flex-shrink-0 snap-center rounded-[2.5rem] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.8)] border border-lotus-gold/10 group transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_25px_50px_rgba(232,177,62,0.25)] hover:border-lotus-gold/50 bg-[#280D1B]"
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

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-[#FDF8EE] px-6 border-b border-[#EDE5D0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-lotus-dark mb-4">{t.faqTitle}</h2>
            <p className="text-lg text-gray-600 font-medium">{t.faqSub}</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openFaq === index ? 'border-lotus-gold shadow-lg' : 'border-gray-200 shadow-sm hover:border-gray-300'}`}
              >
                <button 
                  onClick={() => toggleFaq(index)} 
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className={`text-lg font-bold ${openFaq === index ? 'text-lotus-dark' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  <span className={`p-2 rounded-full flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'bg-lotus-gold/10 text-lotus-gold rotate-180' : 'bg-gray-50 text-gray-400'}`}>
                    <ChevronDown size={20} />
                  </span>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 leading-relaxed font-medium pt-2 border-t border-gray-100">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="py-20 bg-[#FDF8EE] px-6 text-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-serif font-bold text-lotus-dark mb-4">{t.revTitle}</h2>
              <p className="text-lg text-gray-600 max-w-2xl">{t.revSub}</p>
            </div>
            <button onClick={() => setIsReviewModalOpen(true)} className="flex items-center gap-2 border-2 border-lotus-gold text-lotus-dark font-bold px-6 py-3 rounded-full hover:bg-lotus-gold hover:text-white transition-all shadow-sm cursor-pointer whitespace-nowrap">
              <Star size={18} /> {t.btnWrite}
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

      {/* FIND US & MAPS SECTION */}
      <section className="py-20 bg-[#FDF8EE] px-6 border-b border-[#EDE5D0]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-serif font-bold text-lotus-dark">
              {lang === 'en' ? "Visit Our Mysuru Branch" : "ನಮ್ಮ ಮೈಸೂರು ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ"}
            </h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              {lang === 'en' ? "We are conveniently located in Devaraja Mohalla. Drop by for a free, transparent evaluation of your gold." : "ನಾವು ದೇವರಾಜ ಮೊಹಲ್ಲಾದಲ್ಲಿ ಅನುಕೂಲಕರ ಸ್ಥಳದಲ್ಲಿದ್ದೇವೆ. ನಿಮ್ಮ ಚಿನ್ನದ ಉಚಿತ, ಪಾರದರ್ಶಕ ಮೌಲ್ಯಮಾಪನಕ್ಕಾಗಿ ಭೇಟಿ ನೀಡಿ."}
            </p>
            <div className="flex items-start gap-4 pt-4">
              <div className="bg-lotus-gold/20 p-3 rounded-full mt-1">
                <MapPin size={24} className="text-lotus-dark" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Lotus Gold Company</h4>
                <p className="text-gray-600">Hompu Complex, Devaraja Mohalla</p>
                <p className="text-gray-600">Mysuru, Karnataka 570001</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7796.205001702663!2d76.6488985!3d12.3088837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf71006badafdb%3A0xf73ac58aea239eab!2sHompu%20complex!5e0!3m2!1sen!2sin!4v1777228055696!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}      
      <footer className="bg-[#1A0510] text-white/70 py-16 px-6 border-t border-lotus-gold/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mb-12 text-center md:text-left">
          
          {/* Column 1: Brand & Logo */}
          <div className="flex flex-col items-center md:items-start">            
            <div className="h-16 mb-6 mt-2 flex items-center justify-center md:justify-start w-full">
              <img 
                src={myLogo} 
                alt="Lotus Gold Company" 
                loading="lazy"
                className="h-full w-auto object-contain brightness-0 invert transform scale-[2.2] origin-center md:origin-left image-render-crisp" 
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-center md:text-left text-white/70">
              {t.ftDesc}
            </p>
          </div>

          {/* Column 2: Contact Info & Socials */}
          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-sm">{t.navContact}</h4>
            <div className="space-y-3 text-sm">              
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={16} className="text-lotus-gold" />
                <span className="font-bold">{t.ftPhone}</span> +91 99450 77757
              </p>

              {/* Email */}
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FileText size={16} className="text-lotus-gold" />
                <span className="font-bold">{t.ftEmail}</span> 
                <a href="mailto:support@lotusgoldcompany.com" className="hover:text-white transition-colors underline decoration-lotus-gold/50 underline-offset-4">
                  support@lotusgoldcompany.com
                </a>
              </p>

              {/* Instagram Link */}
              <p className="flex items-center justify-center md:justify-start gap-2 pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lotus-gold">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span className="font-bold">Instagram:</span> 
                <a 
                  href="https://www.instagram.com/lotusgoldcompany/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors underline decoration-lotus-gold/50 underline-offset-4"
                >
                  @lotusgoldcompany
                </a>
              </p>

              {/* Facebook */}
              <p className="flex items-center justify-center md:justify-start gap-2 pt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lotus-gold">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
                <span className="font-bold">Facebook:</span> 
                <a href="https://www.facebook.com/profile.php?id=61576416442085" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-lotus-gold/50 underline-offset-4">
                  Lotus Gold Company
                </a>
              </p>

              {/* JustDial Verified Listing */}
              <p className="flex items-center justify-center md:justify-start gap-2 pt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-lotus-gold flex-shrink-0">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
                <span className="font-bold">JustDial:</span>
                <a
                  href="https://www.justdial.com/Mysore/LOTUS-GOLD-COMPANY-Behind-Chandramoulashwara-Temple-Devaraja-Mohalla/0821PX821-X821-260307163047-Y3F8_BZDET"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline decoration-lotus-gold/50 underline-offset-4"
                >
                  Verified Listing ✓
                </a>
              </p>
            </div>
          </div>

          {/* Column 3: Legal & Disclaimer */}
          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-sm">{t.ftLegal}</h4>
            <p className="text-xs leading-relaxed text-white/50 mb-4">
              {t.ftLegalDesc}
            </p>
            <div className="flex flex-col gap-3 mt-4 text-xs font-bold text-lotus-gold/80">
              <a href="/privacy-policy" className="hover:text-white transition-colors underline underline-offset-2">Privacy Policy</a>
              <a href="/terms-conditions" className="hover:text-white transition-colors underline underline-offset-2">Terms & Conditions</a>
            </div>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Lotus Gold Company. {t.ftRights} | Compliant with KYC & AML regulations.</p>
        </div>
      </footer>

      <ContactForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onUnlock={() => setIsPriceUnlocked(true)} 
      />
      <ReviewModal isOpen={isReviewModalOpen} onClose={() => setIsReviewModalOpen(false)} />
      <WhatsAppButton />
    </div>
  );
}

export default App;