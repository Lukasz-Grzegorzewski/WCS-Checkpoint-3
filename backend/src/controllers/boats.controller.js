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
      // const { test } = req.query;
      // console.log("test: ", test);
      console.warn("boat: ", boat);
      return res.status(200).send(boat);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    });
};

module.exports = {
  findAll,
  findByName,
};
