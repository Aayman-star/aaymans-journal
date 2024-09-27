"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { oswald } from "@/lib/fonts";
import DateDisplay from "./DateDisplay";
import Link from "next/link";

const Blog = () => {
  const { theme, setTheme } = useTheme();
  //console.log(theme);

  return (
    <div className=" py-8">
      <div className="flex items-center justify-center gap-x-2">
        <Link href={`/`}>
          <h1
            className={`text-3xl font-semibold text-center text-muted-foreground dark:text-foreground ${oswald.className}`}>
            Aayman&apos;s Journal
          </h1>
        </Link>

        <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}>
          {theme === "dark" ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      </div>
      <DateDisplay />
    </div>
  );
};

export default Blog;
