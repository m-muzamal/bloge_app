import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [discription, setDiscription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    if (title === "" || category === "Uncategorized" || discription === "") {
      setError("Please fill all the fileds.");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    axios.post("http://localhost:3001/api/blog", {
      userid: "5",
      title: title,
      category: category,
      about: discription,
    });
    console.log(title, category, discription, thumbnail);
    alert("The blog is successfully created.");
  };

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

  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        {error ? <p className="form_error-message">{error}</p> : ""}
        <form className="form create-post_form">
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
          <ReactQuill
            modules={modules}
            formats={formates}
            value={discription}
            onChange={setDiscription}
          />
          <input
            type="file"
            onChange={(e) => setThumbnail(e.target.files[0])}
            accept="png, jpg, jpeg"
          />
          <button type="button" className="btn primary" onClick={handleClick}>
            Create
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreatePost;
