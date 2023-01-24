/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
const Top = require("./models/top");
const Bottom = require("./models/bottom");
const Dress = require("./models/dress");
const Shoes = require("./models/shoes");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");
const { ThemeConsumer } = require("styled-components");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

//top
router.get("/top", (req, res) => {
  Top.find({}).then((tops) => {
    res.send(tops);
  });
});

router.post("/top", (req, res) => {
  const newItem = new Top({
    item_name: "String",
    item_warmth: "String",
    item_color: "String",
    item_style: "String",
    image_ref: "String",
  });
  newItem.save().then((item) => res.send(item));
});

//bottom
router.get("/bottom", (req, res) => {
  Bottom.find({}).then((bottoms) => {
    res.send(bottoms);
  });
});

router.post("/bottom", (req, res) => {
  const newItem = new Top({
    item_name: "String",
    item_warmth: "String",
    item_color: "String",
    item_style: "String",
    image_ref: "String",
  });
  newItem.save().then((item) => res.send(item));
});

//shoes
router.get("/shoes", (req, res) => {
  Shoes.find({}).then((shoes) => {
    res.send(shoes);
  });
});

router.post("/shoes", (req, res) => {
  const newItem = new Top({
    item_name: "String",
    item_warmth: "String",
    item_color: "String",
    item_style: "String",
    image_ref: "String",
  });
  newItem.save().then((item) => res.send(item));
});

//dress
router.get("/dress", (req, res) => {
  Dress.find({}).then((dresses) => {
    res.send(dresses);
  });
});

router.post("/dress", (req, res) => {
  const newItem = new Top({
    item_name: "String",
    item_warmth: "String",
    item_color: "String",
    item_style: "String",
    image_ref: "String",
  });
  newItem.save().then((item) => res.send(item));
});

// |------------------------------|
// | write your API methods above!|
// |------------------------------|

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
