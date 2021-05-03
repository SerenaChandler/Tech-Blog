const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#email-login").value.trim();
  const content = document.querySelector("#password-login").value.trim();

  //   const id =

  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({ post_id: id, title, content }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If successful, redirect the browser to the dashboard page
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newPostHandler);
