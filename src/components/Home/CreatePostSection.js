"use client";

import { useState, useRef } from "react";
import axios from "axios";
import { POSTS_ENDPOINT } from "@/configs/constants";

export default function CreatePostSection({ setPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleRef = useRef();
  const contentRef = useRef();

  const uploadPost = async () => {
    try {
      const response = await axios.post(POSTS_ENDPOINT, {
        title: title,
        content: content,
      });

      // update posts state with new post
      setPosts((prevPosts) => {
        const newPosts = [...prevPosts, response.data];
        return newPosts;
      });

      // clear input fields
      titleRef.current.value = "";
      contentRef.current.value = "";

      // reset state
      setTitle("");
      setContent("");

      console.log("Post uploaded:", response.data);
    } catch (error) {
      console.error("Error uploading post:", error);
    }
  };

  const handleTitleChange = () => {
    setTitle(titleRef.current.value);
  };

  const handleContentChange = () => {
    setContent(contentRef.current.value);
  };

  return (
    <section className="">
      <h2 className="text-2xl font-bold text-center my-10 ">Create Post</h2>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-8 border-2 border-gray-200 ">
        <div className="">
          <form className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Title"
              className="border border-gray-300 rounded-md p-2 m-2 w-full"
              ref={titleRef}
              onChange={handleTitleChange}
            />
            <textarea
              placeholder="Content"
              className="border border-gray-300 rounded-md p-2 m-2 w-full"
              rows={5}
              ref={contentRef}
              onChange={handleContentChange}
            ></textarea>

            <button
              onClick={(e) => {
                e.preventDefault();

                uploadPost();
              }}
              className="bg-blue-500 text-white rounded-md m-2 py-2 px-3"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
