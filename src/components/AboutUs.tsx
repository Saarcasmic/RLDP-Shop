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
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6">Our Legacy of Excellence</h2>
          <p className="text-gray-600 text-lg">
            Since 1966, Ramanlal Dwarka Prasad has been synonymous with quality and trust in the wholesale food industry. Our journey of over five decades reflects our commitment to excellence and customer satisfaction.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto mb-24">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200" />
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
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

        {/* Values */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
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

        {/* Stats */}
        <div className="max-w-5xl mx-auto mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">50+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">1000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">5+</div>
              <div className="text-gray-600">Product Categories</div>
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