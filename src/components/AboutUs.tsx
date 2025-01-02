import { Users, Scale, Shield, Target } from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "1966",
    title: "Foundation",
    description: "Established in Mathura as a small wholesale trading business"
  },
  {
    year: "1980",
    title: "Market Leadership",
    description: "Became one of the leading wheat suppliers in the region"
  },
  {
    year: "1995",
    title: "Expansion",
    description: "Diversified into multiple premium food commodities"
  },
  {
    year: "2010",
    title: "Modernization",
    description: "Implemented modern storage and quality control systems"
  }
];

const values = [
  {
    icon: <Shield className="w-12 h-12 text-amber-600" />,
    title: "Quality Assurance",
    description: "Rigorous quality checks at every stage"
  },
  {
    icon: <Scale className="w-12 h-12 text-amber-600" />,
    title: "Fair Trading",
    description: "Transparent pricing and ethical business practices"
  },
  {
    icon: <Users className="w-12 h-12 text-amber-600" />,
    title: "Customer First",
    description: "Building lasting relationships through trust"
  },
  {
    icon: <Target className="w-12 h-12 text-amber-600" />,
    title: "Excellence",
    description: "Commitment to superior products and service"
  }
];

export default function AboutUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        {/* Header - Enhanced with keywords and detailed description */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6">Mathura's Premier Wholesale Wheat Supplier</h2>
          <p className="text-gray-600 text-lg mb-4">
            Since 1966, Ramanlal Dwarka Prasad has been Mathura's trusted wholesale supplier of premium MP Wheat (MP गेहूँ), Double Refined Sugar, 1121 Basmati Rice, Chickpeas, and pure Asafoetida (Hing). Our commitment to quality and customer satisfaction has made us the region's leading agricultural commodities wholesaler.
          </p>
          <p className="text-gray-600 text-lg">
            We source the finest MP Wheat directly from Madhya Pradesh's premium wheat-growing regions, ensuring superior quality for our customers. Our 1121 Basmati Rice and Double Refined Sugar meet the highest quality standards, making us the preferred choice for businesses across Uttar Pradesh and neighboring states.
          </p>
        </div>

        {/* Timeline - Updated milestones with product focus */}
        <div className="relative max-w-5xl mx-auto mb-24">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200" />
          <div className="space-y-16">
            {[
              {
                year: "1966",
                title: "Foundation",
                description: "Established in Mathura as a wholesale trading business, specializing in premium quality MP Wheat"
              },
              {
                year: "1980",
                title: "Market Leadership",
                description: "Became one of North India's leading MP Wheat suppliers, known for superior quality and fair trading practices"
              },
              {
                year: "1995",
                title: "Product Expansion",
                description: "Diversified into premium food commodities including 1121 Basmati Rice, Double Refined Sugar, and Asafoetida"
              },
              {
                year: "2010",
                title: "Modern Infrastructure",
                description: "Implemented state-of-the-art storage and quality control systems for all products including MP Wheat, Rice, and Sugar"
              }
            ].map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-1/2 pr-8 pl-4">
                  <div className={`${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    <div className="text-amber-600 font-bold text-xl mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-8 h-8 bg-amber-600 rounded-full border-4 border-white shadow" />
                </div>
                <div className="w-1/2 pl-8 pr-4" />
              </div>
            ))}
          </div>
        </div>

        {/* Values - Updated descriptions with product focus */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Our Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-amber-600" />,
                title: "Premium Quality",
                description: "Rigorous quality checks for all products, especially our MP Wheat and 1121 Rice"
              },
              {
                icon: <Scale className="w-12 h-12 text-amber-600" />,
                title: "Fair Trading",
                description: "Transparent pricing and ethical practices in all our wholesale operations"
              },
              {
                icon: <Users className="w-12 h-12 text-amber-600" />,
                title: "Customer First",
                description: "Dedicated support for all your bulk purchasing needs"
              },
              {
                icon: <Target className="w-12 h-12 text-amber-600" />,
                title: "Product Excellence",
                description: "Best quality MP Wheat, Sugar, Rice, and Asafoetida in Mathura"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-amber-50 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-center mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats - Updated with specific numbers */}
        <div className="max-w-5xl mx-auto mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">57+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">1000+</div>
              <div className="text-gray-600">Satisfied Retailers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">5+</div>
              <div className="text-gray-600">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">10+</div>
              <div className="text-gray-600">States Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 