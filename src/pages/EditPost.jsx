import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [err, setErr] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [discription, setDiscription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/blog/${id}`);
        const data = res.data;
        setTitle(data[0]?.title);
        setCategory(data[0]?.category);
        setDiscription(data[0]?.about);
        setThumbnail(data[0]?.thumbnail);
        setAuthor(data[0]?.author);
      } catch (error) {
        displayErr(error);
        console.error("Error:", error.message);
      }
    })();
  }, [id]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "inderline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formates = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const POST_CATEGORY = [
    "Agriculture",
    "Buisness",
    "Education",
    "Entertainment",
    "Art",
    "Investment",
    "Uncategorized",
    "Weather",
  ];

  function displayErr(msg) {
    setErr(msg);
    setTimeout(() => {
      setErr("");
    }, 2000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {
        await axios
          .patch(`http://localhost:3001/api/edit-blog/${Number(id)}`, {
            author: author,
            title: title,
            category: category,
            about: discription,
            thumbnail: thumbnail,
          })
          .then(navigate(`/posts/${Number(id)}`));
      } catch (error) {
        displayErr(error);
        console.log("Error:", error.message);
      }
    })();
  };

  return (
    <section className="create-post">
      <div className="container">
        <h2>Edit Post</h2>
        {err && <p className="form_error-message">{err}</p>}
        <form className="form create-post_form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {POST_CATEGORY.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Image url"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
          <ReactQuill
            modules={modules}
            formats={formates}
            value={discription}
            onChange={setDiscription}
          />
          <button type="submit" className="btn primary">
            Update
          </button>
        </form>
      </div>
    </section>
  );
}

export default EditPost;
