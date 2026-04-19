import { useState } from 'react';
import { X, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm({ isOpen, onClose, onUnlock }) {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Sell Gold',
    message: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Prepare data for Web3Forms
    const submissionData = {
      ...formData,
      access_key: "f5acb993-861a-473e-a614-5d3b6ecc7b6a",
      subject: `New Lead: ${formData.service} - ${formData.name}`,
      from_name: "Lotus Gold Automated System"
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
        if (onUnlock) onUnlock();
        // Reset form and close modal after 2.5 seconds
        setTimeout(() => {
          setFormData({ name: '', phone: '', service: 'Sell Gold', message: '' });
          setStatus('idle');
          onClose();
        }, 2500);
      } else {
        setStatus('error');
        console.error("Form submission failed:", result);
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
            <h3 className="text-2xl font-black">Get in Touch</h3>
            <p className="text-[#E8B13E] text-sm font-medium mt-1">We'll get back to you within 15 minutes.</p>
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
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
              <p className="text-gray-600 font-medium">Our executive will call you shortly at {formData.phone}.</p>
            </div>
          ) : (
            /* FORM STATE */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Error Message */}
              {status === 'error' && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm font-bold border border-red-100">
                  <AlertCircle size={18} /> Something went wrong. Please try again.
                </div>
              )}

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Full Name *</label>
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
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone Number *</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">+91</span>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E8B13E] focus:border-transparent outline-none transition-all font-medium text-gray-900"
                    placeholder="98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">How can we help you? *</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E8B13E] focus:border-transparent outline-none transition-all font-medium text-gray-900"
                >
                  <option>Sell Gold for Cash</option>
                  <option>Release Pledged Gold</option>
                  <option>Gold Exchange</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-[#E8B13E] text-[#2B0917] font-black text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Sending Details...
                  </>
                ) : (
                  <>
                    <Send size={20} /> Request Call Back
                  </>
                )}
              </button>
              <div className="mt-6 pt-5 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-400 font-medium mb-2">
                  Your information is 100% secure and will not be shared.
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  Prefer email? Reach us at{' '}
                  <a href="mailto:support@lotusgoldcompany.com" className="text-[#2B0917] font-bold hover:text-[#E8B13E] transition-colors">
                    support@lotusgoldcompany.com
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
