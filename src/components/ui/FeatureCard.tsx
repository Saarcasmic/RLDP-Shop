import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center group">
      <div className="relative w-16 h-16 mx-auto mb-4">
        <Icon className="w-16 h-16 text-amber-600 transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-amber-600/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}