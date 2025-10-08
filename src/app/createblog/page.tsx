"use client";

import * as React from "react";
import { useState } from "react";

export default function CreateBlog() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [title, setTitle] = useState("");

  return (
    <main>
      <div className="bg-white h-screen">
        <div className="p-6 bg-white shadow-2xl rounded-2xl w-200 h-180 m-auto mt-[80px]">
          <h2 className="text-xl bg-white font-bold text-[#35A4EC] underline text-center mb-4">
            Create Content Here
          </h2>
          <form
            className="flex flex-col gap-4"
            onSubmit={async (event) => {
              try {
                event.preventDefault();
                console.log({ author, content, imageurl, title });
                await fetch(
                  "https://soothsoup-us.backendless.app/api/data/table",
                  {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify({ author, content, imageurl, title }),
                  }
                );
                alert("article added");
              } catch (error) {
                console.log(error);
                alert("article failed");
              }
            }}
          >
            <input
              type="text"
              placeholder="Input Name"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
              className="shadow-xl p-2 rounded-2xl transition-transform hover:scale-105"
            />
            <input
              type="text"
              placeholder="Input Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="shadow-xl p-2 rounded-2xl transition-transform hover:scale-105"
            />
            <input
              type="text"
              placeholder="Input Url"
              value={imageurl}
              onChange={(event) => setImageurl(event.target.value)}
              className="shadow-xl p-2 rounded-2xl transition-transform hover:scale-105"
            />
            <textarea
              placeholder="Input Content"
              className="shadow-xl p-2 h-100 rounded-2xl transition-transform hover:scale-105"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />

            <button
              type="submit"
              className="bg-[#35A4EC] text-white py-2 rounded"
            >
              POST BLOG
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
