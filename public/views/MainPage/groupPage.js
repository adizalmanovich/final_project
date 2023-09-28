const groupsController = require("../../controllers/GroupsController");

const createNewGroup = async() => {
    console.log("create new group");
    await groupsController.createNewGroup({name: "test", description:"test2"});
    groupsController.getGroupsPage();
};

