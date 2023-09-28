const login = async (event) => {
  event.preventDefault();

  $.ajax({
    url: "/login",
    type: "POST",
    data: JSON.stringify({
      username: $("#login-username").val(),
      password: $("#login-password").val(),
    }),
    contentType: "application/json; charset=utf-8",
    success: (result) => {},
    error: (result) => {
      showNotification(result.responseJSON.error, "danger");
    },
  });
};
