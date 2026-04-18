import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { X, Star, CheckCircle2 } from 'lucide-react';

// Strict validation: Require name, a star rating, and a minimum review length
const reviewSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  rating: z.number().min(1, 'Please select a star rating'),
  review: z.string().min(10, 'Review must be at least 10 characters'),
});

export default function ReviewModal({ isOpen, onClose }) {
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm({
    resolver: zodResolver(reviewSchema),
    defaultValues: { rating: 0 }
  });

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
    setValue('rating', rating, { shouldValidate: true }); // Updates the hidden form value
  };

  const onSubmit = async (data) => {
    // Simulate sending to your backend/database
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('New Review Submitted:', data);
    reset();
    setSelectedRating(0);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-[#FFFDF9] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-md bg-black/5 text-gray-500 hover:bg-black/10 hover:text-black transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-2">Rate Your Experience</h2>
            <p className="text-gray-600 text-sm font-medium">Your feedback helps us serve Mysuru better.</p>
          </div>

          {isSubmitSuccessful ? (
            <div className="py-8 flex flex-col items-center text-green-600">
              <CheckCircle2 size={48} className="mb-4" />
              <p className="text-lg font-bold">Thank You!</p>
              <p className="text-sm text-gray-500 text-center mt-2">Your review has been submitted and is pending approval.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              
              {/* Interactive Star Rating */}
              <div className="flex flex-col items-center justify-center mb-2">
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => handleStarClick(star)}
                      className="focus:outline-none transition-transform hover:scale-110 cursor-pointer"
                    >
                      <Star 
                        size={36} 
                        fill={(hoverRating || selectedRating) >= star ? '#E8B13E' : 'transparent'} 
                        className={(hoverRating || selectedRating) >= star ? 'text-lotus-gold' : 'text-gray-300'}
                        strokeWidth={1.5}
                      />
                    </button>
                  ))}
                </div>
                {errors.rating && <p className="mt-2 text-xs text-red-500 font-medium">{errors.rating.message}</p>}
              </div>

              <div>
                <input
                  {...register('name')}
                  className={`w-full px-4 py-3 rounded-lg bg-white border ${errors.name ? 'border-red-500' : 'border-gray-300'} text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lotus-light transition-all`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
              </div>

              <div>
                <textarea
                  {...register('review')}
                  rows="4"
                  className={`w-full px-4 py-3 rounded-lg bg-white border ${errors.review ? 'border-red-500' : 'border-gray-300'} text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lotus-light transition-all resize-none`}
                  placeholder="Tell us about your experience..."
                ></textarea>
                {errors.review && <p className="mt-1 text-xs text-red-500">{errors.review.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 mt-2 rounded-full bg-lotus-dark text-white font-bold text-lg hover:bg-lotus-light transition-all disabled:opacity-70 shadow-lg cursor-pointer"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}