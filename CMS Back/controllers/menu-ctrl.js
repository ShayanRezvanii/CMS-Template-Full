const Models = require("../models/blogModels");
const path = require("path");
const multer = require("multer");
const { portAddress } = require("../app");
// const serverPath = path.join(__dirname);
// const uploadPath = path.join(__dirname, './public/uploads');

// MenuMain => get/post/delete/update

const getMenu = async (req, res, next) => {
  const menuList = await Models.MenuModels.find();
  res.json({ menuList });
};

const getOneMenu = async (req, res, next) => {
  const paramid = req.params.pid;
  const menu = await Models.MenuModels.findById(paramid);
  res.json({ menu });
};

const getOneProduct = async (req, res, next) => {
  const paramid = req.params.pid;
  const product = await Models.bodyMenuCreateModels.findById(paramid);
  res.json({ product });
};

const postMenu = async (req, res, next) => {
  const { title, subtitle } = req.body;
  // console.log(req.file.originalname)
  // console.log(portAddress);
  var data = {
    title,
    subtitle,
    image: process.env.PORT || `http://localhost:8000/` + req.file.path,
  };
  const newList = new Models.MenuModels(data);
  // console.log(process.env.PORT || 'http:\\\\localhost:8000\\'  + req.file.path )
  await newList.save();
  res.status(201).json({ newList });
};

const updateMenu = async (req, res, next) => {
  const { title, subtitle } = req.body;
  // console.log(req.file.originalname);
  const newMenu = await Models.MenuModels.findByIdAndUpdate(req.params.pid, {
    $set: {
      title: title,
      subtitle: subtitle,
      image: process.env.PORT || "http://localhost:8000/" + req.file.path,
    },
  });
  res.status(200).json({ newMenu });
};

// bodyMenu => get/post/delete/update
const getBodyMenu = async (req, res, next) => {
  const bodyMenu = await Models.bodyMenuCreateModels.find();
  res.json({ bodyMenu });
};

const postBody = async (req, res, next) => {
  const { title, resepi, amount } = req.body;

  const newbodyMenu = new Models.bodyMenuCreateModels({
    title,
    resepi,
    amount,
  });
  await newbodyMenu.save();
  res.status(201).json({ newbodyMenu });
};

const deleteBodyMenu = async (req, res, next) => {
  const paramid = req.params.pid;
  const menu = Models.bodyMenuCreateModels.findById(paramid);
  await menu.remove();
  res.status(200).json("Menu Deleted ...");
};

const updateBodyMenu = async (req, res, next) => {
  const { title, resepi, amount } = req.body;
  const updateMenu = await Models.bodyMenuCreateModels.findByIdAndUpdate(
    req.params.pid,
    {
      $set: {
        title,
        amount,
        resepi,
      },
    }
  );
  res.status(200).json({ updateMenu });
};

exports.getMenu = getMenu;
exports.getOneMenu = getOneMenu;
exports.postMenu = postMenu;
exports.updateMenu = updateMenu;

exports.getBodyMenu = getBodyMenu;
exports.postBody = postBody;
exports.deleteBodyMenu = deleteBodyMenu;
exports.updateBodyMenu = updateBodyMenu;
exports.getOneProduct = getOneProduct;
