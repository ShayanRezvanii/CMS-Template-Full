const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const heroModels = new Schema({
  image: { type: String },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
});

const blogModels = new Schema({
  // blog Models
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
});

const bodyBlog = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  date: { type: Date, default: Date.now },
});

const menuModels = new Schema({
  // menu Models
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  image: { type: String },
});

const bodyMenuCreate = new Schema({
  title: { type: String, required: true },
  resepi: { type: String, required: true },
  amount: { type: String, required: true },
});

const aboutModels = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  image: { type: String },
});

const aboutBody = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  image: { type: String },
});

const contactModels = new Schema({
  // contact Models
  title: { type: String },
  address: { type: String },
  phone: { type: String },
  telegram: { type: String },
  instagram: { type: String },
  whatsapp: { type: String },
  facebook: { type: String },
});

const HeroModels = mongoose.model("Hero", heroModels);
const BlogModels = mongoose.model("Blog", blogModels);
const MenuModels = mongoose.model("Menu", menuModels);
const AboutModels = mongoose.model("About", aboutModels);
const ContactModels = mongoose.model("Contact", contactModels);
const bodyMenuCreateModels = mongoose.model("bodyMenuCreate", bodyMenuCreate);
const bodyBlogModel = mongoose.model("bodyBlog", bodyBlog);
const aboutBodyModels = mongoose.model("aboutBody", aboutBody);

module.exports = {
  HeroModels,
  BlogModels,
  MenuModels,
  AboutModels,
  ContactModels,
  bodyMenuCreateModels,
  bodyBlogModel,
  aboutBodyModels,
};
