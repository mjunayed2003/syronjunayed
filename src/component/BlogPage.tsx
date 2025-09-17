
import * as React from "react";
import { blogPosts } from "@/blogData";
import BlogPostCard from "./BlogPostCard";
import BlogPagination from "./BlogPagimation";
import ProfileWidget from "./Profile";

const POSTS_PER_PAGE = 4;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const currentPosts = blogPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="bg-gray-50/75 min-h-screen">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          {/* Left Column: Blog Posts */}
          <main className="lg:col-span-2 space-y-8">
            {currentPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </main>

          {/* Right Column: Sidebar */}
          <aside className="space-y-8 mt-12 lg:mt-0">
            <ProfileWidget />
          </aside>
        </div>
      </div>
    </div>
  );
}
