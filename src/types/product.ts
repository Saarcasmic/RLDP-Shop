import { LucideIcon } from 'lucide-react';

export interface ProductSpecs {
  type: string;
  origin?: string;
  protein?: string;
  moisture?: string;
  purity?: string;
  form?: string;
  color?: string;
  size?: string;
  length?: string;
  aging?: string;
  packaging: string[];
  minOrder: string;
  image: string;
}

export interface Product {
  name: string;
  description: string;
  icon: LucideIcon;
  slug: string;
  specs: ProductSpecs;
} 