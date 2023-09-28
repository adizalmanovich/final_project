const handleGroupUpdate = (group) => {
  // TODO - ADD the success and error to the front
  $.ajax({
    method: "POST",
    url: "/groups/update",
    data: group,
    success: (result) => {},
    error: (result) => {
      showNotification(result.responseJSON.error, "danger");
    },
  });
};

const handleGroupCreate = (group) => {
  // TODO - ADD the success and error to the front
  $.ajax({
    method: "POST",
    url: "/groups/create",
    data: group,
    success: (result) => {},
    error: (result) => {
      showNotification(result.responseJSON.error, "danger");
    },
  });
};

const handleGroupDelete = (group) => {
  // TODO - ADD the success and error to the front
  $.ajax({
    method: "POST",
    url: "/groups/delete",
    data: group,
    success: (result) => {},
    error: (result) => {
      showNotification(result.responseJSON.error, "danger");
    },
  });
};

const handleGroupList = () => {
  // TODO - ADD the success and error to the front
  $.ajax({
    method: "GET",
    url: "/groups/list",
    success: (result) => {},
    error: (result) => {
      showNotification(result.responseJSON.error, "danger");
    },
  });
};

const handleGroupSearch = (event) => {
  if (event.target.value === "") {
    // Reset window when search is empty
    const groupsMain = document.getElementById("groups-main");
    groupsMain.innerHTML = `<div class="search-something">
          <i class="fa-solid fa-magnifying-glass search-bar-icon fa-lg"></i>
          <div>Search Something</div>
        </div>`;
    return;
  }

  $.ajax({
    url: "/groups/search?search=" + event.target.value,
    type: "GET",
    success: (result) => {
      const groupsMain = document.getElementById("groups-main");
      groupsMain.innerHTML = ""; // Clear before each search
      const groups = result.groups;

      if (groups.length === 0) {
        // Show message that no groups were found
        groupsMain.innerHTML = `<div class="search-something">
          <i class="fa-solid fa-magnifying-glass search-bar-icon fa-lg"></i>
          <div>Could't find groups matching this search</div>
        </div>`;
      } else {
        // Load groups to page
        for (let i = 0; i < groups.length; i++) {
          const group = groups[i];
          const id = group._id;
          const profileImage = group.profileImage;
          const groupName = group.name;
          groupsMain.innerHTML += `
          <a href="/main/groups/group?id=${id}" data-link>
            <div class="search-item">
                ${
                  profileImage === undefined ||
                  profileImage === null ||
                  profileImage === ""
                    ? `<i class="fa-solid fa-people-group fa-2xl search-item-default-image"></i>`
                    : `<img
                src=${profileImage}
                alt="friend-img"
                class="search-item-image"
              />`
                }
              <div class="search-item-text" title="${groupName}">${
            groupName.length < 17
              ? groupName
              : groupName.substring(0, 17) + "..."
          }</div>
            </div>
          </a>`;
        }
      }
    },
    error: (result) => {
      showNotification(result.responseJSON.error, "danger");
    },
  });
};
