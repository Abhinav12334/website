
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { ArrowRight, User, Calendar } from 'lucide-react';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <Link to={`/blog/${post.id}`} className="block">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-2 space-x-4">
            <div className="flex items-center space-x-1">
                <User size={14} />
                <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{post.date}</span>
            </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        <p className="text-gray-600 flex-grow">{post.excerpt}</p>
        <Link
          to={`/blog/${post.id}`}
          className="mt-6 font-semibold text-primary inline-flex items-center"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
