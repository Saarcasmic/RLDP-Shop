import React from 'react';
import { Clock, ChevronRight, BookOpen, Wheat, Soup, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  readTime: number;
  category: string;
  date: string;
  icon: React.ReactNode;
}

const blogPosts: BlogPost[] = [
  {
    id: 'grain-storage-tips',
    title: 'Essential Tips for Long-term Grain Storage',
    description: 'Learn the best practices for storing grains and spices to maintain their quality and freshness.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2070',
    readTime: 5,
    category: 'Storage Tips',
    date: '2024-02-15',
    icon: <Wheat className="w-5 h-5" />
  },
  {
    id: 'mp-wheat-benefits',
    title: 'The Superior Quality of MP Wheat',
    description: 'Discover why Madhya Pradesh wheat is considered among the best in India.',
    image: 'https://images.unsplash.com/photo-1631209121750-a9f625f7fb55?q=80&w=2070',
    readTime: 7,
    category: 'Product Knowledge',
    date: '2024-02-10',
    icon: <Soup className="w-5 h-5" />
  },
  {
    id: 'traditional-recipes',
    title: 'Traditional Recipes Using Our Products',
    description: 'Explore authentic Indian recipes made perfect with our premium ingredients.',
    image: 'https://images.unsplash.com/photo-1605708896118-957f660c1555?q=80&w=2070',
    readTime: 10,
    category: 'Recipes',
    date: '2024-02-05',
    icon: <Utensils className="w-5 h-5" />
  }
];

export default function Blog() {
  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Knowledge Hub</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert insights, storage tips, and delicious recipes using our premium products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                  {post.icon}
                  <span className="text-sm font-medium">{post.category}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime} min read
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.description}
                </p>

                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-amber-100 text-amber-600 px-6 py-3 rounded-full font-medium hover:bg-amber-200 transition-colors duration-300"
          >
            <BookOpen className="w-5 h-5" />
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
} 