/*
  Type can be [
    "primary" (blue),
    "secondary" (grey),
    "success" (green),
    "danger" (red),
    "warning" (yellow),
    "info" (turquoise),
    "light" (white),
    "dark (dark grey)
  ]
*/
const showNotification = (message, type) => {
  const notificationElement = document.getElementById("page-notification");
  if (notificationElement !== null) notificationElement.parentElement.remove(); // Removing current notification if exists

  // Creating the notification
  const notificationElementContainer = document.createElement("div");
  notificationElementContainer.classList.add(
    "toast-container",
    "position-fixed",
    "mt-2",
    "start-50",
    "translate-middle-x",
    "p-1"
  );

  const notificationElementBody = document.createElement("div");
  notificationElementContainer.classList.add(
    "toast",
    "text-white",
    "text-center",
    "bg-" + type
  );
  notificationElementBody.setAttribute("id", "page-notification");
  notificationElementBody.setAttribute("role", "alert");
  notificationElementBody.setAttribute("aria-live", "assertive");
  notificationElementBody.setAttribute("aria-atomic", "true");

  const notificationElementText = document.createElement("div");
  notificationElementText.classList.add("toast-body");
  notificationElementText.innerText = message;

  notificationElementBody.appendChild(notificationElementText);
  notificationElementContainer.appendChild(notificationElementBody);

  // Adding the notification to the body of the page
  document
    .getElementsByTagName("body")[0]
    .appendChild(notificationElementContainer);

  // Creating the toast and showing it
  const notificationToast = bootstrap.Toast.getOrCreateInstance(
    notificationElementContainer
  );
  notificationToast.show();
};

/*
  Size can be [
    "sm" (300px),
    "" (500px),
    "lg" (800px),
    "xl" (1140px)
  ]
*/
const showModal = (size, bodyText, btnText, btnFunc) => {
  const modalElement = document.getElementById("app-modal");
  if (modalElement !== null) modalElement.remove(); // Removing current modal if exists

  // Creating the modal
  const modalElementContainer = document.createElement("div");
  modalElementContainer.classList.add(
    "modal",
    "fade",
    size == "" ? size : "modal-" + size
  );
  modalElementContainer.setAttribute("id", "app-modal");
  modalElementContainer.setAttribute("data-bs-keyboard", "false");
  modalElementContainer.setAttribute("tabindex", "-1");
  modalElementContainer.setAttribute("aria-labelledby", "staticBackdropLabel");
  modalElementContainer.setAttribute("aria-hidden", "true");

  const modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog", "modal-dialog-centered");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  const modalBodyText = document.createElement("div");
  modalBodyText.classList.add("modal-body-text");
  modalBodyText.innerHTML = bodyText;
  modalBody.appendChild(modalBodyText);

  const modalFooter = document.createElement("div");
  modalFooter.classList.add("modal-footer");

  if (btnText !== undefined)
    modalFooter.innerHTML =
      modalFooter.innerHTML = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="${btnFunc}()">${btnText}</button>`;

  modalFooter.innerHTML += `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`;

  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);

  modalDialog.appendChild(modalContent);
  modalElementContainer.appendChild(modalDialog);

  // Adding the modal to the body of the page
  document.getElementsByTagName("body")[0].appendChild(modalElementContainer);

  // Showing the modal
  $("#app-modal").modal("show");
};
