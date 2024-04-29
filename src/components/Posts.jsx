import React, { useEffect, useState } from "react";
import Postitem from "./Postitem";
import { DUMMY_POSTS } from "../pages/data";

function Posts() {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/blog")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);
  // console.log(data);

  return (
    <section className="posts">
      {posts?.length > 0 ? (
        <div className="container post_container">
          {data?.map((data, index) => (
            <Postitem key={index} data={data} />
          ))}
        </div>
      ) : (
        <h2 className="center">No post found</h2>
      )}
    </section>
  );
}

export default Posts;
