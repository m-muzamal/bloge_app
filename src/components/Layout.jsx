import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { BlogProvider } from "../context/context";

function Layout() {
  const [user, setUser] = useState([]);
  const [blog, setBlog] = useState([]);
  const [isLoggin, setIsLoggin] = useState(false);

  const deleteBlog = (id) => {
    setBlog((prev) => prev.filter((blog) => blog.id !== id));
  };

  useEffect(() => {
    const blog = JSON.parse(localStorage.getItem("blog"));
    if (blog && blog.length > 0) {
      setBlog(blog);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("blog", JSON.stringify(blog));
  }, [blog]);

  return (
    <BlogProvider value={{ blog, user, deleteBlog, isLoggin }}>
      <Header />
      <Outlet />
      <Footer />
    </BlogProvider>
  );
}

export default Layout;
