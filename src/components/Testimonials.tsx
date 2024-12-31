import { useState, useEffect } from 'react';
import { Quote, Star, Building2 } from 'lucide-react';

interface Testimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  isCompany: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Agarwal",
    company: "Agarwal Foods Ltd.",
    role: "Procurement Director",
    content: "We've been sourcing our wheat from Ramanlal Dwarka Prasad for over a decade. Their consistent quality and reliable delivery have made them our trusted partner in business.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=300&h=300&fit=crop",
    isCompany: true
  },
  {
    name: "Priya Sharma",
    company: "Royal Restaurants Chain",
    role: "Executive Chef",
    content: "The quality of their asafoetida has significantly enhanced our traditional dishes. Their products meet our high standards consistently.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=300&h=300&fit=crop",
    isCompany: true
  },
  {
    name: "Suresh Patel",
    company: "Patel Trading Co.",
    role: "Owner",
    content: "Outstanding wholesale supplier. Their commitment to quality and professional approach sets them apart in the market.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=300&h=300&fit=crop",
    isCompany: true
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-amber-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Trusted by Leading Businesses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about their experience with us.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto h-[600px]">
          {/* Floating background cards */}
          {testimonials.map((testimonial, index) => (
            <div
              key={`floating-${index}`}
              className={`absolute w-72 h-48 bg-white/30 backdrop-blur-sm rounded-xl shadow-lg p-4
                transition-all duration-[3000ms] ease-in-out
                ${index !== activeIndex ? 'opacity-30' : 'opacity-0'}
              `}
              style={{
                animation: `float-${index} 15s infinite linear`,
                top: `${Math.random() * 60}%`,
                left: `${Math.random() * 60}%`,
                animationDelay: `${index * -5}s`,
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <p className="text-sm font-medium text-gray-600">{testimonial.name}</p>
              </div>
              <p className="text-xs text-gray-500 line-clamp-3">{testimonial.content}</p>
            </div>
          ))}

          {/* Featured testimonial */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl">
            <div 
              className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-1000"
              style={{
                animation: 'pulse 5s infinite',
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].company}
                    className="w-24 h-24 rounded-full object-cover ring-4 ring-amber-100"
                  />
                  {testimonials[activeIndex].isCompany && (
                    <div className="absolute -bottom-2 -right-2 bg-amber-600 rounded-full p-2">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <Quote className="w-12 h-12 text-amber-200 mx-auto mb-4" />
                  <p className="text-gray-700 text-lg italic mb-6">
                    {testimonials[activeIndex].content}
                  </p>
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-xl">{testimonials[activeIndex].name}</h3>
                  <p className="text-amber-600 font-medium">{testimonials[activeIndex].company}</p>
                  <p className="text-sm text-gray-500">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1) translateY(-50%); }
          50% { transform: scale(1.02) translateY(-50%); }
        }
        @keyframes float-0 {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, 30px) rotate(120deg); }
          66% { transform: translate(-30px, 60px) rotate(240deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        @keyframes float-1 {
          0% { transform: translate(0, 0) rotate(120deg); }
          33% { transform: translate(-50px, 20px) rotate(240deg); }
          66% { transform: translate(40px, -30px) rotate(360deg); }
          100% { transform: translate(0, 0) rotate(480deg); }
        }
        @keyframes float-2 {
          0% { transform: translate(0, 0) rotate(240deg); }
          33% { transform: translate(40px, -40px) rotate(360deg); }
          66% { transform: translate(-20px, 30px) rotate(480deg); }
          100% { transform: translate(0, 0) rotate(600deg); }
        }
      `}</style>
    </section>
  );
} 