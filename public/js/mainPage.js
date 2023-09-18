$(() => {
  document.querySelector("body").classList.add("opacity");
  handlePageResizeForNavbar();
});

window.onresize = (event) => {
  handlePageResizeForNavbar();
};

// To return to main page on refresh after using navbar
window.onbeforeunload = (e) => {
  window.setTimeout(() => {
    window.location = "/main";
  }, 0);
  window.onbeforeunload = null; // To prevent infinite loop, that kills your browser
};

const handlePageResizeForNavbar = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 630) {
    document.getElementById("main-navbar-item-feed").innerHTML = "Feed";
    document.getElementById("main-navbar-item-friends").innerHTML = "Friends";
    document.getElementById("main-navbar-item-groups").innerHTML = "Groups";
    document.getElementById("main-navbar-item-profile").innerHTML = "Profile";
    document.getElementById("main-navbar-item-administration").innerHTML =
      "Administration";
  } else {
    document.getElementById("main-navbar-item-feed").innerHTML =
      '<i class="fa-solid fa-bars"></i>';
    document.getElementById("main-navbar-item-friends").innerHTML =
      '<i class="fa-solid fa-user"></i>';
    document.getElementById("main-navbar-item-groups").innerHTML =
      '<i class="fa-solid fa-user-group"></i>';
    document.getElementById("main-navbar-item-profile").innerHTML =
      '<i class="fa-solid fa-id-card"></i>';
    document.getElementById("main-navbar-item-administration").innerHTML =
      '<i class="fa-solid fa-chart-simple"></i>';
  }
};

const handlePostLike = (event) => {
  const classes = event.target.classList;
  if (classes.contains("fa-regular")) classes.replace("fa-regular", "fa-solid");
  else classes.replace("fa-solid", "fa-regular");
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

const getHTML = async (path) => {
  return await fetch(path).then((response) => {
    return response.text();
  });
};

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/main/feed", view: await getHTML("/feed") },
    { path: "/main/profile", view: await getHTML("/profile") },
    { path: "/main/friends", view: await getHTML("/friends") },
    { path: "/main/groups", view: await getHTML("/groups") },
    { path: "/main/administration", view: await getHTML("/administration") },
  ];

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  //const view = new match.route.view(getParams(match));
  if (match !== undefined)
    document.querySelector("#main-data-section").innerHTML = match.route.view;
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
