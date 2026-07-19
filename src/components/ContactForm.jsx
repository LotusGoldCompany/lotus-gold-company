"use client";

import { useState } from 'react';
import { X, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { submitContactForm } from '../actions/contact';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"),
  grams: z.coerce.number().positive("Grams must be a valid positive number"),
  purity: z.string(),
  service: z.string()
});

export default function ContactForm({ isOpen, onClose, onUnlock }) {
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      service: 'Sell Gold for Cash',
      grams: '',
      purity: '22K',
    }
  });

  if (!isOpen) return null;

  const onSubmit = async (data) => {
    setStatus('idle');
    setErrorMessage('');
    
    try {
      const result = await submitContactForm(data);
      
      if (result.success) {
        setStatus('success');
        if (onUnlock) onUnlock();
        setTimeout(() => {
          reset();
          setStatus('idle');
          onClose();
        }, 2500);
      } else {
        setStatus('error');
        setErrorMessage(result.error || "Something went wrong.");
      }
    } catch (e) {
      setStatus('error');
      setErrorMessage("Network error, please try again.");
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
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl relative z-10 overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col max-h-[95vh] overflow-y-auto">
        
        {/* Form Section */}
        <div className="w-full flex flex-col bg-white">
          {/* Header */}
          <div className="flex justify-between items-start p-6 md:p-8 pb-2">
            <div>
              <h3 className="text-2xl font-black text-[#2B0917]">Get in Touch</h3>
              <p className="text-gray-500 text-sm font-medium mt-1">We'll get back to you within 15 minutes.</p>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Dynamic Body Area */}
          <div className="p-6 md:p-8 pt-4">
          {/* SUCCESS STATE */}
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={40} className="text-green-500" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
              <p className="text-gray-600 font-medium">Our executive will call you shortly at {getValues('phone')}.</p>
            </div>
          ) : (
            /* FORM STATE */
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              
              {/* Error Message */}
              {status === 'error' && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm font-bold border border-red-100">
                  <AlertCircle size={18} /> {errorMessage}
                </div>
              )}

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Full Name *</label>
                <input 
                  type="text" 
                  {...register("name")}
                  className={`w-full px-4 py-3.5 bg-gray-50 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-[#E8B13E]'} rounded-xl focus:ring-2 focus:border-transparent outline-none transition-all font-medium text-gray-900`}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-xs font-bold mt-1.5">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone Number *</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">+91</span>
                  <input 
                    type="tel" 
                    {...register("phone")}
                    className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-[#E8B13E]'} rounded-xl focus:ring-2 focus:border-transparent outline-none transition-all font-medium text-gray-900`}
                    placeholder="98765 43210"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-xs font-bold mt-1.5">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Total Grams (Approx) *</label>
                <input 
                  type="number" 
                  step="0.01"
                  {...register("grams")}
                  className={`w-full px-4 py-3.5 bg-gray-50 border ${errors.grams ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-[#E8B13E]'} rounded-xl focus:ring-2 focus:border-transparent outline-none transition-all font-medium text-gray-900`}
                  placeholder="e.g. 15.5"
                />
                {errors.grams && <p className="text-red-500 text-xs font-bold mt-1.5">{errors.grams.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Gold Purity *</label>
                <select 
                  {...register("purity")}
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E8B13E] focus:border-transparent outline-none transition-all font-medium text-gray-900"
                >
                  <option value="18K">18K</option>
                  <option value="20K">20K</option>
                  <option value="22K">22K</option>
                  <option value="24K">24K</option>
                  <option value="Other / Not Sure">Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">How can we help you? *</label>
                <select 
                  {...register("service")}
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E8B13E] focus:border-transparent outline-none transition-all font-medium text-gray-900"
                >
                  <option>Sell Gold for Cash</option>
                  <option>Release Pledged Gold</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#E8B13E] text-[#2B0917] font-black text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
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
    </div>
  );
}
