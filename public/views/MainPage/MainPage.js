$(() => {
  initSidebar();
});

const initSidebar = () => {
  const url = window.location.href;
  const sidebar = document.getElementById("main-navbar");
  const sidebarItems = sidebar.getElementsByClassName("main-navbar-item");
  for (let i = 0; i < sidebarItems.length; i++) {
    if (sidebarItems[i].href === url) {
      sidebarItems[i].classList.add("main-navbar-item-active");
      return;
    }
  }

  // If we don't recognized the URL we will redirect to /main and mark the first item in the navbar as active
  if (location.pathname !== "/main") window.location.replace("/main");
  sidebarItems[0].classList.add("main-navbar-item-active");
};

const handleSidebarChange = (event) => {
  let currentElement = event.target;
  if (event.target.tagName === "I")
    currentElement = currentElement.parentElement;
  const navbar = document.getElementById("main-navbar");
  const feedNavbarItems = navbar.getElementsByClassName("main-navbar-item");
  for (let i = 0; i < feedNavbarItems.length; i++) {
    feedNavbarItems[i].classList.remove("main-navbar-item-active");
  }
  currentElement.classList.add("main-navbar-item-active");
};
