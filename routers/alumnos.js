const express = require("express");
const router = express.Router();
const controller = require("../controllers/consultar-documento");

router.get("/4d", controller.Alumnos);

module.exports = router;