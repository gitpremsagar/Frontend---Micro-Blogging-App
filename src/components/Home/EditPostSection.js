import React from "react";

export default function EditPostSection({ setIsEditing, title, content }) {
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
            />
            <textarea
              placeholder="Content"
              className="border border-gray-300 rounded-md p-2 m-2 w-full"
              defaultValue={content}
              rows={5}
            ></textarea>

            <button
              onClick={(e) => {
                e.preventDefault();
                setIsEditing(false);
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
