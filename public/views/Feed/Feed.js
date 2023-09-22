const handlePostLike = (event) => {
  const classes = event.target.classList;
  if (classes.contains("fa-regular")) classes.replace("fa-regular", "fa-solid");
  else classes.replace("fa-solid", "fa-regular");
};
