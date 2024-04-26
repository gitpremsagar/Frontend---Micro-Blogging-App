import React from "react";
import axios from "axios";
import { POSTS_ENDPOINT } from "@/configs/constants";
import { useState, useRef } from "react";

export default function EditPostSection({ setIsEditing, post, setPosts }) {
  const titleRef = useRef();
  const contentRef = useRef();

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleTitleChange = () => {
    setTitle(titleRef.current.value);
  };

  const handleContentChange = () => {
    setContent(contentRef.current.value);
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(`${POSTS_ENDPOINT}/${post._id}`, {
        title: title,
        content: content,
      });

      // update posts state with new post
      setPosts((prevPosts) => {
        const newPosts = prevPosts.map((p) =>
          p._id === response.data._id ? response.data : p
        );
        return newPosts;
      });

      setIsEditing(false);
    } catch (error) {
      setIsEditing(false);
      alert("Error updating post");
      console.error("Error updating post:", error);
    }
  };

  return (
    <section className="">
      <h2 className="text-2xl font-bold text-center my-10 ">Edit Post</h2>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-8 border-2 border-gray-200 ">
        <div className="">
          <form className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Title"
              className="border border-gray-300 rounded-md p-2 m-2 w-full"
              defaultValue={title}
              ref={titleRef}
              onChange={handleTitleChange}
            />
            <textarea
              placeholder="Content"
              className="border border-gray-300 rounded-md p-2 m-2 w-full"
              defaultValue={content}
              rows={5}
              ref={contentRef}
              onChange={handleContentChange}
            ></textarea>

            <button
              onClick={(e) => {
                e.preventDefault();
                handleSaveClick();
              }}
              className="bg-blue-500 text-white rounded-md m-2 py-2 px-3"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
