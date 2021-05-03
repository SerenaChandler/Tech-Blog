const newCommentHandler = async (event) => {
  event.preventDefault();

  const comment_text = document.querySelector("#email-login").value.trim();

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.reload();
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("#new-comment-form")
  .addEventListener("submit", newCommentHandler);
