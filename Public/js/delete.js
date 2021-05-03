const deletePostHandler = async (event) => {
  event.preventDefault();

  // const id =

  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
    body: JSON.stringify({ post_id: id }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If successful, reloads the page
    document.location.replace("dashboard");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("#deleteBtn")
  .addEventListener("submit", deletePostHandler);
