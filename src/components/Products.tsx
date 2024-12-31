import { Wheat, Flower2, Cookie, Sprout, Soup } from 'lucide-react';
import ProductSlider from './ui/ProductSlider';
import { Product } from '../types/product';

export const products: Product[] = [
  {
    name: 'M.P. Wheat',
    description: 'Premium quality wheat from Madhya Pradesh, known for its superior texture and taste.',
    icon: Wheat,
    slug: 'mp-wheat',
    specs: {
      type: 'Sharbati Wheat',
      origin: 'Madhya Pradesh, India',
      protein: '12-13%',
      moisture: '< 12%',
      packaging: ['50kg bags', '25kg bags', 'Bulk containers'],
      minOrder: '1000 kg',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80'
    }
  },
  {
    name: 'Asafoetida',
    description: 'Authentic and pure asafoetida, carefully sourced for the finest flavor.',
    icon: Flower2,
    slug: 'asafoetida',
    specs: {
      type: 'Compounded Asafoetida',
      purity: '99.9%',
      form: 'Powder',
      packaging: ['1kg containers', '500g containers', 'Bulk packaging'],
      minOrder: '100 kg',
      image: 'https://i.ibb.co/HYMhnSH/hing.jpg'
    }
  },
  {
    name: 'Double-Refined Sugar',
    description: 'Crystal clear, double-refined sugar for perfect sweetness.',
    icon: Cookie,
    slug: 'sugar',
    specs: {
      type: 'Double Refined',
      purity: '99.9%',
      color: 'Crystal White',
      packaging: ['50kg bags', '25kg bags', 'Bulk containers'],
      minOrder: '1000 kg',
      image: 'https://i.ibb.co/TwXnKTw/Sugar.jpg'
    }
  },
  {
    name: '11/21 Rice',
    description: 'Superior quality rice with perfect grain length and aroma.',
    icon: Sprout,
    slug: 'rice',
    specs: {
      type: '11/21 Premium Basmati',
      length: 'Extra Long',
      aging: '2 years',
      packaging: ['25kg bags', '10kg bags', 'Bulk packaging'],
      minOrder: '500 kg',
      image: 'https://i.ibb.co/zn417JD/rice.jpg'
    }
  },
  {
    name: 'Chickpea',
    description: 'Premium quality chickpeas, perfect for both commercial and household use.',
    icon: Soup,
    slug: 'chickpea',
    specs: {
      type: 'Kabuli Chickpea',
      size: '8-10mm',
      moisture: '< 14%',
      packaging: ['50kg bags', '25kg bags', 'Bulk containers'],
      minOrder: '500 kg',
      image: 'https://i.ibb.co/Wv6CfvL/chickpea.jpg'
    }
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Premium Products</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Discover our carefully curated selection of premium quality products
        </p>
        <ProductSlider products={products} />
      </div>
    </section>
  );
}