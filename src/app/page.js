"use client";
import CreatePostSection from "@/components/Home/CreatePostSection";
import PostsSection from "@/components/Home/PostsSection";
import { useEffect, useState } from "react";
import { POSTS_ENDPOINT } from "@/configs/constants";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isBlank, setIsBlank] = useState(false);

  // get all posts from api
  useEffect(() => {
    axios
      .get(POSTS_ENDPOINT)
      .then((response) => {
        console.log("Posts fetched:", response.data);
        if (response.data.length === 0) {
          setIsBlank(true);
        }
        setPosts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
        console.error("Error fetching posts:", error);
      });
  }, []);

  // update isBlank state when posts change
  useEffect(() => {
    if (posts.length > 0) {
      setIsBlank(false);
    } else {
      setIsBlank(true);
    }
  }, [posts]);

  return (
    <>
      <header>
        <h1 className="bg-blue-500 text-white p-10 text-lg">
          Welcome to Micro-Blogging App
        </h1>
      </header>
      <main className="min-h-screen ">
        <CreatePostSection setPosts={setPosts} />
        <PostsSection
          posts={posts}
          isBlank={isBlank}
          isError={isError}
          isLoading={isLoading}
          setPosts={setPosts}
        />
      </main>
      <footer className="bg-gray-800 text-white min-h-[200px]">
        <p>Footer</p>
      </footer>
    </>
  );
}
