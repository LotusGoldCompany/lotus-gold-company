import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { X, CheckCircle2 } from 'lucide-react';

// Strict Security Rules for Lead Gen
const formSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  goldWeight: z.string().min(1, 'Please enter estimated weight'),
  type: z.string().min(1, 'Please select a type'),
  state: z.string().min(1, 'Please select a state'),
});

export default function ContactForm({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      // 1. Prepare the data for Web3Forms
      const formData = {
        ...data,
        access_key: "54626125-ab61-4bc1-aa00-615dbe1922f2", 
        subject: "New Lead from Lotus Gold Website!",
        from_name: "Lotus Gold Automated System"
      };

      // 2. Send the secure request
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Lead successfully sent to your email!");
        reset(); // Clear the form
        setTimeout(() => {
          onClose(); // Close the modal
        }, 2000);
      } else {
        console.error("Form submission failed:", result);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg bg-[#FFFDF9] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-md bg-black/5 text-gray-500 hover:bg-black/10 hover:text-black transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-2">Contact Us</h2>
            <p className="text-gray-600 text-sm font-medium">Fill out the form below. Our team will contact you soon.</p>
          </div>

          {isSubmitSuccessful ? (
            <div className="py-8 flex flex-col items-center text-green-600">
              <CheckCircle2 size={48} className="mb-4" />
              <p className="text-lg font-bold">Request Submitted!</p>
              <p className="text-sm text-gray-500">We will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <div>
                <input
                  {...register('fullName')}
                  className={`w-full px-4 py-3 rounded-lg bg-white border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lotus-light transition-all`}
                  placeholder="Full Name"
                />
                {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
              </div>

              <div>
                <input
                  {...register('phone')}
                  type="tel"
                  className={`w-full px-4 py-3 rounded-lg bg-white border ${errors.phone ? 'border-red-500' : 'border-gray-300'} text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lotus-light transition-all`}
                  placeholder="Phone Number"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
              </div>

              <div>
                <input
                  {...register('goldWeight')}
                  className={`w-full px-4 py-3 rounded-lg bg-white border ${errors.goldWeight ? 'border-red-500' : 'border-gray-300'} text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lotus-light transition-all`}
                  placeholder="Enter Gold Weight (e.g. 50 grams)"
                />
                {errors.goldWeight && <p className="mt-1 text-xs text-red-500">{errors.goldWeight.message}</p>}
              </div>

              <div>
                <select
                  {...register('type')}
                  className={`w-full px-4 py-3 rounded-lg bg-white border ${errors.type ? 'border-red-500' : 'border-gray-300'} text-gray-800 focus:outline-none focus:ring-2 focus:ring-lotus-light transition-all appearance-none`}
                >
                  <option value="">Select Type</option>
                  <option value="jewelry">Gold Jewelry</option>
                  <option value="coins">Gold Coins/Bars</option>
                  <option value="pledged">Release Pledged Gold</option>
                </select>
                {errors.type && <p className="mt-1 text-xs text-red-500">{errors.type.message}</p>}
              </div>

              <div>
                <select
                  {...register('state')}
                  className={`w-full px-4 py-3 rounded-lg bg-white border ${errors.state ? 'border-red-500' : 'border-gray-300'} text-gray-800 focus:outline-none focus:ring-2 focus:ring-lotus-light transition-all appearance-none`}
                >
                  <option value="">Select State</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="tamil_nadu">Tamil Nadu</option>
                  <option value="kerala">Kerala</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="other">Other</option>
                </select>
                {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 mt-4 rounded-full bg-lotus-dark text-white font-bold text-lg hover:bg-lotus-light transition-all disabled:opacity-70 shadow-lg cursor-pointer"
              >
                {isSubmitting ? 'Processing...' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}