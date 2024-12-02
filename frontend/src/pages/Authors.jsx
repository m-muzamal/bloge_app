import React, { useState } from "react";

import Avatar1 from "../assets/images/avatar1.jpg";
import Avatar2 from "../assets/images/avatar2.jpg";
import Avatar3 from "../assets/images/avatar3.jpg";
import Avatar4 from "../assets/images/avatar4.jpg";
import Avatar5 from "../assets/images/avatar5.jpg";
import { Link } from "react-router-dom";

const authorData = [
  { id: 1, avatar: Avatar1, name: "Muzammal", post: 3 },
  { id: 2, avatar: Avatar2, name: "Hassan", post: 7 },
  { id: 3, avatar: Avatar3, name: "Huzaifa", post: 0 },
  { id: 4, avatar: Avatar4, name: "Awais", post: 2 },
  { id: 5, avatar: Avatar5, name: "Saad", post: 5 },
];

function Authors() {
  const [authors, setAuthors] = useState(authorData);

  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors_container">
          {authorData.map(({ id, avatar, name, post }) => {
            return (
              <Link key={id} to={`/posts/users/${id}`} className="author">
                <div className="author_avatar">
                  <img src={avatar} alt="image" />
                </div>
                <div className="author_info">
                  <h4>{name}</h4>
                  <p>{post}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2 className="center">No users/authors found.</h2>
      )}
    </section>
  );
}

export default Authors;
