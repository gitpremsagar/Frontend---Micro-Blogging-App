"use client";

import Post from "@/components/Home/Post.js";

export default function PostsSection({
  posts,
  isLoading,
  isError,
  isBlank,
  setPosts,
}) {
  // dummy posts
  // const posts = [
  //   {
  //     id: 1,
  //     title: "Understanding JavaScript Closures",
  //     content:
  //       "Closures are a JavaScript concept that every developer should understand. In this post, we'll dive into what closures are, how they work, and why they're so important.",
  //   },
  //   {
  //     id: 2,
  //     title: "React Hooks: An Introduction",
  //     content:
  //       "React Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. This post will introduce you to the concept and usage of React Hooks.",
  //   },
  //   {
  //     id: 3,
  //     title: "Demystifying Async/Await in JavaScript",
  //     content:
  //       "Async/Await is a modern way to handle asynchronous operations in JavaScript. In this post, we'll explain how it works and show you how to use it in your projects.",
  //   },
  //   {
  //     id: 4,
  //     title: "A Guide to CSS Flexbox",
  //     content:
  //       "Flexbox is a one-dimensional layout method for laying out items in rows or columns. This post will guide you through the basics and advanced concepts of Flexbox.",
  //   },
  //   {
  //     id: 5,
  //     title: "Getting Started with TypeScript",
  //     content:
  //       "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. In this post, we'll cover the basics of TypeScript and how to get started with it.",
  //   },
  // ];

  return (
    <section className="">
      <h2 className="text-2xl font-bold text-center mt-10">Latest Posts</h2>
      <div className="">
        {isLoading && <p className="text-center mt-5">Loading posts...</p>}
        {isError && (
          <p className="text-center mt-5 text-red-500">
            An error occurred. Please try again later.
          </p>
        )}
        {isBlank && (
          <p className="text-center mt-5 text-red-500">
            No posts to display. Be the first one to create a post!
          </p>
        )}
        {posts.map((post) => (
          <Post key={post._id} post={post} setPosts={setPosts} />
        ))}
      </div>
    </section>
  );
}
