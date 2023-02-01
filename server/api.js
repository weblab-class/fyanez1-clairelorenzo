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

const general_data = [
  {
    item_file: "https://imgur.com/3hNOlsF.jpg",
    item_name: "White t-shirt",
    item_type: "Bottom",
    item_style: "Casual",
    item_color: "White",
    item_warmth_score: 4,
  },
  {
    item_file: "https://imgur.com/6UE1LC1.jpg",
    item_name: "Jeans",
    item_type: "Bottom",
    item_style: "Casual",
    item_color: "Black",
    item_warmth_score: 4,
  },
  {
    item_file: "https://imgur.com/kZiUydI.jpg",
    item_name: "Shirt",
    item_type: "Top",
    item_style: "Casual",
    item_color: "Blue",
    item_warmth_score: 4,
  },
  {
    item_file: "https://imgur.com/keoDMYi.jpg",
    item_name: "Shirt",
    item_type: "Top",
    item_style: "Casual",
    item_color: "Green",
    item_warmth_score: 4,
  },
  {
    item_file: "https://i.imgur.com/6Ot1hEK.jpg",
    item_name: "Dress",
    item_type: "Dress",
    item_style: "Casual",
    item_color: "Red",
    item_warmth_score: 2,
  },
  {
    item_file: "https://i.imgur.com/zVMO24Q.jpg",
    item_name: "Dress",
    item_type: "Dress",
    item_style: "Casual",
    item_color: "Blue",
    item_warmth_score: 2,
  },
  {
    item_file: "https://i.imgur.com/tP0Td1N.jpg",
    item_name: "Dress",
    item_type: "Dress",
    item_style: "Casual",
    item_color: "White",
    item_warmth_score: 2,
  },
  {
    item_file: "https://i.imgur.com/tKioO42.jpg",
    item_name: "Dress",
    item_type: "Dress",
    item_style: "Casual",
    item_color: "Black",
    item_warmth_score: 2,
  },
  {
    item_file: "https://i.imgur.com/t8pseuU.jpg",
    item_name: "Pants",
    item_type: "Bottom",
    item_style: "Casual",
    item_color: "Gray",
    item_warmth_score: 1,
  },
  {
    item_file: "https://i.imgur.com/o4yhVX6.jpg",
    item_name: "Pants",
    item_type: "Bottom",
    item_style: "Sports",
    item_color: "Black",
    item_warmth_score: 1,
  },
  {
    item_file: "https://i.imgur.com/Oyv2Fo7.jpg",
    item_name: "Pants",
    item_type: "Bottom",
    item_style: "Sports",
    item_color: "Green",
    item_warmth_score: 1,
  },
  {
    item_file: "https://i.imgur.com/zn0vZP0.jpg",
    item_name: "Shoes",
    item_type: "Shoes",
    item_style: "Formal",
    item_color: "Black",
    item_warmth_score: 1,
  },
  {
    item_file: "https://i.imgur.com/Ts03Otj.jpg",
    item_name: "Crocs",
    item_type: "Shoes",
    item_style: "Casual",
    item_color: "Black",
    item_warmth_score: 2,
  },
  {
    item_file: "https://i.imgur.com/SG06Lr2.jpg",
    item_name: "Heels",
    item_type: "Shoes",
    item_style: "Formal",
    item_color: "Black",
    item_warmth_score: 2,
  },
  {
    item_file: "https://i.imgur.com/gzRqFxy.jpg",
    item_name: "Shoes",
    item_type: "Shoes",
    item_style: "Casual",
    item_color: "White",
    item_warmth_score: 1,
  },
  {
    item_file: "https://imgur.com/4gCVsNO.jpg",
    item_name: "Nike Panda",
    item_type: "Shoes",
    item_style: "Casual",
    item_color: "Black",
    item_warmth_score: 1,
  },
];

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
      return pictures.concat(general_data);
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
