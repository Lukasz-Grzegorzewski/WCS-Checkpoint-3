const TileManager = require("../models/TileManager");

const findAll = (req, res) => {
  TileManager.findAll()
    .then(([tiles]) => {
      console.warn("tiles: ", tiles);
      return res.status(200).send(tiles);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    });
};

module.exports = {
  findAll,
};
