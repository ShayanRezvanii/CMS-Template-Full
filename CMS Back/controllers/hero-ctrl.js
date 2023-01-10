const Models = require("../models/blogModels");

const getHero = async (req, res, next) => {
  const hero = await Models.HeroModels.find();
  res.json({ hero });
};

const postHero = async (req, res, next) => {
  const { title, subtitle } = req.body;
  const hero = new Models.HeroModels({
    title,
    subtitle,
    image: process.env.PORT || "http://localhost:8000/" + req.file.path,
  });
  await hero.save();
  res.status(201).json({ hero });
};

const deleteHero = async (req, res, next) => {
  const postId = req.params.pid;
  const getHero = await Models.HeroModels.findById(postId);
  await getHero.remove();
  res.status(200).json({ message: "deleted" });
};

const updateHero = async (req, res, next) => {
  const { title, subtitle } = req.body;

  const newModel = await Models.HeroModels.findByIdAndUpdate(req.params.pid, {
    $set: {
      title: title,
      subtitle: subtitle,
    },
  });
  res.status(200).json({ newModel });
};

exports.getHero = getHero;
exports.postHero = postHero;
exports.deleteHero = deleteHero;
exports.updateHero = updateHero;
