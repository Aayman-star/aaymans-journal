"use client";
import { oswald } from "@/lib/fonts";
import Link from "next/link";
//import { getPostsbyCategory } from "@/lib/posts";

const Categories = () => {
  const categories = [
    { id: 1, label: "All" },
    { id: 2, label: "General" },
    { id: 3, label: "Technical" },
    { id: 4, label: "Reflections" },
  ];
  return (
    <ul className="flex items-center justify-center mb-10 gap-x-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          className="transition-transform active:scale-95"
          href={`/Category/${category.label}`}>
          <li
            key={category.id}
            className={`border py-1 px-4 bg-card rounded-full text-sm font-light ${oswald.className}`}>
            {category.label}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Categories;
