import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../assets/images/avatar1.jpg";

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sdfa`} className="post_author">
      <div className="post_author-avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="post_author-detail">
        <h5>By: Muhammad Muzammal</h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
