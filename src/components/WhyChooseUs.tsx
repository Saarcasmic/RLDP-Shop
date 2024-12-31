import { Shield, Award, Clock, Scale } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import FeatureCard from './ui/FeatureCard';

const features = [
  {
    icon: Shield,
    title: 'Trust & Reliability',
    description: 'Serving the community with honesty and integrity since 1965.'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Carefully selected products meeting the highest quality standards.'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Efficient delivery system ensuring your orders reach you on time.'
  },
  {
    icon: Scale,
    title: 'Fair Pricing',
    description: 'Competitive wholesale prices for both B2B and B2C customers.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Ramanlal Dwarka Prasad?
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature) => (
            <AnimatedSection key={feature.title}>
              <FeatureCard {...feature} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}