import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#2B0917] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-lotus-gold rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[50%] bg-lotus-gold rounded-full blur-[150px] opacity-10"></div>

      <div className="max-w-md w-full text-center relative z-10">
        {/* Animated Icon */}
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 bg-lotus-gold blur-2xl opacity-20 animate-pulse"></div>
          <div className="relative bg-white/5 border border-white/10 p-8 rounded-full backdrop-blur-xl">
            <Search size={64} className="text-lotus-gold mx-auto" />
          </div>
        </div>

        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-lotus-gold to-yellow-700 mb-4">
          404
        </h1>
        
        <h2 className="text-2xl font-bold text-white mb-4">
          This Treasure is Missing
        </h2>
        
        <p className="text-white/60 mb-10 leading-relaxed font-medium">
          The page you are looking for has been moved or doesn't exist. Let's get you back to the vault.
        </p>

        <a 
          href="/" 
          className="inline-flex items-center gap-3 bg-lotus-gold text-lotus-dark font-black px-8 py-4 rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(232,177,62,0.3)]"
        >
          <ArrowLeft size={20} /> Back to Lotus Gold
        </a>
      </div>
    </div>
  );
}