const express = require("express");

const router = express.Router();

const controller = require("../controllers/consultar-documento");

//router.get("/", controller.Videos);
router.get("/web", controller.VideosWeb);
router.get("/cliente", controller.VideosCliente);
router.get("/servidor", controller.VideosServidor);

module.exports = router;  