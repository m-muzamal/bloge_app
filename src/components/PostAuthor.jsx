import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../assets/images/avtr.jpg";

const PostAuthor = ({ name }) => {
  return (
    <Link to={`/posts/users/${name}`} className="post_author">
      <div className="post_author-avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="post_author-detail">
        <h5>By: {name}</h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
