"use client";
import CreatePostSection from "@/components/Home/CreatePostSection";
import PostsSection from "@/components/Home/PostsSection";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="bg-blue-500 text-white p-10 text-lg">
          Welcome to Micro-Blogging App
        </h1>
      </header>
      <main className="min-h-screen ">
        <CreatePostSection />
        <PostsSection />
      </main>
      <footer className="bg-gray-800 text-white min-h-[200px]">
        <p>Footer</p>
      </footer>
    </>
  );
}
