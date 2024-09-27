import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { oswald, raleway } from "@/lib/fonts";
import ThemeSwitch from "@/components/Theme-Switch";
import { getPostBySlug, getAllPosts } from "@/lib/posts";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
};

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const post = await getPostBySlug(slug);

  return (
    <div
      className={`w-full h-auto md:min-h-screen p-10 bg-[url('/graph-paper-light.svg')] dark:bg-[url('/graph-paper.svg')]`}>
      <div className="w-full h-full py-8 md:max-w-4xl md:mx-auto md:px-20 flex flex-col gap-y-4">
        <div className="w-full md:max-w-4xl md:mx-auto flex items-center justify-between">
          <Link className="group" href={"/"}>
            <p className={`flex items-center md:text-lg`}>
              <span className="inline-block">
                <ArrowLeft className="text-2xl transition-transform duration-200 ease-in-out transform group-hover:-translate-x-1" />
              </span>
              Back
            </p>
          </Link>
          <ThemeSwitch />
        </div>

        <h1 className={`text-2xl md:text-3xl ${oswald.className}`}>
          {post.metadata.title}
        </h1>
        <p className={`md:text-lg ${raleway.className} text-muted-foreground`}>
          {post.metadata.description}
        </p>
        <span className={`text-muted-foreground ${raleway.className}`}>
          {post.date}
        </span>

        <article
          className={`${oswald.variable} ${raleway.className} prose dark:prose-invert prose-pre:rounded-md prose-headings:font-oswald prose-headings:text-muted-foreground prose-p:font-raleway`}>
          <div dangerouslySetInnerHTML={{ __html: post.content1 }} />
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
export const generateStaticParams = () => {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};
