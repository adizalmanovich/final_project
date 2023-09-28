const Group = require("../models/GroupModel");
const path = require("path");

const getGroupsPage = (req, res) => {
  res.sendFile(path.resolve("public", "views/Groups/Groups.html"));
};

const getGroupProfilePage = (req, res) => {
  res.sendFile(path.resolve("public", "views/Group/Group.html"));
};

const getGroupsSearch = async(req, res) => {
  const searchString = req.query.search;
  const results = await Group.find({ name: { $regex: searchString } });
  res.status(200).send({ groups: results });
};

const deleteGroup = async (req, res) => {
  try {
    const group = req.body;
    await Group.deleteOne({_id:group._id});
  } catch (error) {
    console.log(error);
  }
  res.status(200).send({});
};

const createGroup = async (req, res) => {
  try {
    const group = req.body;
    const newGroup = new Group({
      name: group.name,
      description: group.description,
    });   
    const dbRes = await newGroup.save();

    if (dbRes) {
      res.status(200).send({dbRes});
    }
  } catch (error) {
    console.log(error);
  }
  res.status(200).send({});
};

const getAllGroups = async(req, res) => {
  try {
    const dbRes = await Group.find({});
    console.log(dbRes);
    if (dbRes) {
      res.status(200).send({dbRes});
    }
  } catch (error) {
    console.log(error);
  }
};

const updateGroup = async(req, res) => {
  try {
    const group = req.body;
    await Group.findOneAndUpdate({_id:group._id},{name:group.name, description: group.description});
  } catch (error) {
    console.log(error);
  }
  res.status(200).send({});
};

module.exports = {
  getGroupsPage,
  getGroupProfilePage,
  getGroupsSearch,
  createGroup,
  updateGroup,
  getAllGroups,
  deleteGroup
};
