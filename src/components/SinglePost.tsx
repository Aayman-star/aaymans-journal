import React from "react";
import Link from "next/link";
import { CardContent, Card } from "./ui/card";
import { oswald, raleway } from "@/lib/fonts";
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
      className="mb-4 transition-all duration-300 ease-in-out transform hover:border-muted-foreground hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="py-6 rounded-md flex flex-col gap-y-4" key={slug}>
        <div>
          <p className={`${oswald.className} text-xl font-medium`}>
            <Link href={`/Blog/${slug}`}> {title}</Link>
          </p>
          <span
            className={`text-muted-foreground ${raleway.className} font-light text-sm`}>
            {description}
          </span>
        </div>

        <p className={`font-light text-muted-foreground`}>{date}</p>
        <hr />

        <ul className="flex">
          {category.map((cat: string, i: number) => (
            <li
              key={cat}
              className="mr-2 text-[10px] font-light border px-3 py-1 rounded-full">
              {cat}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SinglePost;
