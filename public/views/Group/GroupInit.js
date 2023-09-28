export const initGroup = () => {
  // Setting group information
  const info = getGroupProfileInformation();
  document.getElementById("group-number-of-posts").innerText = info.numOfPosts;
  document.getElementById("group-number-of-members").innerText =
    info.numOfMembers;
  document.getElementById("group-profile-description").innerText =
    info.description;

  const profileImage =
    info.profileImage !== undefined &&
    info.profileImage !== null &&
    info.profileImage !== ""
      ? `<img
                src="${info.profileImage}"
                alt="profile-img"
                class="post-profile-image"
            />`
      : `<i class="fa-solid fa-user"></i>`;

  const profileDetailsProfileImageContainer = document.getElementById(
    "profile-details-profile-image-container"
  );
  profileDetailsProfileImageContainer.innerHTML =
    profileImage.replace(
      `class="post-profile-image"`,
      `class="profile-details-profile-image"`
    ) + `<div class="profile-details-name">${info.name}</div>`;

  // Setting create post profile picture
  document.getElementById("create-post-group-profile-img-container").innerHTML =
    profileImage;

  // Setting group posts
  const feedContent = document.getElementById("profile-feed-content");
  const posts = getGroupPosts();
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const isVideo = post.isVideo;
    const postedOn = post.creationDate;
    const mediaSource = post.mediaSource;
    const username = "test test";
    const description = post.description;

    if (isVideo) {
      const videoTemplate = `
        <div class="post-container">
            <header class="post-header">
              <div class="post-header-profile-img-container">
              ${profileImage}
              </div>
              <div class="post-header-date">${postedOn}</div>
            </header>
            <div class="post-media-section">
              <video controls class="post-media">
                <source src="${mediaSource}" type="video/mp4" />
              </video>
            </div>
            <div class="post-btns">
              <button class="post-like-btn">
                <i
                  class="fa-regular fa-heart fa-lg"
                  onclick="handlePostLike(event)"
                ></i>
              </button>
              <button class="post-comment-btn">
                <i class="fa-regular fa-comment fa-lg"></i>
              </button>
              <button class="post-share-btn">
                <i class="fa-solid fa-share fa-lg"></i>
              </button>
            </div>
            <div class="post-text">
              <span class="post-text-username">${username}</span>
              ${description}
            </div>
        </div>
        `;
      feedContent.innerHTML += videoTemplate;
    } else {
      const imageTemplate = `
        <div class="post-container">
             <header class="post-header">
              <div class="post-header-profile-img-container">
              ${profileImage}
              </div>
              <div class="post-header-date">${postedOn}</div>
            </header>
            <div class="post-media-section">
              <img
                src="${mediaSource}"
                alt="post-img"
                class="post-media"
              />
            </div>
            <div class="post-btns">
              <button class="post-like-btn">
                <i
                  class="fa-regular fa-heart fa-lg"
                  onclick="handlePostLike(event)"
                ></i>
              </button>
              <button class="post-comment-btn">
                <i class="fa-regular fa-comment fa-lg"></i>
              </button>
              <button class="post-share-btn">
                <i class="fa-solid fa-share fa-lg"></i>
              </button>
            </div>
            <div class="post-text">
              <span class="post-text-username">${username}</span>
              ${description}
            </div>
        </div>`;
      feedContent.innerHTML += imageTemplate;
    }
  }
};

const getGroupProfileInformation = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  return {
    name: "Test Test",
    numOfPosts: 10,
    numOfMembers: 100,
    description: "Welcome to my profile page!",
    profileImage: "../../resources/images/Brazilian_Flag_-_round.svg.png",
  };
};

const getGroupPosts = () => {
  return [
    {
      id: 1,
      isVideo: false,
      creationDate: "2 days ago",
      profileImage: "",
      mediaSource: "/resources/images/paris.jpg",
      description: "My beautiful paris photo!",
    },
    {
      id: 2,
      isVideo: true,
      creationDate: "2 days ago",
      profileImage: "",
      mediaSource: "/resources/videos/paris_video.mp4",
      description: "My beautiful paris video!",
    },
  ];
};
