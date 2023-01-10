const Models = require("../models/blogModels");

const getAbout = async (req, res, next) => {
  const about = await Models.AboutModels.find();
  res.json({ about });
};

const postAbout = async (req, res, next) => {
  const { title, subtitle } = req.body;
  var data = {
    title,
    subtitle,
    image: process.env.PORT || "http://localhost:8000/" + req.file.path,
  };
  const createAbout = await Models.AboutModels(data);
  await createAbout.save();
  res.status(201).json({ createAbout });
};
const updateAbout = async (req, res, next) => {
  const { title, subtitle } = req.body;
  // console.log(req.file.originalname);
  const newAbout = await Models.AboutModels.findByIdAndUpdate(req.params.pid, {
    $set: {
      title: title,
      subtitle: subtitle,
      image: process.env.PORT || "http://localhost:8000/" + req.file.path,
    },
  });
  res.status(200).json({ newAbout });
};

const getBodyAbout = async (req, res, next) => {
  const bodyAbouts = await Models.aboutBodyModels.find();
  res.json({ bodyAbouts });
};

const getOneAbout = async (req, res, next) => {
  const paramid = req.params.pid;
  const about = await Models.aboutBodyModels.findById(paramid);
  res.json({ about });
};

const postBodyAbout = async (req, res, next) => {
  const { title, subtitle } = req.body;
  var data = {
    title,
    subtitle,
    image: process.env.PORT || "http://localhost:8000/" + req.file.path,
  };
  const about = new Models.aboutBodyModels(data);
  await about.save();
  res.status(201).json({ about });
};

const deleteBodyAbout = async (req, res, next) => {
  const paramid = req.params.pid;
  const about = await Models.aboutBodyModels.findById(paramid);
  await about.remove();
  res.json("About Deleted ...");
};

const updateBodyAbout = async (req, res, next) => {
  const { title, subtitle } = req.body;
  const about = await Models.aboutBodyModels.findByIdAndUpdate(req.params.pid, {
    $set: {
      title,
      subtitle,
      logo: process.env.PORT || "http://localhost:8000/" + req.file.path,
    },
  });
  res.status(200).json({ about });
};

exports.getAbout = getAbout;
exports.postAbout = postAbout;
exports.updateAbout = updateAbout;

exports.getBodyAbout = getBodyAbout;
exports.getOneAbout = getOneAbout;
exports.postBodyAbout = postBodyAbout;
exports.deleteBodyAbout = deleteBodyAbout;
exports.updateBodyAbout = updateBodyAbout;
