import { getAllPosts, getPostsbyCategory } from "@/lib/posts";
import Categories from "@/components/Categories";
import SinglePost from "@/components/SinglePost";
import Blog from "@/components/Blog";

const Page = async ({ params }: { params: { category: string } }) => {
  const blogPosts =
    params.category === "All"
      ? getAllPosts().filter((post) => post.publish)
      : getPostsbyCategory(params.category);
  //const blogPosts = getAllPosts().filter((post, i) => post.publish);
  const sortedBlogPosts = blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <main className="w-[80%] mx-auto min-h-screen">
      <Blog />
      {/* <p>{params.category}</p> */}
      <Categories />
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
          <p className="text-center w-full mt-10 col-span-3 text-xl italic">
            No posts in this category
          </p>
        )}
      </div>
    </main>
  );
};

export default Page;
