// App init
const express = require("express");
const path = require("path");
const app = express();

// app.use(express.static(__dirname + "/public"));

app.use("/", express.static(path.resolve(__dirname, "public")));

// app.get("/*", (req, res) => {
//   res.sendFile(path.resolve("public", "Index.html"));
// });

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// Routers init
app.use("/", require("./routes/LoginRouter"));
app.use("/main", require("./routes/MainPageRouter"));
app.use("/feed", require("./routes/FeedRouter"));
app.use("/profile", require("./routes/ProfileRouter"));
app.use("/friends", require("./routes/FriendsRouter"));
app.use("/groups", require("./routes/GroupsRouter"));
app.use("/administration", require("./routes/AdministrationRouter"));

app.listen(8081);
