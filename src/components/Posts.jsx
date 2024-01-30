import React, { useState } from "react";
import Postitem from "./Postitem";
import { DUMMY_POSTS } from "../pages/data";

function Posts() {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <section className="posts">
      {posts.length > 0 ? (
        <div className="container post_container">
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
}

export default Posts;
