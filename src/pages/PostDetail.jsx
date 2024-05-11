import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import deletePost from "../hook/deletePost";

function PostDetail() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const isLoggedIn = JSON.parse(sessionStorage.getItem("isLoggedIn"));
  const navigate = useNavigate();
  const peram = useParams();
  const data = useFetch("http://localhost:5000/api/blog");
  const post = data?.find((data) => data.idblog === Number(peram.id));

  const handleClick = () => {
    // console.log(Number(peram.id));
    deletePost(Number(peram.id));
    alert("Post is deleted.");
    navigate("/");
  };

  const handleNavigate = () => {
    !isLoggedIn && alert("You have to login first!");
    if (user.name === post.author) {
      isLoggedIn
        ? navigate(`/posts/${Number(peram.id)}/edit`)
        : navigate("/login");
    } else {
      alert(
        `You can't edit this post!\nOnly ${post.author} can edit this post.`
      );
    }
  };

  return (
    <section className="post-detail">
      <div className="container post-detail_container">
        <div className="post-detail_header">
          <PostAuthor name={post?.author} />
          {isLoggedIn && (
            <div className="post-detail_buttons">
              <a
                onClick={handleNavigate}
                // to={`/posts/${Number(peram.id)}/edit`}
                className="btn sm primary"
              >
                Edit
              </a>
              <a className="btn sm danger" onClick={handleClick}>
                Delete
              </a>
            </div>
          )}
        </div>
        <h1>{post?.title}</h1>
        <div className="post-detail_thumbnail">
          <img src={post?.thumbnail} alt="thumbnail" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post?.about }} />
      </div>
    </section>
  );
}

export default PostDetail;
