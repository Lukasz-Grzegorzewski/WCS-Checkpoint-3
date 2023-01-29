const express = require("express");
const tilesController = require("./controllers/tiles.controller");
const boatsController = require("./controllers/boats.controller");
const resetController = require("./controllers/reset.controller");
const tileExists = require("./services/tileExists");

const router = express.Router();

/* ROUTES */
// get
router.get("/tiles", tilesController.findAll);
// router.get("/boats", boatsController.findAll);
router.get("/boats", boatsController.findByName);

// put
router.put("/boats/:id", tileExists.tileExists, boatsController.updateById);
/***/

// post
router.post("/games", resetController.resetBP);
/***/

module.exports = router;
