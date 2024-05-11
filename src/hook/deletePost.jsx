const deletePost = async (postId) => {
  try {
    await fetch(`http://localhost:5000/api/blog/${postId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};

export default deletePost;
