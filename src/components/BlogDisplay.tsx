import SearchBar from "./SearchBar";
import Categories from "./Categories";
import SinglePost from "./SinglePost";
import { getFilteredPosts, getPostsbyCategory } from "@/lib/posts";

interface Post {
  file: string;
  slug: any;
  title: any;
  description: any;
  publish: any;
  category: any;
  date: string;
  content: string;
}

interface SearchParams {
  query?: string;
}
const BlogDisplay = ({ query }: SearchParams) => {
  // console.log("IN THE BLOG DISPLAY:", query);

  const blogPosts: Post[] = query
    ? getFilteredPosts(query).filter((post) => post.publish)
    : getPostsbyCategory("Featured").sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
  //console.log(blogPosts);
  return (
    <div className="w-[90%] md:w-[85%] mx-auto">
      {/* <Categories /> */}
      <div className="w-full flex flex-col-reverse gap-y-3 md:flex-row justify-center gap-x-3 md:justify-between">
        <div>
          <Categories />
        </div>
        <div>
          <SearchBar />
        </div>
      </div>

      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
        {blogPosts.length > 0 ? (
          blogPosts.map((post) => (
            <SinglePost
              key={post.title}
              title={post.title}
              description={post.description}
              slug={post.slug}
              date={post.date}
              category={post.category}
            />
          ))
        ) : (
          <p className="text-muted-foreground font-light text-xl text-center w-full mt-10 col-span-3 dark:text-foreground">
            No search results found.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogDisplay;
