import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { Card, CardContent, CardFooter } from "./ui/card";
import { oswald, raleway } from "@/lib/fonts";
import Categories from "./Categories";
import SinglePost from "./SinglePost";

const BlogDisplay = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const blogPosts = getAllPosts().filter((post, i) => post.publish);
  const sortedBlogPosts = blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="w-[80%] mx-auto">
      <Categories />
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
        {sortedBlogPosts?.map((post) => (
          <SinglePost
            title={post.title}
            description={post.description}
            slug={post.slug}
            date={post.date}
            category={post.category}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogDisplay;
