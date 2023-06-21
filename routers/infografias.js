const express = require("express");

const router = express.Router();

const controller = require("../controllers/consultar-documento");

router.get("/web", controller.InfografiasWeb);
router.get("/cliente", controller.InfografiasCliente);
router.get("/servidor", controller.InfografiasServidor);

module.exports = router;  