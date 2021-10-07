import React from "react";
import { categoryColors } from "./styles";

const MasonryPost = ({ post, tagsOnTop }) => {
  const windowWidth = window.innerWidth;

  const backgroundImage = {
    backgroundImage: `url("${
      require(`../../assets/images/${post.image}`).default
    }")`,
  };

  const style =
    windowWidth > 1200
      ? { ...backgroundImage, ...post.style }
      : { ...backgroundImage };

  return (
    <a className="masonry-post overlay" href={post.link} style={style}>
      <div
        className="image-text"
        style={{ justifyContent: tagsOnTop ? "space-between" : "flex-end" }}
      >
        <div className="tags-container">
          {post.categories.map((tag, index) => (
            <span
              key={index}
              className="tag"
              style={{ background: categoryColors[tag], marginRight: "10px" }}
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
        <div>
          <h2 className="image-title">{post.title}</h2>
          <span className="image-date"> {post.date} </span>
        </div>
      </div>
    </a>
  );
};

export default MasonryPost;
