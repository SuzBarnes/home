import React from "react";
import "../styling/blog.scss";
import BlogCard1 from "./BlogCard1";
import BlogCard2 from "./BlogCard2";

const Blog = () => {
  return (
    <div>
      <h3>Follow my journey...</h3>
      <div className="blog">
        <BlogCard2 />
      </div>
      <div className="blog">
        <BlogCard1 />
      </div>
    </div>
  );
};

export default Blog;
