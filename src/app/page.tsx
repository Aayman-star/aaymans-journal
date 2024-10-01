import { Suspense } from "react";
import Blog from "@/components/Blog";
import Loading from "@/components/Loading";
import BlogDisplay from "@/components/BlogDisplay";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  // console.log("in the PAGE:", query);
  return (
    <main className="w-full min-h-screen flex flex-col items-center gap-y-10 relative">
      <div className="w-full">
        <Blog />
        <Suspense fallback={<Loading />}>
          <BlogDisplay query={query} />
        </Suspense>
      </div>
    </main>
  );
}
