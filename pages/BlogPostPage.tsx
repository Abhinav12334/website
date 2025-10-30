
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, User, Calendar } from 'lucide-react';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl font-bold">Post not found</h1>
        <Link to="/blog" className="mt-6 inline-flex items-center text-primary font-semibold">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="mb-8 inline-flex items-center text-primary font-semibold hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
        <article>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-500 mb-8 space-x-6">
            <div className="flex items-center space-x-2">
              <User size={16} />
              <span>By {post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
          </div>
          <img src={post.imageUrl} alt={post.title} className="w-full h-auto rounded-2xl shadow-lg mb-8" />
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>{post.content}</p>
            {/* Add more paragraphs or formatted content here as needed */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;
