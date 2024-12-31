import { useParams, Link } from 'react-router-dom';
import { Package2, Scale, Truck, ArrowLeft } from 'lucide-react';
import { products } from './Products'; // Import the products array

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <Link to="/" className="text-amber-600 hover:text-amber-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group mb-8"
        >
          <ArrowLeft className="w-5 h-5 text-amber-600 group-hover:-translate-x-1 transition-transform" />
          <span className="text-gray-700">Back to Home</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative group">
            <img
              src={product.specs.image}
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content Section */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-8 text-lg">{product.description}</p>

            {/* Specifications */}
            <div className="bg-amber-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => {
                  if (key !== 'image' && key !== 'packaging' && key !== 'minOrder') {
                    return (
                      <div key={key} className="flex items-start gap-2">
                        <span className="font-semibold capitalize">{key}:</span>
                        <span>{value}</span>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            {/* Packaging Options */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Package2 className="w-6 h-6 text-amber-600" />
                Packaging Options
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {product.specs.packaging.map((option) => (
                  <div key={option} className="bg-gray-50 rounded-lg p-4 text-center">
                    {option}
                  </div>
                ))}
              </div>
            </div>

            {/* Minimum Order */}
            <div className="flex items-center gap-4 mb-8">
              <Scale className="w-6 h-6 text-amber-600" />
              <div>
                <h2 className="text-2xl font-semibold">Minimum Order</h2>
                <p className="text-gray-600">{product.specs.minOrder}</p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Truck className="w-5 h-5" />
              Request Bulk Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 