import React, { useState } from 'react';
import { Calculator, ArrowRightLeft } from 'lucide-react';

const GoldCalculator = ({ liveRate, lang }) => {
  const [mode, setMode] = useState('gramsToMoney'); // 'gramsToMoney' or 'moneyToGrams'
  const [inputValue, setInputValue] = useState('');
  const [purity, setPurity] = useState(22); // 22k by default

  const purityMultiplier = purity / 24;
  const effectiveRate = liveRate * purityMultiplier;

  const calculateResult = () => {
    if (!inputValue || isNaN(inputValue)) return 0;
    const val = parseFloat(inputValue);
    if (mode === 'gramsToMoney') {
      return Math.round(val * effectiveRate).toLocaleString('en-IN');
    } else {
      return (val / effectiveRate).toFixed(2);
    }
  };

  const t = lang === 'en' ? {
    title: "Gold Value Estimator",
    sub: "Calculate your gold's estimated value based on live market rates.",
    modeGrams: "I have Gold (Grams)",
    modeMoney: "I need Cash (₹)",
    inputGrams: "Enter weight in grams",
    inputMoney: "Enter amount required",
    purityLabel: "Gold Purity",
    resultTextGrams: "Estimated Cash Value:",
    resultTextMoney: "Required Gold Weight:",
    disclaimer: "Note: This is an estimate. Final value depends on computer testing.",
  } : {
    title: "ಚಿನ್ನದ ಮೌಲ್ಯ ಮಾಪಕ",
    sub: "ಲೈವ್ ಮಾರುಕಟ್ಟೆ ದರಗಳ ಆಧಾರದ ಮೇಲೆ ನಿಮ್ಮ ಚಿನ್ನದ ಅಂದಾಜು ಮೌಲ್ಯವನ್ನು ಲೆಕ್ಕಹಾಕಿ.",
    modeGrams: "ನನ್ನ ಬಳಿ ಚಿನ್ನವಿದೆ (ಗ್ರಾಂ)",
    modeMoney: "ನನಗೆ ನಗದು ಬೇಕು (₹)",
    inputGrams: "ತೂಕವನ್ನು ಗ್ರಾಂಗಳಲ್ಲಿ ನಮೂದಿಸಿ",
    inputMoney: "ಅಗತ್ಯವಿರುವ ಮೊತ್ತವನ್ನು ನಮೂದಿಸಿ",
    purityLabel: "ಚಿನ್ನದ ಶುದ್ಧತೆ",
    resultTextGrams: "ಅಂದಾಜು ನಗದು ಮೌಲ್ಯ:",
    resultTextMoney: "ಅಗತ್ಯವಿರುವ ಚಿನ್ನದ ತೂಕ:",
    disclaimer: "ಸೂಚನೆ: ಇದು ಕೇವಲ ಅಂದಾಜು. ಕಂಪ್ಯೂಟರ್ ಪರೀಕ್ಷೆಯ ಆಧಾರದ ಮೇಲೆ ಅಂತಿಮ ಮೌಲ್ಯ ನಿರ್ಧರಿಸಲಾಗುತ್ತದೆ.",
  };

  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 max-w-lg mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-lotus-gold to-yellow-500"></div>
      
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-lotus-gold/20 p-3 rounded-full text-lotus-dark">
          <Calculator size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-black text-lotus-dark">{t.title}</h3>
          <p className="text-sm text-gray-500 font-medium">{t.sub}</p>
        </div>
      </div>

      <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
        <button
          onClick={() => { setMode('gramsToMoney'); setInputValue(''); }}
          className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${mode === 'gramsToMoney' ? 'bg-white shadow-sm text-lotus-dark' : 'text-gray-500'}`}
        >
          {t.modeGrams}
        </button>
        <button
          onClick={() => { setMode('moneyToGrams'); setInputValue(''); }}
          className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${mode === 'moneyToGrams' ? 'bg-white shadow-sm text-lotus-dark' : 'text-gray-500'}`}
        >
          {t.modeMoney}
        </button>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">{mode === 'gramsToMoney' ? t.inputGrams : t.inputMoney}</label>
          <div className="relative">
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="0"
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-lg font-bold rounded-xl px-4 py-3 pl-12 focus:ring-2 focus:ring-lotus-gold focus:border-lotus-gold transition-all outline-none"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">
              {mode === 'gramsToMoney' ? 'g' : '₹'}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">{t.purityLabel}</label>
          <select
            value={purity}
            onChange={(e) => setPurity(Number(e.target.value))}
            className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-bold rounded-xl px-4 py-3 focus:ring-2 focus:ring-lotus-gold outline-none"
          >
            <option value={24}>24k (99.9%)</option>
            <option value={22}>22k (91.6%)</option>
            <option value={18}>18k (75.0%)</option>
            <option value={14}>14k (58.3%)</option>
          </select>
        </div>

        <div className="bg-[#FFFDF9] border border-lotus-gold/30 p-5 rounded-xl mt-6 flex flex-col items-center justify-center text-center">
          <p className="text-sm text-gray-500 font-bold mb-1 uppercase tracking-wide">
            {mode === 'gramsToMoney' ? t.resultTextGrams : t.resultTextMoney}
          </p>
          <p className="text-4xl font-black text-lotus-dark">
            {mode === 'gramsToMoney' ? '₹' : ''}
            {inputValue ? calculateResult() : '0'}
            {mode === 'moneyToGrams' ? ' g' : ''}
          </p>
        </div>

        <p className="text-xs text-center text-gray-400 font-medium">
          {t.disclaimer}
        </p>
      </div>
    </div>
  );
};

export default GoldCalculator;
