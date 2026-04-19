import { useState } from 'react';
import { X, Send, Loader2, CheckCircle, AlertCircle, Star } from 'lucide-react';

export default function ReviewModal({ isOpen, onClose }) {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [hoveredStar, setHoveredStar] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5, // Default to 5 stars!
    message: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStarClick = (ratingValue) => {
    setFormData({ ...formData, rating: ratingValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Prepare data for Web3Forms
    const submissionData = {
      ...formData,
      access_key: "f5acb993-861a-473e-a614-5d3b6ecc7b6a", // Using your exact access key
      subject: `⭐️ New ${formData.rating}-Star Review from ${formData.name}`,
      from_name: "Lotus Gold Reviews"
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        // Reset form and close modal after 2.5 seconds
        setTimeout(() => {
          setFormData({ name: '', rating: 5, message: '' });
          setStatus('idle');
          onClose();
        }, 2500);
      } else {
        setStatus('error');
        console.error("Review submission failed:", result);
      }
    } catch (error) {
      setStatus('error');
      console.error("Network error:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Blurred Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2B0917] to-[#4B122C] p-6 text-white flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-black">Share Your Experience</h3>
            <p className="text-[#E8B13E] text-sm font-medium mt-1">We value your feedback.</p>
          </div>
          <button 
            onClick={onClose} 
            className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Dynamic Body Area */}
        <div className="p-8">
          {/* SUCCESS STATE */}
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={40} className="text-green-500" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
              <p className="text-gray-600 font-medium">Your review has been successfully submitted.</p>
            </div>
          ) : (
            /* FORM STATE */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Error Message */}
              {status === 'error' && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm font-bold border border-red-100">
                  <AlertCircle size={18} /> Something went wrong. Please try again.
                </div>
              )}

              {/* Interactive Star Rating */}
              <div className="flex flex-col items-center justify-center py-2">
                <label className="block text-sm font-bold text-gray-700 mb-3">Rate your experience</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleStarClick(star)}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className="focus:outline-none transition-transform hover:scale-110 cursor-pointer"
                    >
                      <Star 
                        size={36} 
                        fill={(hoveredStar || formData.rating) >= star ? "#E8B13E" : "transparent"} 
                        className={(hoveredStar || formData.rating) >= star ? "text-[#E8B13E]" : "text-gray-300"}
                      />
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-400 font-bold mt-3 uppercase tracking-wider">
                  {formData.rating} out of 5 Stars
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Your Name *</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E8B13E] focus:border-transparent outline-none transition-all font-medium text-gray-900"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Your Review *</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E8B13E] focus:border-transparent outline-none transition-all font-medium text-gray-900 resize-none"
                  placeholder="Tell us about your experience..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-[#E8B13E] text-[#2B0917] font-black text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    <Send size={20} /> Submit Review
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}