const register = async (event) => {
  event.preventDefault();

  if ($("#register-password").val() != $("#register-confirm-password").val()) {
    showNotification("Passwords not matching", "danger");
    return;
  }

  $.ajax({
    url: "/register",
    type: "POST",
    data: JSON.stringify({
      firstName: $("#register-first-name").val(),
      lastName: $("#register-last-name").val(),
      email: $("#register-email").val(),
      username: $("#register-username").val(),
      password: $("#register-password").val(),
    }),
    contentType: "application/json; charset=utf-8",
    success: (result) => {
      showNotification(result.message, "success");
      setTimeout(
        () => window.location.replace("/"), // Getting back to login page
        3000
      );
    },
    error: (result) => {
      showNotification(result.responseJSON.error, "danger");
    },
  });
};
