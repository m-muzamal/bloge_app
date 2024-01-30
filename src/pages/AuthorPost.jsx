import React, { useState } from "react";
import { DUMMY_POSTS } from "./data";
import Postitem from "../components/Postitem";

const AuthorPost = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <section className="author_posts">
      {posts.length > 0 ? (
        <div className="container author-posts_container">
          {posts.map(({ id, thumbnail, category, authorID, title, desc }) => (
            <Postitem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              authorID={authorID}
              title={title}
              description={desc}
            />
          ))}
        </div>
      ) : (
        <h2 className="center">No post found</h2>
      )}
    </section>
  );
};

export default AuthorPost;
