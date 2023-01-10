const Models = require("../models/blogModels");

const getBlog = async (req, res, next) => {
  const blogs = await Models.BlogModels.find();
  res.json({ blogs });
};

const postBlog = async (req, res, next) => {
  const { title, subtitle } = req.body;
  const createBlog = new Models.BlogModels({ title, subtitle });
  await createBlog.save();
  res.status(201).json({ createBlog });
};

const updateBlog = async (req, res, next) => {
  const { title, subtitle } = req.body;
  const newBlog = await Models.BlogModels.findByIdAndUpdate(req.params.pid, {
    $set: {
      title: title,
      subtitle: subtitle,
    },
  });
  res.status(200).json({ newBlog });
};

const getBody = async (req, res, next) => {
  const bodyblogs = await Models.bodyBlogModel.find();
  res.json({ bodyblogs });
};

const postBody = async (req, res, next) => {
  const { title, subtitle, content } = req.body;

  var data = {
    title,
    subtitle,
    content,
    image: process.env.PORT || "http://localhost:8000/" + req.file.path,
  };
  const blog = new Models.bodyBlogModel(data);
  await blog.save();
  res.status(201).json({ blog });
};

const deleteBody = async (req, res, next) => {
  const paramid = req.params.pid;
  const blog = await Models.bodyBlogModel.findById(paramid);
  await blog.remove();
  res.status(200).json("Deleted Blog ...");
};

const updateBody = async (req, res, next) => {
  const paramid = req.params.pid;
  const { title, subtitle, content } = req.body;
  const blog = await Models.bodyBlogModel.findByIdAndUpdate(paramid, {
    $set: {
      title,
      subtitle,
      content,
      image: process.env.PORT || "http://localhost:8000/" + req.file.path,
    },
  });
  res.status(200).json({ blog });
};

const getOneBody = async (req, res, next) => {
  const paramid = req.params.pid;
  const blog = await Models.bodyBlogModel.findById(paramid);
  res.json({ blog });
};

exports.getBlog = getBlog;
exports.postBlog = postBlog;
exports.updateBlog = updateBlog;

exports.getBody = getBody;
exports.postBody = postBody;
exports.deleteBody = deleteBody;
exports.updateBody = updateBody;
exports.getOneBody = getOneBody;
