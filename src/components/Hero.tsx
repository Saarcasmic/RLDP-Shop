import {  ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] bg-gradient-to-b from-amber-50 to-white flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wheattt.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-amber-800 mb-6 mt-2">
            Premium MP Wheat Wholesaler in Mathura
            <span className="block text-2xl sm:text-3xl text-amber-600 mt-2">
              MP गेहूँ, Double Refined Sugar, 1121 Rice & More
            </span>
          </h1>

          <div className="mb-12 transform hover:scale-105 transition-transform duration-500">
            <img 
              src="https://i.ibb.co/nLVMJXJ/PREMIUM-QUALITY-1-removebg-preview-1.png" 
              alt="Premium Quality Products"
              className="w-full max-w-md mx-auto rounded-lg drop-shadow-2xl px-4"
            />
          </div>

          <p className="text-2xl sm:text-3xl text-gray-700 mb-8 font-light leading-relaxed">
            Mathura's Premier Wholesale Supplier
            <span className="block text-amber-600 font-semibold mt-2">Since 1966</span>
          </p>

          <div className="mb-8 text-lg text-gray-600">
            <p>Trusted supplier of premium quality products:</p>
            <ul className="mt-4 space-y-2">
              <li>✓ Premium MP Wheat (MP गेहूँ) - Direct from Madhya Pradesh</li>
              <li>✓ Superior 1121 Basmati Rice</li>
              <li>✓ Double Refined Sugar</li>
              <li>✓ Premium Quality Chickpeas</li>
              <li>✓ Pure Asafoetida (Hing)</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="group inline-flex items-center bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center bg-white/80 backdrop-blur-sm text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Products
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-amber-600 mb-2">1000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-amber-600 mb-2">5+</div>
              <div className="text-gray-600">Premium Products</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-amber-600 mb-2">#1</div>
              <div className="text-gray-600">MP Wheat Supplier in Mathura</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}