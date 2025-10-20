const express = require("express");
const route = express.Router();
const controller = require("../controller/controller")

// Saare cricket matches fetch karne ke liye
route.get("/matches", controller.getMatches);

// Event ID ke hisab se match details fetch karne ke liye
route.get("/match-details/:eventId", controller.getMatchDetails);

module.exports = route