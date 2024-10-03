"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";

const Categories = () => {
  const pathname = usePathname();
  //console.log(pathname);
  const categories = [
    { id: 1, label: <Home className="w-5 h-5" />, path: "/" },
    { id: 2, label: "All", path: "/category/All" },
    { id: 3, label: "General", path: "/category/General" },
    { id: 4, label: "Technical", path: "/category/Technical" },
    { id: 5, label: "Reflections", path: "/category/Reflections" },
  ];
  return (
    <div className="mb-6">
      <ul className="flex flex-wrap  items-center justify-center  gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-0">
        {categories.map((category) => (
          <Link
            key={category.id}
            className="transition-transform active:scale-95"
            href={`${category.path}`}>
            <li
              key={category.id}
              className={` py-1 px-4 bg-card rounded-full text-xs md:text-sm font-geistSans  text-muted-foreground  ${
                pathname === category.path
                  ? "border-2 font-extrabold"
                  : "border font-normal"
              }`}>
              {category.label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
