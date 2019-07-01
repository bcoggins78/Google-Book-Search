const db = require("../models");
const axios = require("axios");
var express = require("express")
var router = express.Router();

 // Retrieve unsaved articles from MongoDB
 router.get("/api/searchbooks", function(req, res) {

    axios
        .get("https://www.googleapis.com/books/v1/volumes?q", { params: req.query })
        .then(({ data: { results } }) => res.json(results))
        .catch(err => res.status(422).json(err));
});

module.exports = router;
