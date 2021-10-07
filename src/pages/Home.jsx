import React from "react";
import { PostMasonry, MasonryPost } from "../components/common/";
import trending from "../assets/mocks/trending";
import featured from "../assets/mocks/featured";

const trendingConfig = {
  1: {
    gridArea: "1/2/3/3",
  },
};

const featuredConfig = {
  0: {
    gridArea: "1/1/2/3",
    height: "30rem",
  },
  1: {
    height: "30rem",
  },
  3: {
    height: "64rem",
    width: "64rem",
    marginLeft: "3rem",
  },
};

const mergeStyles = (posts, config) => {
  posts.forEach((post, index) => {
    post.style = config[index];
  });
};

mergeStyles(trending, trendingConfig);
mergeStyles(featured, featuredConfig);

const lastFeaturedPost = featured.pop();

const Home = () => {
  return (
    <section className="container home">
      <div className="row">
        <h1>Featured posts</h1>
        <section className="featured-posts-container">
          <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
          <MasonryPost post={lastFeaturedPost} tagsOnTop={true} />
        </section>
        <h1>Trending posts</h1>
        <PostMasonry posts={trending} columns={3} />
      </div>
    </section>
  );
};

export default Home;
