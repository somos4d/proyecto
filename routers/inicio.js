const express = require("express");

const router = express.Router();

const controller = require("../controllers/inicio");

router.get("/", controller.Inicio);

module.exports = router;