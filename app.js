// App init
const express = require("express");
const passport = require('./utils/passport');
const db = require('./config/db');
const session = require('express-session');

const app = express();
const path = require("path");
app.use(express.json());

app.use("/", express.static(path.resolve(__dirname, "public")));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));


app.use("/", require("./routes/LoginRouter"));
app.use("/main", require("./routes/MainPageRouter"));
app.use("/feed", require("./routes/FeedRouter"));
app.use("/profile", require("./routes/ProfileRouter"));
app.use("/friends", require("./routes/FriendsRouter"));
app.use("/groups", require("./routes/GroupsRouter"));
app.use("/administration", require("./routes/AdministrationRouter"));
app.use("/login", require("./routes/LoginRouter"));
app.use("/register", require("./routes/LoginRouter"));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
