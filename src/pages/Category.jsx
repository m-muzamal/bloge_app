import React, { useEffect, useState } from "react";
// import { DUMMY_POSTS } from "./data";
import Postitem from "../components/Postitem";
import useFetch from "../hook/useFetch";
import { useParams } from "react-router-dom";

const Category = () => {
  const peram = useParams();
  const data = useFetch("http://localhost:5000/api/blog");
  const filter = data?.filter((data) => data?.category === peram?.category);

  return (
    <section className="category_posts">
      {filter && filter?.length > 0 ? (
        <div className="container category-posts_container">
          {filter?.map((data, index) => (
            <Postitem key={index} data={data} />
          ))}
        </div>
      ) : (
        <h2 className="center">No post found</h2>
      )}
    </section>
  );
};

export default Category;
