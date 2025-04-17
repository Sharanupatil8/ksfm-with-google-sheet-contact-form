import { notFound } from "next/navigation";
import { supabase } from "@/app/_lib/supabase";
import Image from "next/image";
import React from "react";
import Subheader from "@/app/_components/Subheader";

// The generateMetadata function dynamically sets meta title, description, and keywords
export async function generateMetadata({ params }) {
  // Fetch blog data by its ID
  const { data: blog, error } = await supabase
    .from("blogs")
    .select("metaTitle, metaDescription, metaKeywords")
    .eq("id", params.id)
    .single();

  // If there’s an error or no blog found, return default metadata
  if (error || !blog) {
    return {
      title: "Blog Not Found",
      description: "Sorry, this blog does not exist.",
      keywords: "blog, not found",
    };
  }

  // Set dynamic metadata based on the fetched blog data
  return {
    title: blog.metaTitle || "Blog - Default Title",
    description: blog.metaDescription || "Default description for blog page",
    keywords: blog.metaKeywords || "blog, real estate, investment",
  };
}

async function page({ params }) {
  // Fetch blog data from Supabase by its ID
  const { data: blog, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !blog) {
    notFound(); // Handle missing blog data
  }

  return (
    <section>
      <Subheader title="Blogs" />
      <section className="blog max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6 md:py-12 lg:py-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-8">
          {blog.contentTitle}
        </h1>

        <div className="relative float-right w-full md:w-1/2 mb-6 md:ml-8">
          <Image
            src={blog.contentImage}
            alt={blog.contentTitle}
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover w-full h-auto"
          />
        </div>

        <article
          className="prose prose-lg max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: blog.contentText }}
        />
      </section>
    </section>
  );
}

export default page;
