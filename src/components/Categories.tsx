"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Categories = () => {
  const pathname = usePathname();
  //console.log(pathname);
  const categories = [
    { id: 1, label: "All", path: "/Category/All" },
    { id: 2, label: "General", path: "/Category/General" },
    { id: 3, label: "Technical", path: "/Category/Technical" },
    { id: 4, label: "Reflections", path: "/Category/Reflections" },
  ];
  return (
    <ul className="w-[90%] mx-auto flex flex-wrap items-center justify-center mb-10 gap-x-2 gap-y-3 md:gap-x-4 md:gap-y-0">
      {categories.map((category) => (
        <Link
          key={category.id}
          className="transition-transform active:scale-95"
          href={`${category.path}`}>
          <li
            key={category.id}
            className={`border py-1 px-4 bg-card rounded-full text-sm font-geistSans text-muted-foreground dark:text-foreground ${
              pathname === category.path && "font-extrabold"
            }`}>
            {category.label}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Categories;
