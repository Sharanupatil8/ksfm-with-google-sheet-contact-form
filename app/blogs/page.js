import Image from "next/image";
import Link from "next/link";
import React from "react";
import Subheader from "../_components/Subheader";
import { getBlogs } from "../_lib/data-services";

async function page() {
  const blogs = await getBlogs();

  console.log(blogs);

  return (
    <section>
      <Subheader title="Blogs" />
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.data.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col bg-white shadow-md border border-slate-200 rounded-lg overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={blog.contentImage}
                  alt={blog.contentTitle}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold line-clamp-2">
                  {blog.contentTitle}
                </h6>
                <p className="text-slate-600 text-sm mb-4 flex-grow">
                  {extractFirstLine(blog.contentText)}
                </p>
                <Link href={`/blogs/${blog.id}`} passHref>
                  <button
                    className="rounded-md bg-slate-800 py-2 px-4 text-center text-sm text-white hover:bg-slate-700 transition-all"
                    type="button"
                  >
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default page;

// helper function
function extractFirstLine(text) {
  if (!text) return "";
  const plainText = text.replace(/<[^>]*>?/gm, ""); // remove HTML tags if present
  const firstLine = plainText.split("\n")[0]; // take first line
  return firstLine.length > 100
    ? firstLine.substring(0, 100) + "..."
    : firstLine;
}
