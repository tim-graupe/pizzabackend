var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;

//pizza ideas

//have options
//using redux, allow user to select takeout or homemade. this will display an upload form for either a review or recipe.
//allow others to comment and leave reviews
//create a get request to rank pizzas, filter by type or search keywords/tags
//check this out for uploading images https://pqina.nl/blog/upload-image-with-nodejs/
//use google maps or yelp to tag pizza location
//on the home page, display a pizza fact. either randomly or have
