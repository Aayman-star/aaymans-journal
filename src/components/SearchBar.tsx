"use client";

import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
//import { Input } from "@/components/ui/input";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchBar() {
  return (
    <>
      <SearchBarSmall />
      <SearchBarLarge />
    </>
  );
}

function SearchBarLarge() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") || ""
  );

  console.log("PATHNAME:", pathname);
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearch = (term: string) => {
    setSearchQuery(term);
    console.log("TERM:", term);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    //replace(`${pathname}?${params.toString()}`);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleDelete = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("query");
    // Update the URL to remove the query parameter
    router.replace(`${pathname}?${params.toString()}`);
    setSearchQuery("");
  };
  return (
    <div className="hidden md:block ml-12 ">
      {/* This div houses the search bar */}
      <div className="relative flex items-center justify-end mr-10 ">
        <div
          className={`
          relative flex items-center
          transition-all duration-500 ease-in-out
          ${isSearchVisible ? "w-72 opacity-100" : "w-0 opacity-0"}
        `}>
          <input
            type="text"
            onChange={(e) => handleSearch(e.target.value)}
            value={searchQuery}
            // defaultValue={searchParams.get("query")?.toString()}
            placeholder="Search..."
            className="w-full px-10 text-muted-foreground dark:text-foreground h-8 md:h-10 bg-card rounded-full outline-none border border-muted-foreground"
          />
        </div>
        <div
          className={`absolute z-10 cursor-pointer bg-card ${
            isSearchVisible
              ? "left-3 top-[0.35rem] md:top-2" // When the search is visible, no border
              : "right-2 border rounded-full p-2" // When the search is not visible, add a circular border
          }
    `}
          onClick={toggleSearch}>
          <Search
            aria-label="Toggle search"
            className="h-5 w-5 text-muted-foreground"
          />
        </div>

        {searchQuery && (
          <X
            aria-label="Clear search"
            onClick={handleDelete}
            className="h-6 w-6 absolute cursor-pointer text-muted-foreground right-3 top-[0.35rem] md:top-2 z-10"
          />
        )}
      </div>
    </div>
  );
}
const SearchBarSmall = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") || ""
  );
  const handleSearch = (term: string) => {
    setSearchQuery(term);
    console.log("TERM:", term);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    //replace(`${pathname}?${params.toString()}`);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleDelete = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("query");
    // Update the URL to remove the query parameter
    router.replace(`${pathname}?${params.toString()}`);
    setSearchQuery("");
  };
  return (
    <div className="ml-12 md:hidden">
      {/* This div houses the search bar */}
      <div className="relative flex items-center justify-end mr-10 ">
        <div
          className={`
          relative flex items-center
          transition-all duration-500 ease-in-out
           w-72 opacity-100
        `}>
          <input
            type="text"
            onChange={(e) => handleSearch(e.target.value)}
            value={searchQuery}
            // defaultValue={searchParams.get("query")?.toString()}
            placeholder="Search..."
            className="w-full px-10 text-muted-foreground dark:text-foreground h-8 md:h-10 bg-card rounded-full outline-none border border-muted-foreground"
          />
        </div>
        <div
          className={`absolute z-10 cursor-pointer bg-card
            
               left-3 top-[0.35rem]  `}>
          <Search
            aria-label="Toggle search"
            className="h-5 w-5 text-muted-foreground"
          />
        </div>

        {searchQuery && (
          <X
            aria-label="Clear search"
            onClick={handleDelete}
            className="h-6 w-6 absolute cursor-pointer text-muted-foreground right-3 top-[0.35rem] md:top-2 z-10"
          />
        )}
      </div>
    </div>
  );
};
