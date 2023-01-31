/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");
const ClothingItem = require("./models/clothingItem");

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
const { response } = require("express");
// const { ThemeConsumer } = require("styled-components");

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

router.post("/picture", (req, res) => {
  const get_str_ref = (link) => {
    var new_link;
    new_link = "";
    for (var i = 0, _pj_a = link.length; i < _pj_a; i += 1) {
      if (new_link === "https://") {
        new_link += "i.";
      }
      new_link += link[i];
    }
    return new_link + ".jpg";
  };
  console.log(req.body);
  if (req.body.picture) {
    console.log("here");
    const new_value = get_str_ref(req.body.picture);
    const clothingItem = new ClothingItem({
      item_file: new_value,
      item_name: req.body.name,
      item_type: req.body.type,
      item_style: req.body.style,
      user: req.body.user,
      item_color: req.body.color,
      item_warmth_score: req.body.warmth,
    });
    clothingItem.save().then(() => res.send({ sucess: true }));
  } else {
    res.send({ sucess: false, reason: "random" });
  }
});

router.get("/pictures", (req, res) => {
  if (req.query.item_type === "all") {
    query = { user: req.query.user };
  } else {
    query = { user: req.query.user, item_type: req.query.item_type };
  }
  ClothingItem.find(query)
    .then((pictures) => {
      return pictures;
    })
    .then((pictures) => res.send(pictures));
});

router.get("/outfit", (req, res) => {
  query = { user: req.query.user, item_file: req.query.file };
  ClothingItem.find(query)
    .then((pictures) => {
      return pictures;
    })
    .then((pictures) => res.send(pictures));
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
