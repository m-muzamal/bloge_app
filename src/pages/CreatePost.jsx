import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreatePost() {
  const data = JSON.parse(localStorage.getItem("user")) || "";
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [discription, setDiscription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [error, setError] = useState("");

  const handleClick = async () => {
    if (title === "" || category === "Uncategorized" || discription === "") {
      displayErr("Please fill all the fileds.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3001/api/blog", {
        userid: "5",
        title: title,
        category: category,
        about: discription,
        author: data.name,
        thumbnail: thumbnail,
      });
      // console.log(title, category, discription, thumbnail);
      if (res.status === 200) {
        alert("The blog is successfully created.");
        reset();
      } else {
        throw new Error("Somthing went wrong in creating log!");
      }
    } catch (error) {
      console.error(error);
    }
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

  const reset = () => {
    setCategory("");
    setDiscription("");
    setThumbnail("");
    setTitle("");
  };

  const displayErr = (msg) => {
    setError(msg);
    setTimeout(() => {
      setError("");
    }, 2000);
  };

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
          <input
            type="text"
            placeholder="Image url"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
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
          <button type="button" className="btn primary" onClick={handleClick}>
            Create
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreatePost;
