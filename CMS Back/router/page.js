const express = require("express");
const router = express.Router();
const heroControllers = require("../controllers/hero-ctrl");
const menuControllers = require("../controllers/menu-ctrl");
const blogControllers = require("../controllers/blog-ctrl");
const aboutControllers = require("../controllers/about.ctrl");
const contactControllers = require("../controllers/contact-ctrl");
const userControllers = require("../controllers/user-ctrl");
const upload = require("../controllers/images-ctrl");

// router.post('/upload' , imageControllers.uploadImage)

// hero routes
router.get("/hero", heroControllers.getHero);
router.delete("/hero/delete/:pid", heroControllers.deleteHero);
router.put(
  "/hero/update/:pid",
  upload.single("image"),
  heroControllers.updateHero
);
router.post("/hero", upload.single("image"), heroControllers.postHero);

// menu routes
router.get("/menu/main/get", menuControllers.getMenu);
router.get("/menu/main/get/:pid", menuControllers.getOneMenu);
router.post("/menu/main", upload.single("image"), menuControllers.postMenu);
router.put(
  "/menu/main/update/:pid",
  upload.single("image"),
  menuControllers.updateMenu
);

router.get("/menu/menu/get", menuControllers.getBodyMenu);
router.get("/menu/menu/get/:pid", menuControllers.getOneProduct);
router.post("/menu/menu", menuControllers.postBody);
router.delete("/menu/menu/delete/:pid", menuControllers.deleteBodyMenu);
router.put("/menu/menu/update/:pid", menuControllers.updateBodyMenu);

router.get("/blogs/get", blogControllers.getBlog);
router.post("/blog", blogControllers.postBlog);
router.put("/blogs/update/:pid", blogControllers.updateBlog);

router.get("/blog/get", blogControllers.getBody);
router.get("/blog/get/:pid", blogControllers.getOneBody);

router.post("/blog/new", upload.single("image"), blogControllers.postBody);
router.delete("/blog/delete/:pid", blogControllers.deleteBody);
router.put(
  "/blog/blog/update/:pid",
  upload.single("image"),
  blogControllers.updateBody
);

// router.delete('/blog/delete/:pid', blogControllers.deleteBlog)

router.get("/abouts/get", aboutControllers.getAbout);
router.post("/about", upload.single("image"), aboutControllers.postAbout);
// router.delete("/about/delete/:pid", aboutControllers.deleteAbout);
router.put(
  "/about/update/:pid",
  upload.single("image"),
  aboutControllers.updateAbout
);

router.get("/about/get", aboutControllers.getBodyAbout);
router.get("/about/get/:pid", aboutControllers.getOneAbout);
router.post(
  "/about/new",
  upload.single("image"),
  aboutControllers.postBodyAbout
);
router.delete("/about/delete/:pid", aboutControllers.deleteBodyAbout);
router.put(
  "/about/about/update/:pid",
  upload.single("image"),
  aboutControllers.updateBodyAbout
);

router.get("/contact", contactControllers.getContact);
router.post("/contact", contactControllers.postContact);
router.delete("/contact/delete/:pid", contactControllers.deleteContact);
router.put("/contact/update/:pid", contactControllers.updateContact);

router.get("/users", userControllers.getUsers);
router.get("/user/:pid", userControllers.getOneUser);
router.post("/signup",upload.single("image"), userControllers.signup);
//send without form data
router.post("/login", userControllers.login); 
//send form data
router.put('/user/update/:pid' ,upload.single("image"), userControllers.updateUser)
module.exports = router;
