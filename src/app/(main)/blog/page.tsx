import * as React from "react";
import { getNewsHeadline } from "@/lib/newsapi";
import Link from "next/link";

export default async function Blog() {
  const articles = await getNewsHeadline();
  console.log(articles);

  const printNews = () => {
    return articles.map((value, index) => {
      return (
        <Link
          key={index}
          href={`/blog/${value.title}`}
          target="_blank"
          className="border rounded-2xl shadow-2xl transition-transform hover:scale-105 text-center text-[#35A4EC] font-sans overflow-hidden"
        >
          <div>
            <img
              src={value.imageurl}
              alt={value.title}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-lg font-semibold">{value.title}</h2>
          </div>
        </Link>
      );
    });
  };
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center text-[#35A4EC] underline mb-4">
        Blog Page
      </h1>
      <div className="grid grid-cols-2 gap-10">{printNews()}</div>
    </div>
  );
}
