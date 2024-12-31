import { useState } from 'react';
import { Info } from 'lucide-react';
import { Product } from '../../types/product';
import { useNavigate } from 'react-router-dom';

type ProductCardProps = Product;

export default function ProductCard({ name, description, icon: Icon, slug, specs }: ProductCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const navigate = useNavigate();

  return (
    <div 
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      <div 
        className={`absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all duration-200 z-[100] pointer-events-none ${
          showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4" />
          Click to know more
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-8 border-transparent border-t-gray-800" />
      </div>

      {/* Card */}
      <div 
        className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-[400px] h-[300px] cursor-pointer overflow-hidden"
        onClick={() => navigate(`/products/${slug}`)}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={specs.image} 
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        {/* Content */}
        <div className="relative h-full p-8 flex flex-col justify-end text-white">
          <div className="mb-4">
            <Icon className="w-12 h-12 text-amber-400 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-gray-200 line-clamp-2 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}