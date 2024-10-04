import Blog from "@/components/Blog";
import Categories from "@/components/Categories";
import SinglePost from "@/components/SinglePost";
import SearchBar from "@/components/SearchBar";
import { getAllPosts, getFilteredPosts, getPostsbyCategory } from "@/lib/posts";

interface PageProps {
  params?: {
    category?: string;
  };
  searchParams?: {
    query?: string;
  };
}
const Page = async ({ params, searchParams }: PageProps) => {
  const category = params?.category || "";
  const query = searchParams?.query || "";
  /**Trying to update the function to include search as well */
  const blogPosts = query
    ? getFilteredPosts(query).filter((post) => post.publish)
    : category === "All"
    ? getAllPosts().filter((post) => post.publish)
    : getPostsbyCategory(category);

  const sortedBlogPosts = blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <main className="w-[90%] md:w-[85%] mx-auto min-h-screen">
      <Blog />
      {/* <p>{params.category}</p> */}
      <div className="w-full flex flex-col-reverse gap-y-2 md:flex-row justify-between">
        <Categories />
        <SearchBar />
      </div>

      {/* <p>{params.category}</p> */}

      {/* Posts */}
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
        {sortedBlogPosts?.map((post) => (
          <SinglePost
            key={post.title}
            title={post.title}
            description={post.description}
            slug={post.slug}
            date={post.date}
            category={post.category}
          />
        ))}
        {!sortedBlogPosts.length && (
          <p className="text-center w-full mt-10 col-span-3 text-xl font-light text-muted-foreground">
            No posts in this category.
          </p>
        )}
      </div>
    </main>
  );
};

export default Page;
