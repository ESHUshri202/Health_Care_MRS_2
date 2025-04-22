import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Tag, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Common Cold vs. Seasonal Allergies',
    excerpt: 'Learn how to differentiate between cold symptoms and seasonal allergies to get the right treatment.',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    author: 'Dr. Emma Roberts',
    date: 'June 15, 2025',
    category: 'Health Tips',
    tags: ['cold', 'allergies', 'symptoms'],
  },
  {
    id: 2,
    title: 'The Role of AI in Modern Healthcare',
    excerpt: 'Explore how artificial intelligence is transforming diagnosis, treatment planning, and patient care.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    author: 'David Chen',
    date: 'June 10, 2025',
    category: 'Technology',
    tags: ['AI', 'healthcare', 'technology'],
  },
  {
    id: 3,
    title: 'Nutrition Basics: Building a Balanced Diet',
    excerpt: 'Discover the fundamentals of nutrition and how to create a balanced diet that supports your health goals.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    author: 'Sarah Patel',
    date: 'June 5, 2025',
    category: 'Nutrition',
    tags: ['diet', 'nutrition', 'health'],
  },
  {
    id: 4,
    title: 'Managing Chronic Pain: Modern Approaches',
    excerpt: 'Learn about the latest approaches to managing chronic pain, from medication to lifestyle changes.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    author: 'Dr. Michael Chen',
    date: 'May 28, 2025',
    category: 'Medical',
    tags: ['pain', 'chronic', 'management'],
  },
  {
    id: 5,
    title: 'Sleep Hygiene: Improving Your Rest Quality',
    excerpt: 'Discover practical tips to improve your sleep quality and wake up feeling refreshed.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    author: 'Dr. Emily Davis',
    date: 'May 20, 2025',
    category: 'Wellness',
    tags: ['sleep', 'hygiene', 'health'],
  },
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className='pt-24'>
        <div className="container mx-auto p-6 ">
      {/* Search Input */}
      <div className="flex items-center space-x-2 mb-6">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map(post => (
          <div key={post.id} className="border rounded-lg shadow-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-2">{post.excerpt}</p>

              <div className="flex items-center text-gray-500 text-sm mb-2">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <User className="w-4 h-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <Tag className="w-4 h-4 mr-1" />
                {post.tags.map(tag => (
                  <span key={tag} className="mr-2">#{tag}</span>
                ))}
              </div>

              <Link to={`/blog/${post.id}`} className="mt-4 flex items-center text-blue-600 hover:underline">
                Read More <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Blog;
