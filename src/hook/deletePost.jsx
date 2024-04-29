const deletePost = async (postId) => {
  try {
    await fetch(`http://localhost:3001/api/blog/${postId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};

export default deletePost;
