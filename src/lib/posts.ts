import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

import rehypeHighlight from "rehype-highlight";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";

import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import css from "highlight.js/lib/languages/css";
import rust from "highlight.js/lib/languages/rust";
import typescript from "highlight.js/lib/languages/typescript";

const blogDirectory = path.join(process.cwd(), "/content");

export const getAllPosts = () => {
  /**Read all the files in the blog direcotry */
  /**This array named files only stores the names of the files,nothing else */
  const files = fs.readdirSync(blogDirectory);
  const postsData = files.map((file) => {
    /**Read the file content */
    const fullPath = path.join(blogDirectory, file);
    const fileContent = fs.readFileSync(fullPath, "utf-8");

    /**Use gray matter to parse the front-matter of the content */
    const { data, content } = matter(fileContent);
    // console.log("Here is data : ", data);
    const slug = data.slug ? data.slug : file.replace(/\.mdx$/, "");
    /**Function modified to place the recent date if there is no date */
    const date = data.date
      ? new Date(data.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        })
      : new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        });

    /**Return the data,content and slug in an object */
    return {
      file,
      slug,
      title: data.title,
      description: data.description,
      publish: data.publish,
      category: data.category || [],
      date: date,
      content,
    };
  });
  return postsData;
};

/**This function takes a slug as an argument and returns the specific post with that slug */
/**The slug is the part of the URL that identifies the post */
export async function getPostBySlug(slug: string) {
  // const realSlug = slug.replace(/\.mdx$/, "");
  const postData = getAllPosts().find((post) => post.slug === slug);
  //console.log("POST CONTENT:", postData);
  const fullPath = path.join(blogDirectory, `${postData?.file}`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // console.log("FILE CONTENTS:", fileContents);
  const { data: metadata, content } = matter(fileContents);
  /**Function modified to place the recent date if there is no date */
  const date = metadata.date
    ? new Date(metadata.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      })
    : new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      });
  const Content = await remark().use(html).process(content);
  // console.log("CONTENT:", Content);
  const postContent = Content.toString();

  const rehypeResult = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeHighlight, {
      detect: true,
      languages: {
        typescript,
        javascript,
        python,
        css,
        rust,
      },
    })
    .use(rehypeStringify)
    .process(postContent);
  const content1 = rehypeResult.toString();

  return { slug: slug, metadata, date, content, postContent, content1 };
}

export const getPostsbyCategory = (category: string) => {
  const postsbyCategory = getAllPosts().filter(
    (post) => post.publish && post.category.includes(category)
  );

  return postsbyCategory;
};

export const getFilteredPosts = (query: string) => {
  const filteredPosts = getAllPosts().filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.description.toLowerCase().includes(query.toLowerCase) ||
      post.content.toLowerCase().includes(query.toLowerCase()) ||
      post.category.some((category: string) =>
        category.toLowerCase().includes(query.toLowerCase())
      )
  );
  return filteredPosts;
};
