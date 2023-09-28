const handlePostLike = (event) => {
  const classes = event.target.classList;
  if (classes.contains("fa-regular")) classes.replace("fa-regular", "fa-solid");
  else classes.replace("fa-solid", "fa-regular");
};

const showMedia = (event, type) => {
  const [file] = event.target.files;
  if (file) {
    // Reset prior uploads
    document.getElementById("uploaded-post-video").parentElement.style.display =
      "none";
    document.getElementById("uploaded-post-image").style.display = "none";

    // upload
    const media = document.getElementById("uploaded-post-" + type);
    media.src = URL.createObjectURL(file);
    if (type === "video") media.parentElement.style.display = "block";
    else media.style.display = "block";
  }
};

const createPost = (event) => {
  event.preventDefault();
};
