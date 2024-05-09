import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const Postitem = ({ data }) => {
  const navigate = useNavigate();
  const shortDesc =
    data?.about.length > 145 ? data?.about.substr(0, 145) + "..." : data?.about;
  const shortTitle =
    data?.title.length > 30 ? data?.title.substr(0, 30) + "..." : data?.title;

  const handleClick = () => {
    navigate(`/posts/${data?.idblog}`);
  };

  return (
    <article className="post">
      <div className="post_thumbnail" onClick={handleClick}>
        <img src={data.thumbnail} alt={data?.title} />
      </div>
      <div className="post_content">
        <Link to={`/posts/${data?.idblog}`}>
          <h3>{shortTitle}</h3>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: shortDesc }} />

        <div className="post_footer">
          <PostAuthor name={data?.author} />
          <Link
            to={`/posts/categories/${data?.category}`}
            className="btn category"
          >
            {data?.category}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Postitem;
