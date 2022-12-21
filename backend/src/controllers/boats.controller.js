const BoatManager = require("../models/BoatManager");

const findAll = (req, res) => {
  BoatManager.findAll()
    .then(([boats]) => {
      console.warn("boats: ", boats);
      return res.status(200).send(boats);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    });
};

const findByName = (req, res) => {
  const { name } = req.query;
  console.warn("query: name = ", name);

  BoatManager.findByName(name)
    .then(([boat]) => {
      console.warn("boat: ", boat);
      return res.status(200).send(boat);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    });
};

const updateById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  console.warn("id :", id);
  const { coord_x: x, coord_y: y } = req.body;
  console.warn("x :", x, "y :", y);

  BoatManager.updateById(x, y, id)
    .then(([result]) => {
      console.warn("result.affectedRows :", result.affectedRows);
      return result.affectedRows === 0
        ? res.status(404).send("Not Found")
        : res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

module.exports = {
  findAll,
  findByName,
  updateById,
};
