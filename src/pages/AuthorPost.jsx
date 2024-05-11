import React from "react";
// import { DUMMY_POSTS } from "./data";
import Postitem from "../components/Postitem";
import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";

const AuthorPost = () => {
  const peram = useParams();
  // console.log(peram);
  const data = useFetch("http://localhost:5000/api/blog");
  const posts = data?.filter((data) => data?.author === peram?.id);
  // console.log(posts);

  return (
    <section className="author_posts">
      {posts?.length > 0 ? (
        <div className="container author-posts_container">
          {posts?.map((data, index) => (
            <Postitem key={index} data={data} />
          ))}
        </div>
      ) : (
        <h2 className="center">No post found</h2>
      )}
    </section>
  );
};

export default AuthorPost;
