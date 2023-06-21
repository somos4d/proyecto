const express = require("express");

const router = express.Router();

const controller = require("../controllers/registrar-documento");

router.get("/nuevo", controller.Nuevo);
router.post("/nuevo", controller.Agregar);

module.exports = router;