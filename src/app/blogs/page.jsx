import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Choose the Perfect Sneakers for Everyday Wear",
      description:
        "Discover how to find sneakers that combine comfort, style, and durability for your everyday lifestyle.",
      category: "Sneakers",
      author: "Sohag Roy",
      date: "2026-10-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 2,
      title: "Top 5 Shoe Trends You Shouldn't Miss in 2026",
      description:
        "Explore the latest footwear trends and discover the styles that are making waves in the fashion world.",
      category: "Fashion",
      author: "Sohag Roy",
      date: "2026-10-18",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3",
    },
    {
      id: 3,
      title: "Simple Tips to Keep Your Shoes Looking Brand New",
      description:
        "Learn easy and effective ways to clean, protect, and maintain your favorite shoes for a longer life.",
      category: "Care Guide",
      author: "Sohag Roy",
      date: "2026-10-22",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    },
    {
      id: 4,
      title: "Sneakers vs Formal Shoes: Which One Fits Your Style?",
      description:
        "Understand the differences between casual sneakers and formal shoes to make the right style choice.",
      category: "Style Guide",
      author: "Sohag Roy",
      date: "2026-10-25",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1",
    },
  ];

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <Link href={`/blogs/${blog.id}`} className="btn bg-primary">
            show details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
