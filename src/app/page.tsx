import Blog from "@/components/Blog";
import Loading from "@/components/Loading";
import BlogDisplay from "@/components/BlogDisplay";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center gap-y-10 relative">
      <div className="">
        <Blog />
        <Suspense fallback={<Loading />}>
          <BlogDisplay />
        </Suspense>
      </div>
    </main>
  );
}
