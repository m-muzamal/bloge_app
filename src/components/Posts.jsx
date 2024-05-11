import React, { useEffect, useState } from "react";
import Postitem from "./Postitem";

function Posts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/blog")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);
  // console.log(data);

  return (
    <section className="posts">
      {data?.length > 0 ? (
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
