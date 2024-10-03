import React from "react";
import Link from "next/link";
import { CardContent, Card } from "./ui/card";
import { raleway } from "@/lib/fonts";
interface PostProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string[];
}
const SinglePost = ({
  title,
  description,
  slug,
  date,
  category,
}: PostProps) => {
  return (
    <Card
      key={slug}
      className="mb-4 transition-all duration-300 ease-in-out transform hover:border-muted-foreground hover:-translate-y-1 hover:shadow-lg text-muted-foreground dark:text-foreground">
      <CardContent className="py-6 rounded-md flex flex-col gap-y-4" key={slug}>
        <div>
          <p className={`${raleway.className}  text-xl font-semibold`}>
            <Link href={`/blog/${slug}`}> {title}</Link>
          </p>
          <span
            className={`text-muted-foreground font-geistSans  text-sm md:text-base`}>
            {description}
          </span>
        </div>

        <p
          className={`font-light text-muted-foreground font-geistSans text-sm`}>
          {date}
        </p>
        <hr />

        <ul className="flex">
          {category.map((cat: string) => (
            <li
              key={cat}
              className="mr-2 text-[10px] font-light border px-3 py-1 rounded-full text-muted-foreground dark:text-foreground">
              {cat}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SinglePost;
