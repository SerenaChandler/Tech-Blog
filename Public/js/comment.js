const newCommentHandler = async (event) => {
  event.preventDefault();

  const comment_text = document.querySelector("#email-login").value.trim();

  //   const post_id =

  const response = await fetch(`/api/posts/${id}`, {
    method: "POST",
    body: JSON.stringify({ post_id, comment_text }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If successful, reloads the page
    document.location.reload();
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("#new-comment-form")
  .addEventListener("submit", newCommentHandler);
