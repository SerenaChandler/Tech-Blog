const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#email-login").value.trim();
  const content = document.querySelector("#password-login").value.trim();

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({ title, content }),
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
