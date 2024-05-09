import React from "react";
import Posts from "../components/Posts";

const Home = () => {
  const date = new Date();
  console.log(date.toLocaleDateString());
  console.log(date.toLocaleTimeString());
  return <Posts />;
};

export default Home;
