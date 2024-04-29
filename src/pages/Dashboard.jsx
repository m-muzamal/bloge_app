import React from "react";
// import { DUMMY_POSTS } from "../pages/data";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import deletePost from "../hook/deletePost";

function Dashboard() {
  const peram = useParams();
  // console.log(peram.id);
  const data = useFetch("http://localhost:3001/api/blog");
  const authorPost = data?.filter((data) => data?.author === peram?.id);
  // console.log(authorPost);

  const handleClick = (id) => {
    if (confirm("Are you sure you want to delete this post?")) {
      // console.log(Number(id));
      deletePost(Number(id));
      document.location.reload();
    }
  };

  return (
    <section className="dashboard">
      {authorPost?.length > 0 ? (
        <div className="container dashboard_container">
          {authorPost?.map((post, index) => {
            return (
              <article key={index} className="dashboard_post">
                <div className="dashboard_post-info">
                  <div className="dashboard_post-thumbnail">
                    <img src={post.thumbnail} alt="" />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard_post-actions">
                  <Link to={`/posts/${post.idblog}`} className="btn sm">
                    View
                  </Link>
                  <Link
                    to={`/posts/${post.idblog}/edit`}
                    className="btn sm primary"
                  >
                    Edit
                  </Link>
                  <a
                    onClick={() => handleClick(post.idblog)}
                    className="btn sm danger"
                  >
                    Delete
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <h2 className="center">You have no posts yet.</h2>
      )}
    </section>
  );
}

export default Dashboard;
