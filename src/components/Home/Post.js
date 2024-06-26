import React from "react";
import { useState } from "react";
import EditPostSection from "./EditPostSection";
import axios from "axios";
import { POSTS_ENDPOINT } from "@/configs/constants";

export default function Post({ post, setPosts }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = (e) => {
    // e.preventDefault();
    setIsEditing(true);
  };
  const handleDeleteClick = () => {
    axios
      .delete(`${POSTS_ENDPOINT}/${post._id}`)
      .then((response) => {
        setPosts((prevPosts) => {
          const newPosts = prevPosts.filter((p) => p._id !== post._id);
          return newPosts;
        });
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  return isEditing ? (
    <EditPostSection
      key={post._id}
      setIsEditing={setIsEditing}
      post={post}
      setPosts={setPosts}
    />
  ) : (
    <article className="max-w-md mx-auto bg-white rounded-xl border-2 border-gray-200 hover:border-gray-300 shadow-md hover:shadow-2xl overflow-hidden md:max-w-2xl m-10 transform hover:scale-110 transition ease-in-out duration-500">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          Post
        </div>
        <a
          href="#"
          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
        >
          {post.title}
        </a>
        <p className="mt-2 text-gray-500">{post.content}</p>
        <div>
          <button
            onClick={() => {
              handleEditClick(post._id);
            }}
            className="mt-4 mr-4 px-4 py-2 hover:text-white bg-white border border-indigo-600 hover:bg-indigo-800 transition ease-in-out rounded duration-500 "
          >
            Edit
          </button>
          <button
            onClick={() => {
              handleDeleteClick(post._id);
            }}
            className="mt-4 mr-4 px-4 py-2 hover:text-white bg-white border border-red-600 hover:bg-red-800 transition ease-in-out duration-500 rounded "
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}
