const BoatManager = require("../models/BoatManager");
const TileManager = require("../models/TileManager");

const resetBP = (req, res) => {
  BoatManager.resetBP()
    .then(([result]) => {
      if (result.affectedRows !== 0) {
        TileManager.hideTreasure()
          .then(() => {
            TileManager.getAllIslandTiles()
              .then(([respon]) => {
                console.warn("respons", respon);

                TileManager.putTreasure(respon)
                  .then(() => {
                    res.sendStatus(201);
                  })
                  .catch((err) => console.warn(err));
              })
              .catch((err) => console.warn(err));
          })
          .catch((err) => console.warn(err));
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

module.exports = {
  resetBP,
};
