const handleFriendsSearch = (event) => {
  if (event.target.value === "") {
    // Reset window when search is empty
    const friendsMain = document.getElementById("friends-main");
    friendsMain.innerHTML = `<div class="search-something">
          <i class="fa-solid fa-magnifying-glass search-bar-icon fa-lg"></i>
          <div>Search Something</div>
        </div>`;
    return;
  }

  $.ajax({
    url: "/friends/search?search=" + event.target.value,
    type: "GET",
    success: (result) => {
      const friendsMain = document.getElementById("friends-main");
      friendsMain.innerHTML = ""; // Clear before each search
      const friends = result.friends;

      if (friends.length === 0) {
        // Show message that no friends were found
        friendsMain.innerHTML = `<div class="search-something">
          <i class="fa-solid fa-magnifying-glass search-bar-icon fa-lg"></i>
          <div>Could't find friends matching this search</div>
        </div>`;
      } else {
        // Load friends to page
        for (let i = 0; i < friends.length; i++) {
          const friend = friends[i];
          const id = friend._id;
          const profileImage = friend.profileImage;
          const friendName = friend.name;
          friendsMain.innerHTML += `
          <a href="/main/friends/profile?id=${id}" data-link>
            <div class="search-item">
                ${
                  profileImage === undefined ||
                  profileImage === null ||
                  profileImage === ""
                    ? `<i class="fa-solid fa-user fa-2xl search-item-default-image"></i>`
                    : `<img
                src=${profileImage}
                alt="friend-img"
                class="search-item-image"
              />`
                }             
              <div class="search-item-text" title="${friendName}">${
            friendName.length < 17
              ? friendName
              : friendName.substring(0, 17) + "..."
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
