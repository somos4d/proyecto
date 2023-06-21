const express = require("express");
const controller = require("../controllers/eliminar-documento");

const router = express.Router();


router.delete("/web/:id", controller.eliminarVideo);
router.delete("/cliente/:id", controller.eliminarVideo);
router.delete("/servidor/:id", controller.eliminarVideo);


module.exports = router;