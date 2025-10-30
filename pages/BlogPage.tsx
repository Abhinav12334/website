
import React from 'react';
import { BLOG_POSTS } from '../constants';
import BlogPostCard from '../components/BlogPostCard';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-light">
       {/* Page Header */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">Insights & Ideas</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
            Explore our latest articles, tutorials, and thoughts on technology, design, and innovation.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
